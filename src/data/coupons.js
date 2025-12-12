
// Helper to generate random future date
const getFutureDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
};

// Helper for random code generation
const generateCode = (storeName, type) => {
    const prefix = storeName.substring(0, 3).toUpperCase();
    const suffix = Math.floor(Math.random() * 100) + 50; // Random number
    return type === 'deal' ? 'View Offer' : `${prefix}${type.toUpperCase()}${suffix}`;
};

import { staticCoupons } from './staticCoupons';

export const getStoreCoupons = (store) => {
    if (!store) return [];

    // Check if we have static coupons for this store
    if (staticCoupons[store.slug]) {
        return staticCoupons[store.slug];
    }

    const coupons = [];
    const discountTypes = ['Flat', 'Up to', 'Extra'];
    const categories = ['Fashion', 'Electronics', 'Home', 'Beauty', 'Travel', 'Food'];

    // 1. Core High Value Coupons (5)
    coupons.push(
        { id: 1, title: `Flat 50% OFF on ${store.name} Best Sellers`, description: `Get half price on top rated products. Limited time offer.`, code: generateCode(store.name, '50OFF'), verified: true, exclusive: true, ribbon: 'BEST SELLER', type: 'code' },
        { id: 2, title: `Extra 20% OFF on First Order`, description: `New user exclusive. Sign up and save big on your first purchase.`, code: generateCode(store.name, 'NEW20'), verified: true, ribbon: 'NEW USER', type: 'code' },
        { id: 3, title: `Bank Offer: 10% Instant Discount`, description: `Use HDFC or ICICI Credit Cards. Min purchase ₹3000.`, code: generateCode(store.name, 'BANK10'), verified: true, badge: 'bank', type: 'code' },
        { id: 4, title: `${store.name} App Exclusive: Flat ₹200 OFF`, description: `Valid only on app orders above ₹1500.`, code: generateCode(store.name, 'APP200'), verified: true, badge: 'mobile', type: 'code' },
        { id: 5, title: `Free Delivery on All Orders`, description: `No minimum order value required for limited period.`, code: 'FREEDEL', verified: true, ribbon: 'FREE SHIPPING', type: 'deal' }
    );

    // 2. Category Specific Coupons (10)
    categories.forEach((cat, i) => {
        coupons.push({
            id: 10 + i,
            title: `Up to 60% OFF on ${cat}`,
            description: `Best deals on ${cat} items. Shop now and save.`,
            code: generateCode(store.name, cat.substring(0, 3)),
            verified: Math.random() > 0.3,
            expiry: getFutureDate(Math.floor(Math.random() * 30) + 2),
            type: 'deal'
        });
    });

    // 3. Generic/Filler Coupons to reach 30
    for (let i = 0; i < 15; i++) {
        const discountVal = (Math.floor(Math.random() * 6) + 1) * 10; // 10, 20... 60
        const type = discountTypes[Math.floor(Math.random() * discountTypes.length)];
        coupons.push({
            id: 100 + i,
            title: `${type} ${discountVal}% OFF on Selected Items`,
            description: `Applicable on specific range of products. T&C apply.`,
            code: generateCode(store.name, 'SAVE'),
            verified: Math.random() > 0.5,
            expiry: getFutureDate(Math.floor(Math.random() * 60) + 5),
            type: Math.random() > 0.7 ? 'code' : 'deal'
        });
    }

    return coupons;
};

// Keep static export for backward compatibility if needed, or remove
export const coupons = [];
