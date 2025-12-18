import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="page-wrapper">
            <title>Privacy Policy – Offerve</title>
            <meta name="description" content="Read Offerve’s privacy policy to understand how we collect, use, and protect user information." />
            <link rel="canonical" href="https://offerve.com/privacy-policy/" />
            <meta name="robots" content="index, follow" />
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
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                        <ul>
                            <li><strong>Identity Data:</strong> includes name, username or similar identifier (only if you contact us).</li>
                            <li><strong>Contact Data:</strong> includes email address (only if you subscribe).</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Information</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul>
                            <li>To provide and improve our services.</li>
                            <li>To analyze website usage and improve user experience (Analytics).</li>
                            <li>To respond to your inquiries if you contact us.</li>
                            <li>To send you newsletters or promotional materials if you have opted in.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Cookies & Tracking Technologies</h2>
                        <p>We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                    </section>

                    <section>
                        <h2>5. Third-Party Services & Affiliate Links</h2>
                        <p>Our service may contain links to other sites that are not operated by us (Third-Party Services). We act as an affiliate for many of these merchants. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.</p>
                    </section>

                    <section>
                        <h2>6. Data Security</h2>
                        <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
                    </section>

                    <section>
                        <h2>7. Children’s Privacy</h2>
                        <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>
                    </section>

                    <section>
                        <h2>8. User Rights</h2>
                        <p>You have the right to access, update, or delete the information we have on you. Whenever made possible, you can access, update or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.</p>
                    </section>

                    <section>
                        <h2>9. Changes to This Policy</h2>
                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                    </section>

                    <section>
                        <h2>10. Contact Information</h2>
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

export default PrivacyPolicy;
