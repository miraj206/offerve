import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CouponCard from '../components/CouponCard';
import { stores } from '../data/stores';
import { getStoreCoupons } from '../data/coupons';

const StorePage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [store, setStore] = useState(null);
    const [storeCoupons, setStoreCoupons] = useState([]);
    const [relatedStores, setRelatedStores] = useState([]);
    const [stats, setStats] = useState({ active: 0, verified: 0 });

    useEffect(() => {
        // Find store by slug
        const foundStore = stores.find(s => s.slug === slug);

        if (!foundStore) {
            navigate('/stores');
            return;
        }

        setStore(foundStore);

        // Generate dynamic coupons using the new generator
        const generatedCoupons = getStoreCoupons(foundStore);
        setStoreCoupons(generatedCoupons);
        setStats({
            active: generatedCoupons.length,
            verified: generatedCoupons.filter(c => c.verified).length
        });

        // SEO: Dynamic Page Title & Meta Tags
        const currentYear = new Date().getFullYear();
        const pageTitle = `Best ${foundStore.name} Coupon Codes, Promo Codes & Offers – ${currentYear} | Offerve`;
        const metaDesc = `Find the latest ${foundStore.name} coupon codes, promo codes, and verified offers. Updated daily so you can save more on ${foundStore.name} shopping. Exclusive deals only on Offerve.`;

        document.title = pageTitle;

        // Helper to set meta tags
        const setMeta = (name, content, attribute = 'name') => {
            let element = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        setMeta('description', metaDesc);
        setMeta('og:title', pageTitle, 'property');
        setMeta('og:description', `Verified deals and offers for ${foundStore.name}.`, 'property');
        setMeta('og:url', `https://offerve.com/${slug}`, 'property');
        // Placeholder for store logo in OG image
        setMeta('og:image', `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${foundStore.domain}&size=256`, 'property');
        setMeta('twitter:card', 'summary_large_image', 'name');

        // Related Stores
        const otherStores = stores.filter(s => s.id !== foundStore.id);
        const randomStores = otherStores.sort(() => 0.5 - Math.random()).slice(0, 4);
        setRelatedStores(randomStores);

    }, [slug, navigate]);

    if (!store) return <div className="loading" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;

    const currentYear = new Date().getFullYear();

    return (
        <div className="store-page">
            <Header />

            <main className="main-content">
                {/* JSON-LD Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                "name": `Best ${store.name} Coupon Codes`,
                                "description": `Save with latest ${store.name} coupons.`,
                                "breadcrumb": {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://offerve.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Stores", "item": "https://offerve.com/stores" },
                                        { "@type": "ListItem", "position": 3, "name": store.name, "item": `https://offerve.com/${store.slug}` }
                                    ]
                                }
                            },
                            {
                                "@type": "Organization",
                                "name": store.name,
                                "url": `https://${store.domain}`,
                                "logo": `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${store.domain}&size=128`
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": store.faqs.map(f => ({
                                    "@type": "Question",
                                    "name": f.q,
                                    "acceptedAnswer": { "@type": "Answer", "text": f.a }
                                }))
                            }
                        ]
                    })
                }} />

                {/* Breadcrumbs */}
                <div className="breadcrumbs-section">
                    <div className="container">
                        <div className="breadcrumbs">
                            <Link to="/">Home</Link>
                            <span className="separator">›</span>
                            <Link to="/stores">Stores</Link>
                            <span className="separator">›</span>
                            <span className="current">{store.name}</span>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="store-header">
                        <div className="store-logo-large">
                            <img
                                src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${store.domain}&size=128`}
                                alt={`${store.name} Logo`}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerText = store.name[0];
                                }}
                            />
                        </div>
                        <div className="store-info">
                            <h1 className="page-title1">{store.name} Coupon Codes & Offers – Verified Deals for {currentYear}</h1>
                            <p className="store-intro">
                                Offerve brings you the best <strong>{store.name}</strong> coupons and deals to help you save on every order. These offers are verified regularly and cover discounts on popular categories like fashion, accessories, electronics, daily essentials, and more.
                            </p>
                            <div className="store-stats">
                                <span className="stat-badge">
                                    <span className="icon">🏷️</span> {stats.active} Active Offers
                                </span>
                                <span className="stat-badge success">
                                    <span className="icon">✅</span> Verified Today
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="store-layout">
                        <div className="coupons-column">
                            <div className="filter-bar">
                                <span className="filter-label">Sort By:</span>
                                <button className="filter-btn active">Top Rated</button>
                                <button className="filter-btn">Exclusive</button>
                                <button className="filter-btn">Expiring Soon</button>
                            </div>

                            <div className="coupons-list">
                                {storeCoupons.map(coupon => (
                                    <CouponCard
                                        key={coupon.id}
                                        merchant={{ name: store.name, domain: store.domain, logo: `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${store.domain}&size=128` }}
                                        {...coupon}
                                    />
                                ))}
                            </div>

                            <div className="load-more-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <button className="load-more-btn">Show More {store.name} Offers</button>
                            </div>
                        </div>

                        <aside className="sidebar">
                            <div className="sidebar-widget about-widget">
                                <h3>About {store.name}</h3>
                                <p className="widget-text">{store.description}</p>
                                <p className="widget-text" style={{ marginTop: '0.5rem' }}>
                                    Current Best Offer: <strong>{store.bestOffers}</strong>
                                </p>
                            </div>

                            {store.faqs.length > 0 && (
                                <div className="sidebar-widget faq-widget">
                                    <h3>FAQs</h3>
                                    <div className="faq-mini-list">
                                        {store.faqs.map((faq, i) => (
                                            <div key={i} className="faq-mini-item">
                                                <strong>Q: {faq.q}</strong>
                                                <p>A: {faq.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </aside>
                    </div>

                    {/* Related Stores */}
                    <div className="related-stores-section">
                        <h3 className="section-title-small">Similar Stores</h3>
                        <div className="related-grid">
                            {relatedStores.map(s => (
                                <Link to={`/${s.slug}`} key={s.id} className="related-store-card">
                                    <img
                                        src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${s.domain}&size=64`}
                                        alt={s.name}
                                        className="related-icon"
                                    />
                                    <span>{s.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <Link to="/stores" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'underline' }}>Browse All Stores</Link>
                    </div>
                </div>
            </main>
            <Footer />

            <style>{`
                .main-content {
                    padding-top: 20px;
                    padding-bottom: 60px;
                    background: var(--bg-main);
                    min-height: 80vh;
                }

                .breadcrumbs-section {
                    background: white;
                    padding: 0.8rem 0;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                    margin-bottom: 2rem;
                }

                .breadcrumbs {
                    font-size: 0.85rem;
                    color: var(--text-muted);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .separator { color: #cbd5e1; font-size: 1.2em; line-height: 0.8; }
                .current { color: var(--text-main); font-weight: 500; }

                .store-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 2rem;
                    background: white;
                    padding: 2.5rem;
                    border-radius: var(--radius-lg);
                    border: 1px solid rgba(0,0,0,0.05);
                    margin-bottom: 2.5rem;
                    box-shadow: var(--shadow-sm);
                }

                .store-logo-large {
                    width: 110px;
                    height: 110px;
                    border-radius: var(--radius-lg);
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;
                    border: 1px solid rgba(0,0,0,0.08);
                    flex-shrink: 0;
                    box-shadow: var(--shadow-sm);
                }
                
                .store-logo-large img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                .store-info { flex: 1; }

                .page-title1 {
                    font-size: 2rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                    color: var(--text-main);
                    line-height: 1.2;
                    letter-spacing: -0.5px;
                }

                .store-intro { 
                    color: var(--text-body); 
                    margin-bottom: 1.5rem; 
                    line-height: 1.6;
                    font-size: 1.05rem;
                    max-width: 800px;
                }
                
                .store-intro strong { color: var(--text-main); font-weight: 600; }

                .store-stats { display: flex; gap: 1rem; }
                
                .stat-badge {
                    background: #f1f5f9;
                    padding: 0.4rem 1rem;
                    border-radius: 30px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--text-body);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .stat-badge.success {
                    background: #ecfdf5;
                    color: #059669;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                }
                
                .stat-badge .icon { font-size: 1.1em; }

                .store-layout {
                    display: grid;
                    grid-template-columns: 1fr 340px;
                    gap: 2.5rem;
                }

                .filter-bar {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    margin-bottom: 1.5rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }

                .filter-label { font-weight: 600; color: var(--text-muted); font-size: 0.9rem; margin-right: 0.5rem; }

                .filter-btn {
                    padding: 0.5rem 1.2rem;
                    border-radius: 30px;
                    border: 1px solid rgba(0,0,0,0.08);
                    font-size: 0.9rem;
                    color: var(--text-body);
                    font-weight: 500;
                    background: white;
                    transition: var(--transition);
                }

                .filter-btn:hover, .filter-btn.active {
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                    box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
                }

                .coupons-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                
                .load-more-btn {
                    padding: 0.8rem 2rem;
                    background: white;
                    border: 1px solid rgba(0,0,0,0.1);
                    border-radius: 30px;
                    color: var(--text-body);
                    font-weight: 600;
                    transition: var(--transition);
                }
                
                .load-more-btn:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-sm);
                }

                .sidebar { display: flex; flex-direction: column; gap: 2rem; }

                .sidebar-widget {
                    background: white;
                    padding: 1.5rem;
                    border-radius: var(--radius-lg);
                    border: 1px solid rgba(0,0,0,0.06);
                    box-shadow: var(--shadow-sm);
                }

                .sidebar-widget h3 {
                    font-size: 1.2rem;
                    margin-bottom: 1.2rem;
                    padding-bottom: 0.8rem;
                    border-bottom: 1px solid #f1f5f9;
                    font-weight: 700;
                }
                
                .widget-text {
                    color: var(--text-body);
                    line-height: 1.6;
                    font-size: 0.95rem;
                }

                .faq-mini-item { 
                    margin-bottom: 1.2rem; 
                    padding-bottom: 1.2rem;
                    border-bottom: 1px dashed #e2e8f0;
                }
                .faq-mini-item:last-child { margin-bottom: 0; border-bottom: none; padding-bottom: 0; }
                
                .faq-mini-item strong { display: block; font-size: 0.95rem; margin-bottom: 0.4rem; color: var(--text-main); font-weight: 600; }
                .faq-mini-item p { font-size: 0.9rem; color: var(--text-body); line-height: 1.6; }

                .related-stores-section { 
                    margin-top: 4rem; 
                    padding-top: 3rem;
                    border-top: 1px solid rgba(0,0,0,0.05);
                }
                
                .section-title-small { 
                    font-size: 1.5rem; 
                    margin-bottom: 2rem; 
                    font-weight: 700;
                }

                .related-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                    gap: 1.2rem;
                }

                .related-store-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    background: white;
                    padding: 1.2rem;
                    border-radius: var(--radius-lg);
                    border: 1px solid rgba(0,0,0,0.05);
                    transition: var(--transition);
                    text-decoration: none;
                }

                .related-store-card:hover {
                    box-shadow: var(--shadow-md);
                    transform: translateY(-4px);
                    border-color: rgba(37, 99, 235, 0.2);
                }
                
                .related-store-card span {
                    font-weight: 600;
                    color: var(--text-main);
                }

                .related-icon { width: 40px; height: 40px; border-radius: 50%; object-fit: contain; }

                @media (max-width: 900px) {
                    .store-layout { grid-template-columns: 1fr; }
                    .sidebar { order: 2; }
                    
                    .store-header {
                        flex-direction: column;
                        text-align: center;
                        align-items: center;
                        padding: 2rem 1.5rem;
                    }
                    
                    .store-logo-large { width: 90px; height: 90px; }
                    .page-title1 { font-size: 1.6rem; }
                    .store-stats { justify-content: center; }
                    .filter-bar { overflow-x: auto; padding-bottom: 1rem; }
                }

            `}</style>
        </div>
    );
};

export default StorePage;
