import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import analytics from '../services/analytics';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [coupons, setCoupons] = useState([]);
    const [stores, setStores] = useState([]);
    const [events, setEvents] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        setCoupons(analytics.getAllCouponsWithMetrics());
        setStores(analytics.getStoreMetrics());
        setEvents(analytics.getEventsLog());
    }, [refresh]);

    const handleRefresh = () => setRefresh(prev => prev + 1);

    const handleReset = () => {
        if (window.confirm("Are you sure? This will wipe all analytics data.")) {
            analytics.resetData();
            handleRefresh();
        }
    };

    return (
        <div className="admin-page">
            <Header />
            <div className="admin-container container">
                <div className="admin-header">
                    <h1>Admin Analytics Dashboard</h1>
                    <div className="admin-actions">
                        <button onClick={handleRefresh} className="btn-secondary">Refresh Data</button>
                        <button onClick={handleReset} className="btn-danger">Reset All</button>
                    </div>
                </div>

                <div className="admin-tabs">
                    <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</button>
                    <button className={activeTab === 'coupons' ? 'active' : ''} onClick={() => setActiveTab('coupons')}>Top Coupons</button>
                    <button className={activeTab === 'stores' ? 'active' : ''} onClick={() => setActiveTab('stores')}>Store Performance</button>
                    <button className={activeTab === 'export' ? 'active' : ''} onClick={() => setActiveTab('export')}>Export & Snapshot</button>
                </div>

                <div className="admin-content">
                    {activeTab === 'overview' && (
                        <div className="overview-grid">
                            <div className="stat-card">
                                <h3>Total Events</h3>
                                <p className="stat-value">{events.length}</p>
                            </div>
                            <div className="stat-card">
                                <h3>Most Active Store</h3>
                                <p className="stat-value text-small">{stores[0]?.name || '-'}</p>
                            </div>
                            <div className="stat-card">
                                <h3>Total Copies</h3>
                                <p className="stat-value">{stores.reduce((acc, s) => acc + s.analytics.totalCopy, 0)}</p>
                            </div>

                            <div className="recent-activity">
                                <h3>Recent Live Events</h3>
                                <ul className="event-log">
                                    {events.slice(0, 10).map((e, i) => (
                                        <li key={i}>
                                            <span className={`tag ${e.type}`}>{e.type}</span>
                                            <span className="source">{e.storeSlug}</span>
                                            <span className="time">{new Date(e.timestamp).toLocaleTimeString()}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === 'coupons' && (
                        <div className="table-responsive">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Store</th>
                                        <th>Coupon</th>
                                        <th>Copies</th>
                                        <th>Clicks</th>
                                        <th>Views</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {analytics.getTopCoupons(50).map((c, i) => (
                                        <tr key={i}>
                                            <td>#{i + 1}</td>
                                            <td>{c.store.name}</td>
                                            <td className="truncate">{c.title}</td>
                                            <td><strong>{c.metrics.copy}</strong></td>
                                            <td>{c.metrics.click}</td>
                                            <td>{c.metrics.view}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'stores' && (
                        <div className="table-responsive">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Store Name</th>
                                        <th>Total Copies</th>
                                        <th>Total Clicks</th>
                                        <th>Total Views</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stores.map((s, i) => (
                                        <tr key={i}>
                                            <td>{s.name}</td>
                                            <td><strong>{s.analytics.totalCopy}</strong></td>
                                            <td>{s.analytics.totalClick}</td>
                                            <td>{s.analytics.totalView}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'export' && (
                        <div className="export-panel">
                            <h3>Data Export</h3>
                            <div className="export-buttons">
                                <button onClick={() => analytics.exportToCSV('coupons')} className="btn-primary">Download Coupons CSV</button>
                                <button onClick={() => analytics.exportToCSV('stores')} className="btn-primary">Download Stores CSV</button>
                            </div>

                            <hr style={{ margin: '2rem 0' }} />

                            <h3>Weekly Snapshot</h3>
                            <p>Generate a static list of this week's best deals for the 'Top Offers' section.</p>
                            <button onClick={() => { analytics.generateWeeklySnapshot(); alert('Snapshot Generated!'); }} className="btn-secondary">Generate Now</button>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .admin-page { background: #f8fafc; min-height: 100vh; }
                .admin-container { padding: 2rem 1rem; }
                
                .admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
                .admin-header h1 { color: var(--text-main); font-size: 1.8rem; }
                
                .admin-tabs { display: flex; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid #ddd; padding-bottom: 1rem; }
                .admin-tabs button { background: none; border: none; font-size: 1rem; color: var(--text-muted); padding: 0.5rem 1rem; cursor: pointer; font-weight: 600; }
                .admin-tabs button.active { color: var(--primary); border-bottom: 2px solid var(--primary); }

                .stat-card { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: var(--shadow-sm); }
                .overview-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
                .stat-value { font-size: 2rem; font-weight: 700; color: var(--primary); }
                .text-small { font-size: 1.5rem; }

                .recent-activity { grid-column: 1 / -1; background: white; padding: 1.5rem; border-radius: 8px; margin-top: 1rem; }
                .event-log { list-style: none; padding: 0; }
                .event-log li { display: flex; justify-content: space-between; padding: 0.8rem 0; border-bottom: 1px solid #eee; }
                
                .tag { padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; text-transform: uppercase; }
                .tag.copy { background: #dcfce7; color: #166534; }
                .tag.click { background: #dbeafe; color: #1e40af; }
                .tag.view { background: #f1f5f9; color: #64748b; }

                .admin-table { width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; }
                .admin-table th, .admin-table td { padding: 1rem; text-align: left; border-bottom: 1px solid #eee; }
                .admin-table th { background: #f8fafc; font-weight: 600; }
                .truncate { max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

                .btn-primary { background: var(--primary); color: white; padding: 0.5rem 1rem; border-radius: 6px; border: none; cursor: pointer; }
                .btn-secondary { background: white; border: 1px solid #ccc; color: #333; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; margin-right: 0.5rem; }
                .btn-danger { background: #fee2e2; color: #dc2626; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; }
                
                .export-buttons { display: flex; gap: 1rem; }
            `}</style>
            <Footer />
        </div>
    );
};

export default AdminDashboard;
