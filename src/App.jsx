import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/lib/AuthContext';
import Home from "@/pages/Home";
import PageNotFound from './lib/PageNotFound';

export default function App() {
  return (
    <AuthProvider>
      {/* Add the basename right here so the router knows where it lives */}
      <Router basename="/codevoid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}