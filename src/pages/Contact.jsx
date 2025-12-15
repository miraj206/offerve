import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { contactService } from '../services/contact';

const Contact = () => {
    // SEO
    useEffect(() => {
        document.title = "Contact Offerve – Support, Deals & Coupon Help";

        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', "Contact Offerve for support, coupon issues, deals, or partnerships. We’re here to help you save more.");

        // Canonical Tag
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = "canonical";
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute('href', "https://offerve.com/contact/");
    }, []);

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: 'Support', // Default
        message: '',
        confirm_email: '' // Honeypot
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!form.email || !form.message) {
            setError('Please fill in all required fields.');
            return;
        }

        setLoading(true);
        const result = await contactService.send(form);
        setLoading(false);

        if (result.success) {
            setSuccess(true);
            setForm({ name: '', email: '', subject: 'Support', message: '', confirm_email: '' });
        } else {
            setError(result.error || 'Something went wrong. Please try again.');
        }
    };

    return (
        <div className="contact-page">
            <Header />
            <main className="container page-content">
                <div className="contact-wrapper">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-intro">
                        Have a question or need help with a coupon? We're here to assist you.
                        Reach out for support, deal submissions, or partnership inquiries.
                    </p>

                    {success ? (
                        <div className="success-message">
                            <div className="icon">📬</div>
                            <h2>Message Sent!</h2>
                            <p>Thanks for contacting us. We’ll get back to you shortly.</p>
                            <button onClick={() => setSuccess(false)} className="btn-secondary">Send Another Message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form">
                            {/* Honeypot - Hidden from users */}
                            <div style={{ display: 'none' }}>
                                <label>Don't fill this out if you're human: <input name="confirm_email" value={form.confirm_email} onChange={handleChange} /></label>
                            </div>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Your Name <span>(Optional)</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email Address <span className="required">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="email@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group full-width">
                                    <label>Subject <span className="required">*</span></label>
                                    <select name="subject" value={form.subject} onChange={handleChange}>
                                        <option value="Support">Support / Site Issue</option>
                                        <option value="Coupon Issue">Report a Broken Coupon</option>
                                        <option value="Deal Submission">Submit a Deal</option>
                                        <option value="Partnership">Partnership / Advertising</option>
                                        <option value="Other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="form-group full-width">
                                    <label>Message <span className="required">*</span></label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        rows="6"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            {error && <div className="error-message">{error}</div>}

                            <div className="form-actions">
                                <button type="submit" className="btn-submit" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </main>

            <Footer />

            <style>{`
                .page-content { padding-top: 2rem; padding-bottom: 4rem; }
                .contact-wrapper { max-width: 700px; margin: 0 auto; background: white; padding: 2.5rem; border-radius: 12px; box-shadow: var(--shadow-md); }
                
                .page-title { font-size: 2rem; margin-bottom: 0.5rem; text-align: center; color: var(--text-main); }
                .page-intro { text-align: center; color: var(--text-body); margin-bottom: 2.5rem; line-height: 1.6; }

                .contact-form { display: flex; flex-direction: column; gap: 1.5rem; }
                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
                
                @media (max-width: 600px) {
                    .form-grid { grid-template-columns: 1fr; }
                    .contact-wrapper { padding: 1.5rem; }
                }

                .full-width { grid-column: 1 / -1; }
                .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
                
                label { font-weight: 600; font-size: 0.95rem; color: var(--text-main); }
                label span { font-weight: 400; color: var(--text-muted); font-size: 0.85rem; }
                label span.required { color: #ef4444; }

                input, select, textarea {
                    padding: 0.8rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    font-family: inherit;
                    font-size: 1rem;
                    transition: border-color 0.2s;
                    background: #f8fafc;
                    width: 100%;
                }

                input:focus, select:focus, textarea:focus {
                    outline: none;
                    border-color: var(--primary);
                    background: white;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
                }

                .btn-submit {
                    background: var(--primary);
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    border-radius: 8px;
                    cursor: pointer;
                    width: 100%;
                    transition: background 0.2s;
                }

                .btn-submit:hover { background: var(--primary-hover); transform: translateY(-1px); }
                .btn-submit:disabled { opacity: 0.7; cursor: not-allowed; }

                .success-message { text-align: center; padding: 3rem 1rem; }
                .success-message .icon { font-size: 4rem; margin-bottom: 1rem; }
                .success-message h2 { color: var(--success); margin-bottom: 0.5rem; }
                .success-message p { color: var(--text-body); margin-bottom: 2rem; }
                
                .btn-secondary {
                    background: transparent;
                    border: 2px solid var(--primary);
                    color: var(--primary);
                    padding: 0.8rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                }
                .btn-secondary:hover { background: var(--primary); color: white; }

                .error-message {
                    background: #fef2f2;
                    color: #dc2626;
                    padding: 1rem;
                    border-radius: 8px;
                    text-align: center;
                    border: 1px solid #fee2e2;
                }
            `}</style>
        </div>
    );
};

export default Contact;
