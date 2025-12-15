import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { submissionService } from '../services/submissions';
import SubmitPrompt from '../components/SubmitPrompt';

const SubmitCoupon = () => {
    // Basic SEO
    useEffect(() => {
        document.title = "Submit Coupon or Deal | Offerve";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', "Share coupons, deals, and offers with Offerve and help users save more.");
        }
    }, []);

    const [form, setForm] = useState({
        name: '',
        email: '',
        type: 'Coupon Code',
        storeName: '',
        code: '',
        description: '',
        expiry: '',
        link: ''
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

        // Basic Validation
        if (!form.email || !form.storeName || !form.description) {
            setError('Please fill in all required fields.');
            return;
        }

        setLoading(true);
        const result = await submissionService.save(form);
        setLoading(false);

        if (result.success) {
            setSuccess(true);
            setForm({
                name: '',
                email: '',
                type: 'Coupon Code',
                storeName: '',
                code: '',
                description: '',
                expiry: '',
                link: ''
            });
        } else {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="submit-page">
            <Header />
            <main className="container page-content">
                <div className="form-wrapper">
                    <h1 className="page-title">Submit Your Coupon, Deal or Offer</h1>
                    <p className="page-intro">
                        Share coupon codes, deals, offers, tricks, or money-saving tips with Offerve.
                        If your submission is valid, we’ll review and publish it to help others save.
                    </p>

                    {success ? (
                        <div className="success-message">
                            <div className="icon">🎉</div>
                            <h2>Thanks for sharing!</h2>
                            <p>Our team will review your submission and publish it shortly.</p>
                            <button onClick={() => setSuccess(false)} className="btn-secondary">Submit Another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="submission-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Your Name <span>(Optional)</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email Address <span className="required">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Submission Type <span className="required">*</span></label>
                                    <select name="type" value={form.type} onChange={handleChange}>
                                        <option>Coupon Code</option>
                                        <option>Deal / Offer</option>
                                        <option>Sale / Discount</option>
                                        <option>Cashback / Bank Offer</option>
                                        <option>Money-Saving Tip</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Store / Brand Name <span className="required">*</span></label>
                                    <input
                                        type="text"
                                        name="storeName"
                                        value={form.storeName}
                                        onChange={handleChange}
                                        placeholder="e.g. Amazon, Myntra, Domino's"
                                        required
                                    />
                                </div>

                                {form.type === 'Coupon Code' && (
                                    <div className="form-group full-width">
                                        <label>Coupon Code <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            name="code"
                                            value={form.code}
                                            onChange={handleChange}
                                            placeholder="e.g. SAVE20"
                                            className="code-input"
                                            required
                                        />
                                    </div>
                                )}

                                <div className="form-group full-width">
                                    <label>Offer Description <span className="required">*</span></label>
                                    <textarea
                                        name="description"
                                        value={form.description}
                                        onChange={handleChange}
                                        placeholder="Describe the offer details, terms, or how to use it..."
                                        required
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label>Expiry Date <span>(Optional)</span></label>
                                    <input
                                        type="date"
                                        name="expiry"
                                        value={form.expiry}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Offer Link / Proof <span>(Optional)</span></label>
                                    <input
                                        type="url"
                                        name="link"
                                        value={form.link}
                                        onChange={handleChange}
                                        placeholder="https://..."
                                    />
                                </div>
                            </div>

                            {error && <div className="error-message">{error}</div>}

                            <div className="form-actions">
                                <button type="submit" className="btn-submit" disabled={loading}>
                                    {loading ? 'Submitting...' : 'Submit Now'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </main>

            {/* Don't show the prompt on the submit page itself */}
            {/* <SubmitPrompt /> */}

            <Footer />

            <style>{`
                .page-content { padding-top: 2rem; padding-bottom: 4rem; }
                .form-wrapper { max-width: 800px; margin: 0 auto; background: white; padding: 2.5rem; border-radius: 12px; box-shadow: var(--shadow-md); }
                
                .page-title { font-size: 2rem; margin-bottom: 0.5rem; text-align: center; color: var(--text-main); }
                .page-intro { text-align: center; color: var(--text-body); margin-bottom: 2.5rem; line-height: 1.6; }

                .submission-form { display: flex; flex-direction: column; gap: 1.5rem; }
                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
                
                @media (max-width: 768px) {
                    .form-grid { grid-template-columns: 1fr; }
                    .form-wrapper { padding: 1.5rem; }
                }

                .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
                .full-width { grid-column: 1 / -1; }
                
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
                }

                input:focus, select:focus, textarea:focus {
                    outline: none;
                    border-color: var(--primary);
                    background: white;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
                }

                .code-input { font-family: monospace; letter-spacing: 1px; font-weight: 700; color: var(--primary); }

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
                .btn-submit:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

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

export default SubmitCoupon;
