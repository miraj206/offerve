import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="about-page">
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-light)' }}>
                {/* Page Header */}
                <section className="page-header" style={{ background: 'var(--bg-main)', padding: '4rem 1.5rem', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>About Offerve</h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                            We are on a mission to help you save money on every purchase. Discover the best deals, coupons, and offers from your favorite stores.
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="content-section" style={{ padding: '4rem 1.5rem' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>

                        <div className="about-grid" style={{ display: 'grid', gap: '3rem' }}>

                            <div className="about-block">
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Our Mission</h2>
                                <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                                    At Offerve, we believe that saving money shouldn't be complicated. Our team works tirelessly to curate the most up-to-date and valid coupons from thousands of online retailers. Whether you're shopping for fashion, electronics, food, or travel, we've got a deal for you.
                                </p>
                            </div>

                            <div className="about-block">
                                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Why Choose Us?</h2>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                                    {[
                                        { title: "Verified Coupons", desc: "Every code is tested manually to ensure it works." },
                                        { title: "Real-Time Updates", desc: "We update our database 24/7 so you never miss a deal." },
                                        { title: "Exclusive Offers", desc: "We partner with top brands to bring you exclusive discounts." }
                                    ].map((item, index) => (
                                        <li key={index} style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                            <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{item.title}</strong>
                                            <span style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>{item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
