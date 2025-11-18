
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery/:id" element={<GalleryView />} />
          <Route path="/post/:id" element={<BlogPostView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
