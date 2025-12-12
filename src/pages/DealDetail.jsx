import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { deals } from '../data/deals';

const DealDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [deal, setDeal] = useState(null);

    useEffect(() => {
        const foundDeal = deals.find(d => d.slug === slug);
        if (!foundDeal) {
            navigate('/deals');
            return;
        }
        setDeal(foundDeal);

        // SEO and Meta Tags
        document.title = foundDeal.seo?.title || `${foundDeal.title} | Offerve Deals`;

        const setMeta = (name, content, attribute = 'name') => {
            let element = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        setMeta('description', foundDeal.excerpt);
        setMeta('og:title', foundDeal.title, 'property');
        setMeta('og:description', foundDeal.excerpt, 'property');
        setMeta('og:url', window.location.href, 'property');
        setMeta('og:image', foundDeal.ogImage || foundDeal.thumbnail, 'property');
        setMeta('twitter:card', 'summary_large_image', 'name');

    }, [slug, navigate]);

    const handleApplyClick = () => {
        // Analytics tracking
        console.log('Event: deal_apply_click', {
            slug: deal.slug,
            timestamp: new Date().toISOString()
        });

        // In a real app, you might send this to GA or backend
        // window.gtag('event', 'deal_apply_click', { ... })
    };

    if (!deal) return <div className="loading">Loading...</div>;

    // Process content for basic formatting (newlines to paragraphs, bold text)
    const renderContent = (content) => {
        return content.split('\n\n').map((para, index) => {
            // Check for list items (lines starting with * )
            if (para.trim().startsWith('*')) {
                const items = para.split('\n').map(item => item.replace(/^\*\s*/, ''));
                return (
                    <ul key={index} className="article-list">
                        {items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></li>)}
                    </ul>
                );
            }
            // Check for headings (lines starting with ** and ending with ** or without ending if it's a title line)
            if (para.trim().startsWith('**') && !para.includes('\n')) {
                return <h2 key={index} className="article-subhead">{para.replace(/\*\*/g, '')}</h2>;
            }

            return <p key={index} className="article-text" dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>;
        });
    };

    return (
        <div className="deal-detail-page">
            <Header />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://offerve.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Deals", "item": "https://offerve.com/deals" },
                                { "@type": "ListItem", "position": 3, "name": deal.title, "item": window.location.href }
                            ]
                        },
                        {
                            "@type": "BlogPosting",
                            "headline": deal.title,
                            "image": deal.ogImage,
                            "author": { "@type": "Organization", "name": deal.author },
                            "publisher": { "@type": "Organization", "name": "Offerve", "logo": { "@type": "ImageObject", "url": "https://offerve.com/favicon.svg" } },
                            "datePublished": deal.date,
                            "description": deal.excerpt
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "How do I apply for the card?", "acceptedAnswer": { "@type": "Answer", "text": "Click the 'Apply Now' button on this page to visit the official application portal. Complete the digital KYC for instant approval." } },
                                { "@type": "Question", "name": "Is the annual fee refundable?", "acceptedAnswer": { "@type": "Answer", "text": "The fee is waived for the first year if you apply now, and waived in subsequent years on achieving spend milestones." } },
                                { "@type": "Question", "name": "When is cashback credited?", "acceptedAnswer": { "@type": "Answer", "text": "Cashback is calculated monthly and credited to your card account within 10 days of the statement generation date." } }
                            ]
                        }
                    ]
                })
            }} />

            <main className="main-content">
                <article className="article-container">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> › <Link to="/deals">Deals</Link> › <span>{deal.title}</span>
                    </div>

                    <header className="article-header">
                        <div className="article-meta">
                            <span className="meta-tag">Credit Card</span>
                            <span className="meta-date">{new Date(deal.date).toLocaleDateString()}</span>
                        </div>
                        <h1 className="article-title">{deal.title}</h1>
                        <div className="author-row">
                            <div className="author-avatar">O</div>
                            <span className="author-name">By {deal.author}</span>
                        </div>
                    </header>

                    <div className="article-featured-image">
                        <img src={deal.thumbnail} alt={deal.title} />
                    </div>

                    <div className="article-layout">
                        <div className="article-body" dangerouslySetInnerHTML={{ __html: deal.content }}></div>

                        <aside className="article-sidebar">
                            <div className="apply-widget sticky">
                                <h3>Ready to Apply?</h3>
                                <p className="apply-note">Apply through this link — you may get faster approval and cashback.</p>
                                <a
                                    href={deal.ctaLink}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="cta-button"
                                    onClick={handleApplyClick}
                                >
                                    {deal.ctaText}
                                </a>
                                <p className="secure-text">🔒 100% Secure Application</p>
                            </div>
                        </aside>
                    </div>

                    {/* Mobile CTA (Sticky Bottom) */}
                    <div className="mobile-cta-bar">
                        <div className="mobile-cta-text">
                            <span>{deal.title.substring(0, 20)}...</span>
                            <small>Get Approval & Cashback</small>
                        </div>
                        <a
                            href={deal.ctaLink}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="mobile-apply-btn"
                            onClick={handleApplyClick}
                        >
                            Apply Now
                        </a>
                    </div>

                </article>
            </main>
            <Footer />

            <style>{`
                .deal-detail-page { background: #f8fafc; min-height: 100vh; }
                
                .article-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 2rem 1.5rem;
                }

                .breadcrumbs {
                    margin-bottom: 2rem;
                    font-size: 0.9rem;
                    color: var(--text-muted);
                }
                .breadcrumbs a { color: var(--text-muted); margin: 0 0.3rem; }
                .breadcrumbs span { color: var(--text-main); font-weight: 500; }

                .article-header { text-align: center; max-width: 800px; margin: 0 auto 3rem; }
                
                .meta-tag {
                    display: inline-block;
                    background: #e0f2fe;
                    color: #0284c7;
                    padding: 0.3rem 0.8rem;
                    border-radius: 20px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    margin-right: 1rem;
                }
                .meta-date { font-size: 0.9rem; color: var(--text-muted); }

                .article-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: var(--text-main);
                    line-height: 1.2;
                    margin-bottom: 1.5rem;
                }

                .author-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.8rem;
                }
                .author-avatar {
                    width: 40px;
                    height: 40px;
                    background: var(--primary);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                }
                .author-name { font-weight: 500; color: var(--text-main); }

                .article-featured-image {
                    width: 100%;
                    height: 400px;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                    margin-bottom: 3rem;
                }
                .article-featured-image img { width: 100%; height: 100%; object-fit: cover; }

                .article-layout {
                    display: grid;
                    grid-template-columns: 1fr 300px;
                    gap: 4rem;
                }

                /* Typography for HTML Content */
                .article-body {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: var(--text-body);
                }
                
                .article-body h2 {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: var(--text-main);
                    margin: 2.5rem 0 1.2rem;
                    letter-spacing: -0.5px;
                }

                .article-body h3 {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: var(--text-main);
                    margin: 2rem 0 1rem;
                }

                .article-body p { margin-bottom: 1.5rem; }
                
                .article-body ul, .article-body ol {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }
                
                .article-body li {
                    margin-bottom: 0.6rem;
                    padding-left: 0.5rem;
                }

                .article-body strong {
                    color: var(--text-main);
                    font-weight: 700;
                }

                /* Special Components inside article */
                .highlight-box {
                    background: #f0fdf4;
                    border-left: 4px solid #16a34a;
                    padding: 1.5rem;
                    border-radius: var(--radius-md);
                    margin: 2rem 0;
                }
                .highlight-box p { margin: 0; }

                .comparison-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 2rem 0;
                    box-shadow: var(--shadow-sm);
                }
                .comparison-table th, .comparison-table td {
                    border: 1px solid #e2e8f0;
                    padding: 1rem;
                    text-align: left;
                }
                .comparison-table th { background: #f8fafc; font-weight: 600; }

                .in-article-cta {
                    background: #f8fafc;
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    text-align: center;
                    margin: 3rem 0;
                    border: 1px dashed #cbd5e1;
                }
                
                .in-article-btn {
                    display: inline-block;
                    background: #2563eb;
                    color: white;
                    padding: 1rem 2.5rem;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    text-decoration: none;
                    margin-top: 1rem;
                    box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);
                    transition: transform 0.2s;
                }
                .in-article-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3); }
                .cta-note { display: block; font-size: 0.9rem; color: #64748b; margin-bottom: 0.5rem; font-weight: 500; }

                .article-sidebar { position: relative; }
                .apply-widget {
                    background: white;
                    padding: 2rem;
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-md);
                    border: 1px solid rgba(0,0,0,0.05);
                    text-align: center;
                }
                .apply-widget.sticky { position: sticky; top: 100px; }
                
                .apply-widget h3 { margin-bottom: 1rem; font-size: 1.3rem; }
                .apply-note { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.5; }
                
                .cta-button {
                    display: block;
                    width: 100%;
                    padding: 1rem;
                    background: #16a34a;
                    color: white;
                    font-weight: 700;
                    border-radius: var(--radius-md);
                    text-decoration: none;
                    font-size: 1.1rem;
                    transition: transform 0.2s, background 0.2s;
                    box-shadow: 0 4px 6px -1px rgba(22, 163, 74, 0.3);
                }
                .cta-button:hover {
                    background: #15803d;
                    transform: translateY(-2px);
                }
                
                .secure-text { font-size: 0.8rem; color: var(--text-muted); margin-top: 1rem; }

                .mobile-cta-bar {
                    display: none;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: white;
                    padding: 1rem;
                    box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
                    z-index: 1000;
                    align-items: center;
                    justify-content: space-between;
                }
                
                .mobile-cta-text { display: flex; flex-direction: column; }
                .mobile-cta-text span { font-weight: 600; font-size: 0.9rem; }
                .mobile-cta-text small { font-size: 0.75rem; color: var(--text-muted); }
                
                .mobile-apply-btn {
                    background: #16a34a;
                    color: white;
                    padding: 0.6rem 1.2rem;
                    border-radius: 30px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                @media (max-width: 900px) {
                    .article-layout { grid-template-columns: 1fr; }
                    .article-sidebar { margin-top: 2rem; }
                    .apply-widget.sticky { position: static; }
                }

                @media (max-width: 768px) {
                    .article-title { font-size: 1.8rem; }
                    .mobile-cta-bar { display: flex; }
                    .deal-detail-page { padding-bottom: 80px; }
                }
            `}</style>
        </div>
    );
};

export default DealDetail;
