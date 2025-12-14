import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    useEffect(() => {
        document.title = "About Offerve - India's #1 Coupon & Deal Discovery Engine";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Learn about Offerve, the leading destination for verified coupons, promo codes, and exclusive deals in India. Discover how we help millions save money daily.');
        }
        window.scrollTo(0, 0);
    }, []);

    const faqList = [
        { q: "Is Offerve completely free to use?", a: "Yes! Offerve is 100% free for all users. You never have to pay a subscription fee or hidden charge to access our coupons." },
        { q: "How often are coupons updated?", a: "Our database is updated in real-time. We have a dedicated team and automated systems that add hundreds of new coupons daily and remove expired ones to keep your experience frustration-free." },
        { q: "Do I need to register to use a coupon?", a: "No registration is required. You can search for a store, click on a coupon to copy it, and start saving immediately at the store's checkout page." },
        { q: "What if a coupon doesn't work?", a: "While we strive for 100% accuracy, sometimes retailers change terms without notice. If you find a broken code, please verify the terms and conditions. If it still fails, let us know via our Contact page, and we'll fix it instantly." },
        { q: "Do you have a mobile app?", a: "Currently, we offer a highly optimized mobile-responsive website that works perfectly on all smartphones and tablets, so you can save on the go without downloading an app." },
        { q: "Is it safe to use coupons from Offerve?", a: "Absolutely. We only partner with reputable online retailers and verify our links to ensure they are safe and secure. We respect your privacy and do not track your personal shopping data." },
        { q: "Can I submit a coupon I found?", a: "Yes, we love community contributions! If you found a working code that we missed, please share it through our Contact Us page so other shoppers can benefit." },
        { q: "How do you make money if it's free?", a: "We may earn a small commission from retailers when you make a purchase using our links. This comes at no extra cost to you—in fact, it ensures we can keep the platform free and running." }
    ];

    return (
        <div className="about-page">
            <Header />
            <main className="about-main">

                {/* Hero Section */}
                <section className="about-hero">
                    <div className="container hero-container">
                        <h1>
                            We're on a Mission to <br /><span>Democratize Savings</span>
                        </h1>
                        <p>
                            Offerve is India's fastest-growing destination for smart shoppers. We combine cutting-edge technology with human verification to bring you thousands of active deals every single day.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section">
                    <div className="container stats-grid">
                        {[
                            { label: "Active Coupons", value: "50,000+" },
                            { label: "Partner Stores", value: "2,500+" },
                            { label: "Happy Users", value: "1M+" },
                            { label: "Daily Updates", value: "24/7" }
                        ].map((stat, idx) => (
                            <div key={idx} className="stat-card">
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Detailed Content */}
                <section className="content-section">
                    <div className="container content-container">

                        <div className="text-block">
                            <h2>Who We Are</h2>
                            <p>
                                Founded with a simple yet powerful idea, <strong>Offerve</strong> started as a small project to help friends find working promo codes. Today, it has evolved into a comprehensive savings platform trust by millions.
                            </p>
                            <p>
                                In a digital age where online shopping is the norm, finding a working discount code shouldn't feel like finding a needle in a haystack. That's why we built Offerve – a platform that prioritizes <strong>accuracy, transparency, and ease of use</strong>. We are a team of deal hunters, tech enthusiasts, and savings experts dedicated to keeping money in your pocket.
                            </p>
                        </div>

                        <div className="how-it-works">
                            <h2>How We Work</h2>
                            <div className="steps-grid">
                                {[
                                    { title: "1. We Hunt", desc: "Our automated algorithms and expert team scan the web 24/7 to find the latest offers from top brands." },
                                    { title: "2. We Verify", desc: "We don't just post anything. Every coupon is manually tested to ensure it actually works at checkout." },
                                    { title: "3. You Save", desc: "We organize deals clearly, so you can copy a code and apply it in seconds, saving money instantly." }
                                ].map((step, idx) => (
                                    <div key={idx} className="step-card">
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Categories SEO Text */}
                        <div className="text-block">
                            <h2>Your One-Stop Shop for Everything</h2>
                            <p>
                                Whether you are looking to upgrade your wardrobe with the latest <strong>Fashion</strong> trends from Myntra and Ajio, ordering delicious meals from <strong>Food Delivery</strong> giants like Swiggy and Zomato, or booking your next vacation via <strong>Travel</strong> portals like MakeMyTrip, Offerve has you covered. We also feature extensive deals for <strong>Electronics</strong>, <strong>Beauty</strong>, <strong>Hosting</strong>, and <strong>Education</strong> platforms.
                            </p>
                        </div>

                        {/* FAQ Section with Accordion */}
                        <div className="faq-section">
                            <h2>Frequently Asked Questions</h2>
                            <div className="faq-grid">
                                {faqList.map((faq, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => toggleFaq(idx)}
                                        className={`faq-item ${openFaq === idx ? 'active' : ''}`}
                                    >
                                        <div className="faq-header">
                                            <h3>{faq.q}</h3>
                                            <span className="faq-icon">+</span>
                                        </div>
                                        {openFaq === idx && (
                                            <div className="faq-answer">
                                                <p>{faq.a}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <section className="cta-section">
                            <div className="container">
                                <h2>Ready to Start Saving?</h2>
                                <p>Join massive community of smart shoppers and never pay full price again.</p>
                                <a href="/" className="cta-btn">
                                    Browse Today's Top Deals
                                </a>
                            </div>
                        </section>

                    </div>
                </section>

            </main>
            <Footer />

            <style>{`
                /* Base Styles */
                .about-main {
                    min-height: 100vh;
                    background: var(--bg-light);
                    font-family: var(--font-main, sans-serif);
                }

                .container {
                    padding: 0 1.5rem;
                    margin: 0 auto;
                }

                /* Hero Section */
                .about-hero {
                    background: linear-gradient(135deg, var(--bg-main) 0%, #ffffff 100%);
                    padding: 5rem 1.5rem;
                    text-align: center;
                }

                .hero-container {
                    max-width: 900px;
                }

                .about-hero h1 {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    color: var(--text-main);
                    letter-spacing: -1px;
                }

                .about-hero h1 span {
                    color: var(--primary);
                }

                .about-hero p {
                    font-size: 1.25rem;
                    color: var(--text-gray);
                    line-height: 1.6;
                    max-width: 700px;
                    margin: 0 auto;
                }

                /* Stats Section */
                .stats-section {
                    margin-top: -3rem;
                    padding-bottom: 2rem;
                }

                .stats-grid {
                    max-width: 1000px;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }

                .stat-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    text-align: center;
                    transition: transform 0.3s ease;
                }
                
                .stat-card:hover {
                    transform: translateY(-5px);
                }

                .stat-value {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                }

                .stat-label {
                    font-size: 1rem;
                    color: var(--text-gray);
                    font-weight: 600;
                }

                /* Content Section */
                .content-section {
                    padding: 5rem 0;
                }

                .content-container {
                    max-width: 900px;
                }

                .text-block {
                    margin-bottom: 4rem;
                }

                .text-block h2 {
                    font-size: 2.2rem;
                    margin-bottom: 1.5rem;
                    color: var(--text-main);
                    border-bottom: 2px solid var(--primary-light, #eee);
                    padding-bottom: 0.5rem;
                    display: inline-block;
                }

                .text-block p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: var(--text-body);
                    margin-bottom: 1rem;
                }

                /* How It Works */
                .how-it-works {
                    margin-bottom: 4rem;
                }

                .how-it-works h2, .faq-section h2 {
                    font-size: 2.2rem;
                    margin-bottom: 2rem;
                    color: var(--text-main);
                    text-align: center;
                }

                .steps-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }

                .step-card {
                    background: #f8f9fa;
                    padding: 2rem;
                    border-radius: 12px;
                    border: 1px solid #eee;
                }

                .step-card h3 {
                    margin-bottom: 1rem;
                    color: var(--primary);
                    font-size: 1.4rem;
                }

                .step-card p {
                    color: var(--text-body);
                    line-height: 1.6;
                }

                /* FAQ Section */
                .faq-grid {
                    display: grid;
                    gap: 1rem;
                }

                .faq-item {
                    border-bottom: 1px solid #eee;
                    padding: 1.5rem;
                    background: white;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }

                .faq-item.active {
                    background: #f8f9fa;
                }

                .faq-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .faq-header h3 {
                    font-size: 1.15rem;
                    margin: 0;
                    color: var(--text-main);
                    font-weight: 600;
                }

                .faq-icon {
                    font-size: 1.5rem;
                    color: var(--primary);
                    line-height: 1;
                    transition: transform 0.3s ease;
                    display: inline-block;
                }
                
                .faq-item.active .faq-icon {
                    transform: rotate(45deg);
                }

                .faq-answer {
                    margin-top: 1rem;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(0,0,0,0.05);
                    animation: fadeIn 0.3s ease;
                }

                .faq-answer p {
                    color: var(--text-gray);
                    line-height: 1.6;
                    margin: 0;
                }

                /* CTA Section */
                .cta-section {
                    background: var(--primary);
                    padding: 4rem 1.5rem;
                    text-align: center;
                    color: white;
                    border-radius: 16px;
                    margin-top: 4rem;
                }

                .cta-section h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }

                .cta-section p {
                    font-size: 1.2rem;
                    margin-bottom: 2rem;
                    opacity: 0.9;
                }

                .cta-btn {
                    display: inline-block;
                    background: white;
                    color: var(--primary);
                    padding: 1rem 2.5rem;
                    font-size: 1.2rem;
                    font-weight: bold;
                    border-radius: 50px;
                    text-decoration: none;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                    transition: transform 0.2s;
                }

                .cta-btn:hover {
                    transform: scale(1.05);
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* MOBILE RESPONSIVE STYLES */
                @media (max-width: 900px) {
                    .stats-grid, .steps-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    .about-hero {
                        padding: 3rem 1rem;
                    }
                    
                    .about-hero h1 {
                        font-size: 2rem;
                    }

                    .stats-section {
                        margin-top: 0;
                    }

                    .stats-grid {
                        grid-template-columns: 1fr;
                        padding: 0 1rem;
                        gap: 1rem;
                    }
                    
                    .stat-card {
                        padding: 1.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        text-align: left;
                    }
                    
                    .stat-value {
                        margin-bottom: 0;
                        font-size: 1.8rem;
                    }

                    .content-section {
                        padding: 3rem 0;
                    }

                    .steps-grid {
                        grid-template-columns: 1fr;
                    }

                    .text-block h2, .how-it-works h2, .faq-section h2, .cta-section h2 {
                        font-size: 1.8rem;
                    }

                    .cta-section {
                        padding: 3rem 1rem;
                        border-radius: 0;
                        margin-left: -1.5rem;
                        margin-right: -1.5rem;
                        width: calc(100% + 3rem);
                    }
                    
                    .cta-btn {
                         width: 100%;
                         padding: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default About;
