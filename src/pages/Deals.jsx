import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { deals } from '../data/deals';
import { Link } from 'react-router-dom';

const Deals = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDeals = deals.filter(deal =>
        deal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deal.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="deals-page">
            <Header />
            <main className="main-content">
                <div className="deals-hero">
                    <div className="container">
                        <h1>Exclusive Deals & Offers</h1>
                        <p>Handpicked financial deals, credit card offers, and savings guides.</p>
                    </div>
                </div>

                <div className="container" style={{ padding: '3rem 1.5rem', minHeight: '60vh' }}>

                    {/* Search/Filter Bar */}
                    <div className="deals-filter-bar">
                        <input
                            type="text"
                            placeholder="Search deals..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="deal-search-input"
                        />
                        <div className="tags-row">
                            <span className="tag active">All</span>
                            <span className="tag">Credit Cards</span>
                            <span className="tag">Banking</span>
                            <span className="tag">Travel</span>
                        </div>
                    </div>

                    <div className="deals-grid-layout">
                        {filteredDeals.map(deal => (
                            <Link to={`/deals/${deal.slug}`} key={deal.id} className="deal-card-link">
                                <article className="deal-card">
                                    <div className="deal-thumbnail">
                                        <img src={deal.thumbnail} alt={deal.title} loading="lazy" />
                                        {deal.pinned && <span className="pinned-badge">Featured</span>}
                                    </div>
                                    <div className="deal-content">
                                        <div className="deal-meta">
                                            <span className="deal-author">{deal.author}</span>
                                            <span className="deal-date">{new Date(deal.date).toLocaleDateString()}</span>
                                        </div>
                                        <h2 className="deal-title">{deal.title}</h2>
                                        <p className="deal-excerpt">{deal.excerpt}</p>
                                        <span className="read-more">Read Review &rarr;</span>
                                    </div>
                                </article>
                            </Link>
                        ))}

                        {filteredDeals.length === 0 && (
                            <div className="no-deals">
                                <p>No deals found matching your criteria.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />

            <style>{`
                .deals-hero {
                    background: linear-gradient(135deg, var(--bg-dark) 0%, #1e293b 100%);
                    color: white;
                    padding: 4rem 0;
                    text-align: center;
                }
                .deals-hero h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
                .deals-hero p { font-size: 1.1rem; opacity: 0.9; }

                .deals-filter-bar {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                    align-items: center;
                }

                .deal-search-input {
                    padding: 0.8rem 1.5rem;
                    width: 100%;
                    max-width: 500px;
                    border-radius: 30px;
                    border: 1px solid #e2e8f0;
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.2s;
                }
                .deal-search-input:focus {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
                }

                .tags-row { display: flex; gap: 0.8rem; flex-wrap: wrap; justify-content: center; }
                .tag {
                    padding: 0.4rem 1rem;
                    border-radius: 20px;
                    background: #f1f5f9;
                    font-size: 0.9rem;
                    color: var(--text-body);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .tag:hover, .tag.active {
                    background: var(--primary);
                    color: white;
                }

                .deals-grid-layout {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
                    gap: 2rem;
                }

                .deal-card-link { text-decoration: none; color: inherit; display: block; }
                
                .deal-card {
                    background: white;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid rgba(0,0,0,0.05);
                    transition: transform 0.2s, box-shadow 0.2s;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .deal-card:hover {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-md);
                }

                .deal-thumbnail {
                    height: 200px;
                    overflow: hidden;
                    position: relative;
                }
                .deal-thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s;
                }
                .deal-card:hover .deal-thumbnail img { transform: scale(1.05); }

                .pinned-badge {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: #fbbf24;
                    color: #92400e;
                    padding: 0.3rem 0.8rem;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                .deal-content {
                    padding: 1.5rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .deal-meta {
                    font-size: 0.8rem;
                    color: var(--text-muted);
                    margin-bottom: 0.8rem;
                    display: flex;
                    justify-content: space-between;
                }

                .deal-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin-bottom: 0.8rem;
                    color: var(--text-main);
                    line-height: 1.4;
                }

                .deal-excerpt {
                    font-size: 0.95rem;
                    color: var(--text-body);
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    flex: 1;
                }

                .read-more {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--primary);
                }

                .no-deals {
                    text-align: center;
                    color: var(--text-muted);
                    grid-column: 1 / -1;
                    padding: 2rem;
                }
                
                @media (max-width: 768px) {
                    .deals-grid-layout { grid-template-columns: 1fr; }
                    .deals-hero h1 { font-size: 2rem; }
                }
            `}</style>
        </div>
    );
};

export default Deals;
