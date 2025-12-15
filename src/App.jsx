import React from 'react';
import Home from './pages/Home';
import Stores from './pages/Stores';
import About from './pages/About';
import StorePage from './pages/StorePage';

import SearchResults from './pages/SearchResults';
import Deals from './pages/Deals';
import DealDetail from './pages/DealDetail';
import SubmitCoupon from './pages/SubmitCoupon';
import Contact from './pages/Contact';

import AdminDashboard from './pages/AdminDashboard';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Scroll to top on route change (Mobile Fix)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/about" element={<About />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/deals/:slug" element={<DealDetail />} />
          <Route path="/submit-coupon" element={<SubmitCoupon />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/analytics" element={<AdminDashboard />} />
          <Route path="/:slug" element={<StorePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
