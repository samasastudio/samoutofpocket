import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { FEED_DATA } from '../constants';
import { ContentType, GalleryItem } from '../types';

export const GalleryView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = FEED_DATA.find(i => i.id === id && i.type === ContentType.GALLERY) as GalleryItem | undefined;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (!item || selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % item.images.length));
  }, [item, selectedIndex]);

  const handlePrev = useCallback(() => {
    if (!item || selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + item.images.length) % item.images.length));
  }, [item, selectedIndex]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === 'Escape') setSelectedIndex(null);
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
  }, [selectedIndex, handleNext, handlePrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!item) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <header className="pt-32 pb-16 px-6 md:px-12 max-w-[1800px] mx-auto border-b border-grid-line mb-12">
        <Link to="/" className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-swiss-gray hover:text-black mb-8 transition-colors">
           <ArrowLeft size={12} /> Index
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.85] tracking-tighter text-swiss-black mb-8">
              {item.title}
            </h1>
            <div className="flex flex-wrap gap-4">
               {item.tags.map(tag => (
                 <span key={tag} className="px-3 py-1 border border-grid-line rounded-full font-mono text-[10px] uppercase tracking-widest text-swiss-black bg-white hover:bg-swiss-black hover:text-white transition-colors">
                   {tag}
                 </span>
               ))}
            </div>
          </div>
          <div className="lg:col-span-4">
             <p className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-swiss-black">
              {item.description}
            </p>
            <div className="mt-8 flex gap-12 border-t border-grid-line pt-6">
               <div>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-swiss-gray mb-1">Date</span>
                  <span className="font-display text-lg font-bold tracking-tight">{item.date}</span>
               </div>
               <div>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-swiss-gray mb-1">Images</span>
                  <span className="font-display text-lg font-bold tracking-tight">{item.images.length}</span>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <div className="px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {item.images.map((img, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedIndex(idx)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full transition-all duration-1000 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-swiss-black/5 transition-all duration-700 ease-in-out flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md">
                 <span className="bg-swiss-black text-white px-3 py-1 font-mono text-[9px] uppercase tracking-widest">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 z-50 p-2 text-black hover:bg-stone-100 transition-colors"
          >
            <X size={24} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-4 text-black hover:-translate-x-2 transition-transform hidden md:block"
          >
            <ChevronLeft size={48} strokeWidth={0.5} />
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-4 text-black hover:translate-x-2 transition-transform hidden md:block"
          >
            <ChevronRight size={48} strokeWidth={0.5} />
          </button>

          <div 
            className="relative w-full h-full p-12 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={item.images[selectedIndex].src} 
              alt={item.images[selectedIndex].alt}
              className="max-h-[85vh] w-auto max-w-full object-contain shadow-xl"
            />
            
            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="font-display text-lg font-medium tracking-tight text-black">
                    {item.images[selectedIndex].alt}
                </p>
                <span className="font-mono text-[10px] uppercase tracking-widest text-swiss-gray mt-2 block">
                     {selectedIndex + 1} / {item.images.length}
                </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};