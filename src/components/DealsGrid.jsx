import React from 'react';
import CouponCard from './CouponCard';

const DealsGrid = () => {
  // Dummy Data for Preview
  const deals = [
    { id: 1, merchant: { name: "Amazon" }, title: "Up to 50% Off on Electronics", description: "Get huge discounts on laptops, mobiles, and accessories.", verified: true, code: "AMZ50OFF" },
    { id: 2, merchant: { name: "Uber" }, title: "Flat $5 Off on First 3 Rides", description: "Valid for new users only. No minimum purchase required.", verified: true, code: "UBERNEW" },
    { id: 3, merchant: { name: "Domino's" }, title: "Buy 1 Get 1 Free Pizza", description: "Applicable on medium and large pizzas only.", verified: true, code: "DOMBOGO" },
    { id: 4, merchant: { name: "Nike" }, title: "Extra 20% Off Sale Items", description: "Shop the latest sneakers and sportswear at discounted prices.", verified: false, code: "NIKE20" },
    { id: 5, merchant: { name: "Spotify" }, title: "3 Months Premium for Free", description: "Try Premium free for 3 months. Cancel anytime.", verified: true, code: "SPOTIFY3M" },
    { id: 6, merchant: { name: "Airbnb" }, title: "$40 Off Your First Trip", description: "Save on your first booking of $75 or more.", verified: true, code: "AIRBNB40" },
  ];

  return (
    <section className="deals-section" id="deals">
      <div className="container">
        <h2 className="section-title">Top Coupons & Offers</h2>
        <div className="deals-layout">
          {/* Sidebar */}
          <aside className="deals-sidebar">
            <div className="filter-group">
              <h3 className="filter-title">Categories</h3>
              <ul className="filter-list">
                <li><label><input type="checkbox" /> Travel (120)</label></li>
                <li><label><input type="checkbox" /> Fashion (85)</label></li>
                <li><label><input type="checkbox" /> Food (64)</label></li>
                <li><label><input type="checkbox" /> Electronics (50)</label></li>
              </ul>
            </div>

            <div className="filter-group">
              <h3 className="filter-title">Stores</h3>
              <ul className="filter-list">
                <li><label><input type="checkbox" /> Amazon</label></li>
                <li><label><input type="checkbox" /> Flipkart</label></li>
                <li><label><input type="checkbox" /> Myntra</label></li>
                <li><label><input type="checkbox" /> Uber</label></li>
              </ul>
            </div>
          </aside>

          {/* Grid */}
          <div className="deals-grid">
            {deals.map(deal => (
              <CouponCard key={deal.id} {...deal} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .deals-section {
          padding: 60px 0;
          background: var(--bg-dark);
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .deals-layout {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 2rem;
        }

        @media (max-width: 900px) {
          .deals-layout {
            grid-template-columns: 1fr;
          }
          .deals-sidebar {
            display: none; 
          }
        }

        @media (max-width: 768px) {
            .deals-grid {
                grid-template-columns: 1fr;
            }
        }

        .filter-group {
          margin-bottom: 2rem;
        }

        .filter-title {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .filter-list {
          list-style: none;
        }

        .filter-list li {
          margin-bottom: 0.5rem;
        }

        .filter-list label {
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
        }

        .filter-list label:hover {
          color: var(--primary);
        }

        .deals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default DealsGrid;
