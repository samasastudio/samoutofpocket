import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-grid-line bg-white/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center gap-6">
          {!isHome && (
            <Link to="/" className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-swiss-gray hover:text-swiss-black transition-colors">
              <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
              Index
            </Link>
          )}
          <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-tighter text-swiss-black uppercase">
            samoutofpocket
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-swiss-gray font-medium">
          <Link to="/" className="hover:text-swiss-black transition-colors">Work</Link>
          <Link to="/" className="hover:text-swiss-black transition-colors">Journal</Link>
          <a href="#" className="hover:text-swiss-black transition-colors">Info</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-swiss-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[57px] z-40 bg-white p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-5 border-t border-grid-line">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-display text-3xl font-bold tracking-tighter text-swiss-black hover:text-swiss-gray uppercase">Index</Link>
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-display text-3xl font-bold tracking-tighter text-swiss-black hover:text-swiss-gray uppercase">Journal</Link>
          <a href="#" className="font-display text-3xl font-bold tracking-tighter text-swiss-black hover:text-swiss-gray uppercase">Info</a>
        </div>
      )}
    </nav>
  );
};