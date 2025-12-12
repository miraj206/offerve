import Fuse from 'fuse.js';
import { stores } from '../data/stores';
import { getStoreCoupons } from '../data/coupons';
import analytics from './analytics';

let searchIndex = null;
let fuseInstance = null;

// Search Configuration
const fuseOptions = {
    includeScore: true,
    threshold: 0.3, // 0.0 = perfect match, 1.0 = match anything. 0.3 allows for typos
    keys: [
        { name: 'title', weight: 0.5 },
        { name: 'storeName', weight: 0.4 },
        { name: 'tags', weight: 0.3 },
        { name: 'description', weight: 0.2 },
        { name: 'storeSlug', weight: 0.4 } // Helpful for exact store searches
    ]
};

const buildIndex = () => {
    if (searchIndex) return;

    let items = [];

    // 1. Index Stores
    stores.forEach(store => {
        items.push({
            type: 'store',
            id: store.id,
            title: store.name,
            storeName: store.name,
            storeSlug: store.slug,
            description: store.description,
            tags: ['store', 'merchant', ...store.name.split(' ')],
            data: store
        });

        // 2. Index Coupons for each store
        const coupons = getStoreCoupons(store);
        coupons.forEach(coupon => {
            items.push({
                type: 'coupon',
                id: `${store.slug}-${coupon.id}`, // Unique ID
                title: coupon.title,
                storeName: store.name,
                storeSlug: store.slug,
                description: coupon.description,
                code: coupon.code,
                tags: ['coupon', 'deal', 'offer', store.name, ...(coupon.ribbon ? [coupon.ribbon] : [])],
                data: { ...coupon, merchant: store }
            });
        });
    });

    // 3. Index Pages/Blog (Static for now, can be expanded)
    items.push({ type: 'page', id: 'blog-zomato', title: 'How to save ₹500 on every Zomato Order', tags: ['blog', 'food', 'zomato'], data: { link: '#' } });
    items.push({ type: 'page', id: 'blog-amazon', title: 'Amazon Prime Day Guide', tags: ['blog', 'amazon', 'sale'], data: { link: '#' } });

    searchIndex = items;
    fuseInstance = new Fuse(items, fuseOptions);
    console.log(`Search Index Built: ${items.length} items`);
};

export const searchService = {
    init: () => buildIndex(),

    search: (query, filters = {}) => {
        if (!fuseInstance) buildIndex();
        if (!query || query.trim().length === 0) return [];

        // 1. Run Fuse Search
        const results = fuseInstance.search(query);

        // 2. Process Results
        let processed = results.map(result => ({
            ...result.item,
            score: result.score
        }));

        // 3. Apply Filters
        if (filters.type && filters.type !== 'all') {
            processed = processed.filter(item => item.type === filters.type);
        }

        // 4. Analytics Tracking (Debounced in UI, but good to have helper here)
        // logic moved to UI to prevent spamming on every keystroke

        return processed.slice(0, 20); // Limit results
    },

    suggest: (query) => {
        if (!fuseInstance) buildIndex();
        if (!query || query.length < 2) return [];

        const results = fuseInstance.search(query);
        return results.slice(0, 6).map(r => ({
            type: r.item.type,
            title: r.item.title,
            sub: r.item.type === 'coupon' ? r.item.storeName : r.item.type.toUpperCase(),
            id: r.item.id,
            slug: r.item.storeSlug
        }));
    }
};

export default searchService;
