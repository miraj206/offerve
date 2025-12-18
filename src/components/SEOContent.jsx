import React from 'react';

const SEOContent = () => {
    return (
        <section className="seo-content-section">
            <div className="container">
                <div className="seo-grid">
                    <div className="seo-block">
                        <h2>Save More with Verified Coupons & Deals on Offerve</h2>
                        <p>
                            Offerve is your trusted destination to find the latest coupon codes, promo offers, and online deals from India’s most popular brands. Whether you are shopping for fashion, food delivery, travel bookings, electronics, or entertainment, Offerve helps you save more on every purchase.
                        </p>
                        <p>
                            We track and verify deals from top stores like Amazon, Flipkart, Myntra, Swiggy, Zomato, Uber, MakeMyTrip, OYO, and many more. Every coupon listed on Offerve is checked regularly so you always get working and up-to-date discount codes.
                        </p>
                    </div>

                    <div className="seo-block">
                        <h2>Why Choose Offerve for Coupons and Promo Codes?</h2>
                        <p>
                            At Offerve, our goal is simple — help you shop smarter and spend less. Our platform is designed to make saving money easy, fast, and reliable.
                        </p>
                        <ul className="check-list">
                            <li>Verified and regularly updated coupon codes</li>
                            <li>Easy-to-copy promo codes with one click</li>
                            <li>Live ranking of most-used coupons</li>
                            <li>Deals across multiple categories like fashion, travel, food, electronics, and recharge</li>
                            <li>Free to use — no signup required</li>
                        </ul>
                        <p>
                            From exclusive online discounts to seasonal sale offers, Offerve ensures you never miss a saving opportunity.
                        </p>
                    </div>

                    <div className="seo-block">
                        <h2>Browse Deals by Category and Store</h2>
                        <p>
                            Finding the right deal is simple on Offerve. You can browse coupons by category such as fashion, food, travel, electronics, grocery, beauty, and entertainment, or explore offers from your favorite online stores.
                        </p>
                        <p>
                            Each store page shows all available offers, coupon codes, and ongoing deals in one place, making it easier to compare and choose the best discount before you checkout.
                        </p>
                    </div>

                    <div className="seo-block">
                        <h2>How to Use Coupons on Offerve</h2>
                        <p>Using coupons on Offerve is quick and hassle-free:</p>
                        <ol className="step-list">
                            <li>Search for a store or browse categories</li>
                            <li>Click on “Copy” or “View Deal”</li>
                            <li>The coupon code is copied automatically</li>
                            <li>You are redirected to the store’s website</li>
                            <li>Apply the code at checkout and save instantly</li>
                        </ol>
                        <p>No complicated steps, no hidden conditions.</p>
                    </div>

                    <div className="seo-block">
                        <h2>Share Coupons, Deals & Money-Saving Tips</h2>
                        <p>
                            Have a coupon or deal that’s not listed on Offerve? You can easily submit coupons, deals, or offers using our submission form. Once reviewed, valid submissions are published to help thousands of other users save money.
                        </p>
                        <p>
                            Offerve is built as a community-driven savings platform where everyone benefits.
                        </p>
                    </div>

                    <div className="seo-block highlight-block">
                        <h2>Start Saving Today with Offerve</h2>
                        <p>
                            From daily shopping discounts to exclusive promo codes and trending deals, Offerve brings you the best savings across the internet. Bookmark Offerve and check back regularly to stay updated with the latest offers and verified coupon codes.
                        </p>
                        <p><strong>Save more. Shop smarter. Only on Offerve.</strong></p>
                    </div>
                </div>
            </div>

            <style>{`
                .seo-content-section {
                    padding: 4rem 0;
                    background: #fff;
                    border-top: 1px solid rgba(0,0,0,0.05);
                }
                
                .seo-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .seo-block h2 {
                    font-size: 1.5rem;
                    color: var(--text-main);
                    margin-bottom: 1rem;
                    font-weight: 700;
                }

                .seo-block p {
                    color: var(--text-body);
                    line-height: 1.7;
                    margin-bottom: 1rem;
                    font-size: 1rem;
                }

                .check-list, .step-list {
                    margin: 1.5rem 0;
                    padding-left: 1.5rem;
                }

                .check-list li, .step-list li {
                    margin-bottom: 0.8rem;
                    color: var(--text-body);
                    line-height: 1.6;
                }
                
                .highlight-block {
                    background: #f8fafc;
                    padding: 2rem;
                    border-radius: var(--radius-md);
                    border: 1px solid #e2e8f0;
                    text-align: center;
                }
            `}</style>
        </section>
    );
};

export default SEOContent;
