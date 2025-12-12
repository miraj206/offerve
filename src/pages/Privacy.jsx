import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
    return (
        <div className="page-wrapper">
            <title>Privacy Policy – Offerve</title>
            <meta name="description" content="Read Offerve’s privacy policy: how we collect, use, and protect your data when you browse coupons and use our services." />
            <link rel="canonical" href="https://offerve.com/privacy-policy/" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Privacy Policy",
                    "url": "https://offerve.com/privacy-policy/",
                    "datePublished": "2025-01-01"
                })
            }} />

            <Header />
            <main className="legal-main">
                <div className="container legal-container">
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last Updated: January 1, 2025</p>

                    <section>
                        <h2>1. Introduction</h2>
                        <p>Welcome to Offerve ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul>
                            <li><strong>Identity Data:</strong> includes name, username or similar identifier (only if you contact us).</li>
                            <li><strong>Contact Data:</strong> includes email address (only if you subscribe).</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul>
                            <li>To provide and improve our services.</li>
                            <li>To analyze website usage and improve user experience (Analytics).</li>
                            <li>To respond to your inquiries if you contact us.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Cookies</h2>
                        <p>We use cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
                    </section>

                    <section>
                        <h2>5. Contact Us</h2>
                        <p>If you have any questions about this privacy policy, please contact us at: <a href="mailto:support@offerve.com">support@offerve.com</a></p>
                    </section>
                </div>
            </main>
            <Footer />

            <style>{`
                .legal-main { background: var(--bg-main); padding: 4rem 0; }
                .legal-container { max-width: 800px; background: white; padding: 3rem; border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); }
                .legal-container h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--text-main); }
                .last-updated { color: var(--text-muted); margin-bottom: 2rem; font-style: italic; }
                
                .legal-container section { margin-bottom: 2rem; }
                .legal-container h2 { font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-main); }
                .legal-container p, .legal-container li { line-height: 1.7; color: var(--text-body); margin-bottom: 1rem; font-size: 1.05rem; }
                .legal-container ul { padding-left: 1.5rem; margin-bottom: 1rem; }
                .legal-container a { color: var(--primary); text-decoration: underline; }
            `}</style>
        </div>
    );
};

export default Privacy;
