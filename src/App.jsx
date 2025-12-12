import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stores from './pages/Stores';
import About from './pages/About';
import StorePage from './pages/StorePage';
import SearchResults from './pages/SearchResults';

import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/analytics" element={<AdminDashboard />} />
          <Route path="/:slug" element={<StorePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
