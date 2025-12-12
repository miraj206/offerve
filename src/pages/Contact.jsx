import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General',
        message: '',
        orderId: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API Call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: 'General', message: '', orderId: '' });
        }, 1500);
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="page-wrapper">
            {/* SEO & JSON-LD */}
            <title>Contact Offerve – Get in Touch for Coupons & Support</title>
            <meta name="description" content="Contact Offerve for support, partnership inquiries, or to report a coupon. We reply quickly to help you save." />
            <link rel="canonical" href="https://offerve.com/contact/" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "url": "https://offerve.com/contact/",
                    "name": "Contact Offerve",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Offerve",
                        "url": "https://offerve.com"
                    }
                })
            }} />

            <Header />
            <main className="contact-main">
                <div className="container contact-container">
                    <div className="contact-header">
                        <h1>Contact Offerve</h1>
                        <p>Have a question or found a broken deal? We're here to help.</p>
                    </div>

                    <div className="contact-grid">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {status === 'success' ? (
                                <div className="success-message">
                                    <h3>Message Sent!</h3>
                                    <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                                    <button type="button" onClick={() => setStatus('')} className="btn-link">Send another message</button>
                                </div>
                            ) : (
                                <>
                                    <div className="form-group">
                                        <label htmlFor="name">Name *</label>
                                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject *</label>
                                        <select id="subject" name="subject" value={formData.subject} onChange={handleChange}>
                                            <option value="General">General Inquiry</option>
                                            <option value="Partnership">Partnership / Advertising</option>
                                            <option value="Report">Report a Coupon</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange} placeholder="How can we help?"></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
                                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </>
                            )}
                        </form>

                        <div className="contact-info">
                            <div className="info-block">
                                <h3>Email Support</h3>
                                <p><a href="mailto:support@offerve.com">support@offerve.com</a></p>
                                <p className="sub-text">We usually reply within 24 hours.</p>
                            </div>

                            <div className="info-block">
                                <h3>Business Hours</h3>
                                <p>Mon - Fri: 9:00 AM - 6:00 PM (IST)</p>
                            </div>

                            <div className="info-block faq-mini">
                                <h3>Quick FAQs</h3>
                                <details>
                                    <summary>How do I report an expired coupon?</summary>
                                    <p>Select "Report a Coupon" in the contact form or click the "Report" flag on the coupon card.</p>
                                </details>
                                <details>
                                    <summary>Do you offer brand partnerships?</summary>
                                    <p>Yes, we love working with brands! Choose "Partnership" in the dropdown.</p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

            <style>{`
                .contact-main {
                    background: var(--bg-main);
                    padding: 3rem 0;
                    min-height: 70vh;
                }
                .contact-container { max-width: 900px; }
                .contact-header { text-align: center; margin-bottom: 3rem; }
                .contact-header h1 { font-size: 2.5rem; color: var(--text-main); margin-bottom: 0.5rem; }
                .contact-header p { color: var(--text-body); font-size: 1.1rem; }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 3rem;
                    align-items: start;
                }

                .contact-form {
                    background: white;
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-sm);
                }

                .form-group { margin-bottom: 1.2rem; }
                .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--text-main); font-size: 0.9rem; }
                .form-group input, .form-group select, .form-group textarea {
                    width: 100%;
                    padding: 0.8rem;
                    border: 1px solid #ddd;
                    border-radius: var(--radius-md);
                    font-size: 1rem;
                    font-family: inherit;
                }
                .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
                    border-color: var(--primary);
                    outline: none;
                }

                .contact-info h3 { font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--text-main); }
                .info-block { margin-bottom: 2rem; }
                .info-block a { color: var(--primary); font-weight: 600; }
                .sub-text { font-size: 0.9rem; color: var(--text-muted); }

                .faq-mini details {
                    margin-bottom: 0.8rem;
                    padding-bottom: 0.8rem;
                    border-bottom: 1px solid #eee;
                }
                .faq-mini summary { font-weight: 600; cursor: pointer; color: var(--text-main); }
                .faq-mini p { margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-body); line-height: 1.5; }

                .success-message { text-align: center; padding: 2rem; }
                .success-message h3 { color: #10b981; font-size: 1.8rem; margin-bottom: 1rem; }
                .btn-link { background: none; border: none; color: var(--primary); text-decoration: underline; cursor: pointer; margin-top: 1rem; }

                @media (max-width: 768px) {
                    .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
                }
            `}</style>
        </div>
    );
};

export default Contact;
