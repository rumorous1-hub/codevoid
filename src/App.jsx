import React from 'react';
// Changed BrowserRouter to HashRouter here:
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/lib/AuthContext';
import Home from "@/pages/Home";
import PageNotFound from './lib/PageNotFound';

export default function App() {
  return (
    <AuthProvider>
      {/* Removed basename, HashRouter handles it automatically */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}