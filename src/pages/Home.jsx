import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MerchantSlider from '../components/MerchantSlider';
import TopSection from '../components/TopSection';
import CategorySection from '../components/CategorySection';
import DealsGrid from '../components/DealsGrid';
import Footer from '../components/Footer';
import SEOContent from '../components/SEOContent';

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <Hero />

                {/* Intro Section for SEO */}
                <section className="intro-section" style={{ padding: '2rem 1.5rem', background: 'var(--bg-main)', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: '1.7' }}>
                            Offerve curates the latest coupons and discount offers from India’s most popular stores. Every deal is checked and updated so you can shop smarter and save more. Explore <a href="/categories" style={{ color: 'var(--primary)' }}>categories</a>, trending <a href="/stores" style={{ color: 'var(--primary)' }}>stores</a>, and exclusive promo codes updated in real time.
                        </p>
                    </div>
                </section>

                <MerchantSlider />
                <TopSection />
                <CategorySection />
                <DealsGrid />
                <SEOContent />
            </main>

            {/* FAQ Section with Schema */}
            <div className="faq-section" style={{ padding: '60px 0', background: 'white', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Frequently Asked Questions</h2>
                    <div className="faq-grid" style={{ display: 'grid', gap: '1.5rem' }}>
                        {[
                            { q: "How does Offerve find and verify coupons?", a: "Offerve uses a dedicated team and automated systems to scour the web for the latest offers from top Indian retailers, verifying them manually to ensure they work." },
                            { q: "Are the coupon codes updated daily?", a: "Yes, our database is updated in real-time. We continuously check for new promo codes and expire invalid ones to keep our deals fresh." },
                            { q: "Is Offerve free to use?", a: "Absolutely! Offerve is completely free for all users. You don’t need to pay or sign up to access the best coupons." },
                            { q: "Which stores offer the biggest discounts?", a: "Stores like Amazon, Flipkart, Myntra, and Swiggy frequently offer massive discounts during sale events, all of which are tracked on Offerve." },
                            { q: "How do I redeem a coupon on Offerve?", a: "Simply click on 'Show Coupon Code' or 'View Offer' on any deal card. The code will be copied to your clipboard, and you'll be redirected to the store website to shop." }
                        ].map((faq, i) => (
                            <div key={i} className="faq-item" style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #eee' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{faq.q}</h3>
                                <p style={{ color: 'var(--text-body)', lineHeight: '1.6' }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "How does Offerve find and verify coupons?", "acceptedAnswer": { "@type": "Answer", "text": "Offerve uses a dedicated team and automated systems to scour the web for the latest offers from top Indian retailers, verifying them manually to ensure they work." } },
                                { "@type": "Question", "name": "Are the coupon codes updated daily?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our database is updated in real-time. We continuously check for new promo codes and expire invalid ones to keep our deals fresh." } },
                                { "@type": "Question", "name": "Is Offerve free to use?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! Offerve is completely free for all users. You don’t need to pay or sign up to access the best coupons." } },
                                { "@type": "Question", "name": "Which stores offer the biggest discounts?", "acceptedAnswer": { "@type": "Answer", "text": "Stores like Amazon, Flipkart, Myntra, and Swiggy frequently offer massive discounts during sale events, all of which are tracked on Offerve." } },
                                { "@type": "Question", "name": "How do I redeem a coupon on Offerve?", "acceptedAnswer": { "@type": "Answer", "text": "Simply click on 'Show Coupon Code' or 'View Offer' on any deal card. The code will be copied to your clipboard, and you'll be redirected to the store website to shop." } }
                            ]
                        })
                    }} />
                </div>
            </div>

            <Footer />


        </div>
    );
};

export default Home;
