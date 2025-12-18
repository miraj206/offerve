import React, { useState, useEffect } from 'react';
import CouponCard from './CouponCard';
import { stores } from '../data/stores';
import storage from '../services/safeStorage';
import { getStoreCoupons } from '../data/coupons';

const TopSection = () => {
    const [topCoupons, setTopCoupons] = useState([]);
    const [copyCounts, setCopyCounts] = useState({});

    useEffect(() => {
        // Load counts from local storage on mount
        const storedCounts = JSON.parse(storage.local.getItem('offerve_copy_counts') || '{}');
        setCopyCounts(storedCounts);
        updateRankings(storedCounts);
    }, []);

    const updateRankings = (counts) => {
        let allCoupons = [];

        stores.forEach(store => {
            const storeCoupons = getStoreCoupons(store);
            storeCoupons.forEach(coupon => {
                const trackingKey = `${store.slug}-${coupon.id}`;
                allCoupons.push({
                    ...coupon,
                    trackingKey,
                    merchant: store,
                    copyCount: counts[trackingKey] || 0
                });
            });
        });

        // Sort by copy count (desc), then randomness/recency (simulated by existing order + slight random)
        // Note: For stability in this demo, strict sort by count, then ID
        allCoupons.sort((a, b) => {
            if (b.copyCount !== a.copyCount) return b.copyCount - a.copyCount;
            // Secondary sort: pseudo-random but stable for demo? Or just store ID
            return a.id - b.id;
        });

        setTopCoupons(allCoupons.slice(0, 5)); // Show top 5 to save space, or 10 if layout permits
    };

    const handleTrackCopy = (trackingKey) => {
        const newCounts = { ...copyCounts, [trackingKey]: (copyCounts[trackingKey] || 0) + 1 };
        setCopyCounts(newCounts);
        storage.local.setItem('offerve_copy_counts', JSON.stringify(newCounts));
        updateRankings(newCounts);
    };

    return (
        <section className="top-section">
            <div className="container">
                <div className="section-grid">
                    {/* Top Coupons Block */}
                    <div className="top-block coupons-block">
                        <div className="block-header">
                            <h2>🔥 Top Coupons</h2>
                            <span className="live-badge">Live Ranking</span>
                        </div>
                        <div className="coupons-stack">
                            {topCoupons.map((coupon, index) => (
                                <div key={coupon.trackingKey} className="ranked-coupon-wrapper">
                                    <div className="rank-number">#{index + 1}</div>
                                    <CouponCard
                                        {...coupon}
                                        ribbon={index === 0 ? "MOST COPIED" : coupon.ribbon}
                                        onCopy={() => handleTrackCopy(coupon.trackingKey)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Offers / Blog Block */}
                    <div className="top-block offers-block">
                        <div className="block-header">
                            <h2>⚡ Top Offers & Guides</h2>
                            <a href="#" className="view-all">View All</a>
                        </div>
                        <div className="offers-grid">
                            {/* Placeholder Offer 1 */}
                            <article className="offer-card">
                                <div className="offer-img-box" style={{ background: '#ffe4e6' }}>
                                    <span className="offer-tag">Tricks</span>
                                </div>
                                <div className="offer-content">
                                    <h3>How to save ₹500 on every Zomato Order</h3>
                                    <p>Use these hidden bank combinations to maximize your food savings today.</p>
                                    <button className="read-btn">Read Guide</button>
                                </div>
                            </article>

                            {/* Placeholder Offer 2 */}
                            <article className="offer-card">
                                <div className="offer-img-box" style={{ background: '#dcfce7' }}>
                                    <span className="offer-tag">Deal</span>
                                </div>
                                <div className="offer-content">
                                    <h3>Amazon Prime Day: Early Access List</h3>
                                    <p>Get the sneak peek of upcoming lightning deals 24 hours before sale.</p>
                                    <button className="read-btn">View Deal</button>
                                </div>
                            </article>

                            {/* Placeholder Offer 3 */}
                            <article className="offer-card">
                                <div className="offer-img-box" style={{ background: '#e0f2fe' }}>
                                    <span className="offer-tag">Travel</span>
                                </div>
                                <div className="offer-content">
                                    <h3>Flight Booking Hacks 2025</h3>
                                    <p>Secret incognito modes and VPN tricks to get cheaper flights instantly.</p>
                                    <button className="read-btn">Read Guide</button>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .top-section {
                    padding: 3rem 0;
                    background: #f8fafc;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }

                .section-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr; /* 60/40 split */
                    gap: 2.5rem;
                }

                .block-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .block-header h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-main);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .live-badge {
                    background: #fee2e2;
                    color: #ef4444;
                    font-size: 0.75rem;
                    padding: 0.2rem 0.6rem;
                    border-radius: 20px;
                    font-weight: 700;
                    text-transform: uppercase;
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.6; }
                    100% { opacity: 1; }
                }

                .coupons-stack {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .ranked-coupon-wrapper {
                    position: relative;
                }

                .rank-number {
                    position: absolute;
                    left: -15px;
                    top: -10px;
                    background: var(--text-main);
                    color: white;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-weight: 700;
                    font-size: 0.9rem;
                    z-index: 10;
                    box-shadow: var(--shadow-sm);
                    border: 2px solid white;
                }
                
                .ranked-coupon-wrapper:nth-child(1) .rank-number { background: #eab308; } /* Gold */
                .ranked-coupon-wrapper:nth-child(2) .rank-number { background: #94a3b8; } /* Silver */
                .ranked-coupon-wrapper:nth-child(3) .rank-number { background: #b45309; } /* Bronze */

                /* Offers Block Styling */
                .offers-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .offer-card {
                    background: white;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    display: flex;
                    transition: var(--transition);
                }

                .offer-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-sm);
                }

                .offer-img-box {
                    width: 120px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .offer-tag {
                    font-weight: 700;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    opacity: 0.7;
                }

                .offer-content {
                    padding: 1.2rem;
                    flex: 1;
                }

                .offer-content h3 {
                    font-size: 1.05rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    line-height: 1.4;
                    color: var(--text-main);
                }

                .offer-content p {
                    font-size: 0.85rem;
                    color: var(--text-body);
                    margin-bottom: 1rem;
                    line-height: 1.5;
                }

                .read-btn {
                    background: transparent;
                    border: none;
                    color: var(--primary);
                    font-weight: 600;
                    font-size: 0.85rem;
                    padding: 0;
                    cursor: pointer;
                }

                .read-btn:hover {
                    text-decoration: underline;
                }

                .view-all {
                    font-size: 0.9rem;
                    color: var(--primary);
                    font-weight: 600;
                }

                @media (max-width: 900px) {
                    .section-grid {
                        grid-template-columns: 1fr;
                    }
                    .offers-block {
                        margin-top: 2rem;
                    }
                }

                @media (max-width: 768px) {
                    .offers-grid {
                        grid-template-columns: 1fr; /* Ensure offers stack */
                    }
                    .block-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default TopSection;
