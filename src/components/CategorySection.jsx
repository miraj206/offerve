import React from 'react';

const CategorySection = () => {
  const categories = [
    { name: "Food", icon: "🍔", count: "150 Offers" },
    { name: "Travel", icon: "✈️", count: "85 Offers" },
    { name: "Fashion", icon: "👗", count: "200+ Offers" },
    { name: "Electronics", icon: "💻", count: "120 Offers" },
    { name: "Beauty", icon: "💄", count: "90 Offers" },
    { name: "Recharge", icon: "📱", count: "45 Offers" },
    { name: "Entertainment", icon: "🎬", count: "60 Offers" },
    { name: "Grocery", icon: "🥦", count: "110 Offers" },
  ];

  return (
    <section className="category-section" id="categories">
      <div className="container">
        <h2 className="section-title">Browse by Category</h2>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <div className="cat-icon">{cat.icon}</div>
              <h3 className="cat-name">{cat.name}</h3>
              <span className="cat-count">{cat.count}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .category-section {
          padding: 60px 0;
          background: var(--bg-main);
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 1.5rem;
        }

        .category-card {
          background: var(--bg-card);
          box-shadow: var(--shadow-sm);
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
          border: 1px solid rgba(0,0,0,0.05);
          transition: var(--transition);
          cursor: pointer;
        }

        .category-card:hover {
          background: white;
          border-color: var(--primary);
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .cat-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .cat-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .cat-count {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
};

export default CategorySection;
