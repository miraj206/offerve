import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfUse = () => {
    return (
        <div className="page-wrapper">
            <title>Terms of Use – Offerve</title>
            <meta name="description" content="Read Offerve’s terms of use outlining the rules and conditions for using our website and services." />
            <link rel="canonical" href="https://offerve.com/terms-of-use/" />
            <meta name="robots" content="index, follow" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Terms of Use",
                    "url": "https://offerve.com/terms-of-use/",
                    "datePublished": "2025-01-01"
                })
            }} />

            <Header />
            <main className="legal-main">
                <div className="container legal-container">
                    <h1>Terms of Use</h1>
                    <p className="last-updated">Last Updated: January 1, 2025</p>

                    <section>
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing and using Offerve.com ("Website"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
                    </section>

                    <section>
                        <h2>2. Use of Website</h2>
                        <p>You agree to use Offerve.com only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within our website.</p>
                    </section>

                    <section>
                        <h2>3. Coupon & Deal Disclaimer</h2>
                        <p>Offerve provides coupons, deals, and promotional codes for information purposes only. While we verify offers regularly, we cannot guarantee the validity or accuracy of any coupon or deal at the time of use. Merchants may change or expire offers without prior notice. We differ any responsibility for expired or non-working coupons.</p>
                    </section>

                    <section>
                        <h2>4. Affiliate Disclosure</h2>
                        <p>Offerve participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites. This comes at no extra cost to you and helps validatethe work we do.</p>
                    </section>

                    <section>
                        <h2>5. Intellectual Property</h2>
                        <p>The Site and its original content, features, and functionality are owned by Offerve and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
                    </section>

                    <section>
                        <h2>6. User Responsibilities</h2>
                        <p>Users are responsible for ensuring that their use of this site is in compliance with all applicable laws and regulations. You agree not to access (or attempt to access) any of the services by any means other than through the interface that is provided by Offerve.</p>
                    </section>

                    <section>
                        <h2>7. Limitation of Liability</h2>
                        <p>In no event shall Offerve, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                    </section>

                    <section>
                        <h2>8. Third-Party Links</h2>
                        <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Offerve. Offerve has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.</p>
                    </section>

                    <section>
                        <h2>9. Termination</h2>
                        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                    </section>

                    <section>
                        <h2>10. Changes to Terms</h2>
                        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
                    </section>

                    <section>
                        <h2>11. Governing Law</h2>
                        <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
                    </section>

                    <section>
                        <h2>12. Contact Information</h2>
                        <p>If you have any questions about these Terms, please contact us at: <a href="mailto:support@offerve.com">support@offerve.com</a></p>
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

export default TermsOfUse;
