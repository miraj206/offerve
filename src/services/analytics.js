import { stores } from '../data/stores';
import { getStoreCoupons } from '../data/coupons';
import storage from './safeStorage';

const STORAGE_KEY = 'offerve_analytics_data';
const SNAPSHOT_KEY = 'offerve_weekly_snapshot';

// Initialize data structure
const getStoredData = () => {
    try {
        const data = storage.local.getItem(STORAGE_KEY);
        const parsed = data ? JSON.parse(data) : null;

        // Validation: Ensure structure matches expected shape
        if (!parsed || !parsed.coupons || !parsed.stores || !parsed.events) {
            return {
                coupons: {},
                stores: {},
                events: []
            };
        }
        return parsed;
    } catch (e) {
        console.error("Analytics Data Corrupt, resetting", e);
        return { coupons: {}, stores: {}, events: [] };
    }
};

const saveStoredData = (data) => {
    storage.local.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const analytics = {
    // Core Tracking
    trackEvent: ({ couponId, storeSlug, type, source = 'unknown' }) => {
        const data = getStoredData();
        const key = `${storeSlug}-${couponId}`;
        const timestamp = new Date().toISOString();

        // 1. Update Coupon Metrics
        if (!data.coupons[key]) {
            data.coupons[key] = { copy: 0, click: 0, view: 0, lastEvent: null };
        }

        switch (type) {
            case 'copy': data.coupons[key].copy++; break;
            case 'click': data.coupons[key].click++; break;
            case 'view': data.coupons[key].view++; break;
        }
        data.coupons[key].lastEvent = timestamp;

        // 2. Update Store Metrics
        if (storeSlug) {
            if (!data.stores[storeSlug]) data.stores[storeSlug] = { totalCopy: 0, totalClick: 0, totalView: 0 };
            switch (type) {
                case 'copy': data.stores[storeSlug].totalCopy++; break;
                case 'click': data.stores[storeSlug].totalClick++; break;
                case 'view': data.stores[storeSlug].totalView++; break;
            }
        }

        // 3. Log Event (limit to last 100 to save space)
        data.events.unshift({ key, storeSlug, type, source, timestamp });
        if (data.events.length > 100) data.events.pop();

        saveStoredData(data);
        return true;
    },

    trackSearch: (query) => {
        const data = getStoredData();
        if (!data.searches) data.searches = {};

        data.searches[query] = (data.searches[query] || 0) + 1;
        saveStoredData(data);
    },

    getTopSearches: () => {
        const data = getStoredData();
        const searches = data.searches || {};
        return Object.entries(searches)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 10)
            .map(([query, count]) => ({ query, count }));
    },


    // Data Retrieval
    getAllCouponsWithMetrics: () => {
        const data = getStoredData();
        let allCoupons = [];

        stores.forEach(store => {
            const rawCoupons = getStoreCoupons(store);
            rawCoupons.forEach(c => {
                const key = `${store.slug}-${c.id}`;
                const metrics = data.coupons[key] || { copy: 0, click: 0, view: 0, lastEvent: null };
                allCoupons.push({
                    ...c,
                    store: store,
                    metrics,
                    trackingKey: key,
                    // Composite score for ranking: Copy has highest weight
                    score: (metrics.copy * 10) + (metrics.click * 2) + (metrics.view * 0.1)
                });
            });
        });

        return allCoupons;
    },

    getTopCoupons: (limit = 10) => {
        const all = analytics.getAllCouponsWithMetrics();
        // Sort by copy count primarily, then score, then internal ID stability
        return all.sort((a, b) => {
            if (b.metrics.copy !== a.metrics.copy) return b.metrics.copy - a.metrics.copy;
            return b.score - a.score;
        }).slice(0, limit);
    },

    getStoreMetrics: () => {
        const data = getStoredData();
        return stores.map(store => ({
            ...store,
            analytics: data.stores[store.slug] || { totalCopy: 0, totalClick: 0, totalView: 0 }
        })).sort((a, b) => b.analytics.totalCopy - a.analytics.totalCopy);
    },

    // Admin Tools
    generateWeeklySnapshot: () => {
        const top20 = analytics.getTopCoupons(20);
        const snapshot = {
            date: new Date().toISOString(),
            weekId: `Week ${getWeekNumber(new Date())}`,
            items: top20
        };

        let history = JSON.parse(storage.local.getItem(SNAPSHOT_KEY) || '[]');
        history.unshift(snapshot);
        storage.local.setItem(SNAPSHOT_KEY, JSON.stringify(history));
        return snapshot;
    },

    getSnapshots: () => {
        return JSON.parse(storage.local.getItem(SNAPSHOT_KEY) || '[]');
    },

    getEventsLog: () => {
        return getStoredData().events;
    },

    resetData: () => {
        storage.local.removeItem(STORAGE_KEY);
        storage.local.removeItem(SNAPSHOT_KEY);
    },

    exportToCSV: (type) => {
        let csvContent = "data:text/csv;charset=utf-8,";
        const data = getStoredData();

        if (type === 'coupons') {
            const items = analytics.getAllCouponsWithMetrics();
            csvContent += "ID,Store,Title,Copy Count,Click Count,View Count,Last Event\n";
            items.forEach(i => {
                csvContent += `${i.trackingKey},${i.store.name},"${i.title.replace(/,/g, '')}",${i.metrics.copy},${i.metrics.click},${i.metrics.view},${i.metrics.lastEvent}\n`;
            });
        } else if (type === 'stores') {
            const items = analytics.getStoreMetrics();
            csvContent += "Store Name,Slug,Total Copies,Total Clicks,Total Views\n";
            items.forEach(i => {
                csvContent += `${i.name},${i.slug},${i.analytics.totalCopy},${i.analytics.totalClick},${i.analytics.totalView}\n`;
            });
        }

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `offerve_${type}_report.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

// Helper
function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNo;
}

export default analytics;
