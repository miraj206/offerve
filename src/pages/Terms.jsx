import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
    return (
        <div className="page-wrapper">
            <title>Terms of Use – Offerve</title>
            <meta name="description" content="Offerve terms of use. Read the rules governing your use of Offerve services, coupons, and affiliate links." />
            <link rel="canonical" href="https://offerve.com/terms-of-use/" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Terms of Use",
                    "url": "https://offerve.com/terms-of-use/"
                })
            }} />

            <Header />
            <main className="legal-main">
                <div className="container legal-container">
                    <h1>Terms of Use</h1>
                    <p className="last-updated">Last Updated: January 1, 2025</p>

                    <section>
                        <h2>1. Agreement to Terms</h2>
                        <p>By accessing or using Offerve.com, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>
                    </section>

                    <section>
                        <h2>2. Description of Service</h2>
                        <p>Offerve provides a platform for finding coupons, deals, and promotional codes from various third-party retailers. We act as an intermediary and do not sell products directly.</p>
                    </section>

                    <section>
                        <h2>3. Affiliate Disclosure</h2>
                        <p>Offerve may participate in various affiliate marketing programs. This means we may get paid commissions on purchases made through our links to retailer sites. This comes at no extra cost to you.</p>
                    </section>

                    <section>
                        <h2>4. Accuracy of Coupons</h2>
                        <p>We strive to ensure all coupons and deals are accurate and working. However, merchants may change or expire offers without notice. We provide coupons "as is" and cannot guarantee their validity at all times.</p>
                    </section>

                    <section>
                        <h2>5. Limitation of Liability</h2>
                        <p>Offerve shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
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
            `}</style>
        </div>
    );
};

export default Terms;
