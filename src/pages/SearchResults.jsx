import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CouponCard from '../components/CouponCard';
import searchService from '../services/search';
import { analytics } from '../services/analytics';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        if (query) {
            // Track search
            analytics.trackSearch(query);

            // Perform Search
            const data = searchService.search(query);
            setResults(data);
        }
    }, [query]);

    const filteredResults = filter === 'all'
        ? results
        : results.filter(r => r.type === filter);

    return (
        <div className="page-wrapper">
            <Header />
            <div className="container search-page">
                <h1 className="search-heading">Results for "{query}"</h1>

                <div className="search-filters">
                    <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All ({results.length})</button>
                    <button className={filter === 'store' ? 'active' : ''} onClick={() => setFilter('store')}>Stores</button>
                    <button className={filter === 'coupon' ? 'active' : ''} onClick={() => setFilter('coupon')}>Coupons</button>
                </div>

                <div className="search-grid">
                    {filteredResults.length > 0 ? (
                        filteredResults.map((item, i) => (
                            <div key={i} className="search-result-item">
                                {item.type === 'coupon' && (
                                    <CouponCard
                                        {...item.data}
                                        id={item.id.split('-')[1]} // extracting ID
                                        merchant={item.data.merchant}
                                    />
                                )}
                                {item.type === 'store' && (
                                    <div className="store-result-card">
                                        <div className="store-logo">
                                            {item.data.name[0]}
                                        </div>
                                        <div className="store-info">
                                            <h3>{item.data.name}</h3>
                                            <p>{item.data.description}</p>
                                            <a href={'/' + item.data.slug} className="btn-small">Visit Store</a>
                                        </div>
                                    </div>
                                )}
                                {item.type === 'page' && (
                                    <div className="page-result-card">
                                        <h3>{item.title}</h3>
                                        <span className="type-tag">Guide</span>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            <h3>No results found for "{query}"</h3>
                            <p>Try checking your spelling or using a different keyword.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />

            <style>{`
                .search-page { padding: 3rem 1rem; min-height: 80vh; }
                .search-heading { font-size: 2rem; margin-bottom: 2rem; color: var(--text-main); }
                
                .search-filters { display: flex; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
                .search-filters button {
                    background: none; border: none; font-size: 1rem; color: var(--text-muted); padding: 0.5rem 1rem; cursor: pointer; font-weight: 600; border-radius: 20px; transition: 0.2s;
                }
                .search-filters button.active, .search-filters button:hover { background: #f1f5f9; color: var(--primary); }

                .search-grid { display: flex; flex-direction: column; gap: 1.5rem; max-width: 800px; }

                .store-result-card {
                    display: flex; gap: 1.5rem; background: white; padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid rgba(0,0,0,0.05); align-items: center;
                }
                .store-logo {
                    width: 60px; height: 60px; background: #e0f2fe; color: var(--primary); font-size: 1.5rem; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: 700;
                }
                .store-info h3 { margin-bottom: 0.5rem; font-size: 1.2rem; }
                .store-info p { color: var(--text-body); font-size: 0.9rem; margin-bottom: 0.8rem; }
                .btn-small { text-decoration: none; color: white; background: var(--primary); padding: 0.4rem 1rem; border-radius: 4px; font-size: 0.85rem; }

                .page-result-card { background: white; padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid rgba(0,0,0,0.05); }
                .type-tag { font-size: 0.75rem; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; margin-top: 0.5rem; display: inline-block; }

                .no-results { text-align: center; color: var(--text-muted); margin-top: 4rem; }
            `}</style>
        </div>
    );
};

export default SearchResults;
