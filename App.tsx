import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { BentoGrid } from './components/BentoGrid';
import { GalleryView } from './components/GalleryView';
import { BlogPostView } from './components/BlogPostView';
import { FEED_DATA } from './constants';

const Home: React.FC = () => {
  return <BentoGrid items={FEED_DATA} />;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-swiss-black font-sans antialiased selection:bg-swiss-black selection:text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery/:id" element={<GalleryView />} />
          <Route path="/post/:id" element={<BlogPostView />} />
        </Routes>
        
        <footer className="border-t border-grid-line bg-white py-24 px-6 text-center">
          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase">samoutofpocket</h2>
            <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-swiss-gray">
               <span>© {new Date().getFullYear()}</span>
               <span>All Rights Reserved</span>
               <span>Est. 2024</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;