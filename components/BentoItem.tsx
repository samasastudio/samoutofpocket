
import React from 'react';
import { Link } from 'react-router-dom';
import { FeedItem, ContentType } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface BentoItemProps {
  item: FeedItem;
}

export const BentoItem: React.FC<BentoItemProps> = ({ item }) => {
  const getGridClass = (size: string) => {
    switch (size) {
      case 'large': return 'md:col-span-2 md:row-span-2';
      case 'tall': return 'md:col-span-1 md:row-span-2';
      case 'wide': return 'md:col-span-2 md:row-span-1';
      default: return 'md:col-span-1 md:row-span-1';
    }
  };

  const isGallery = item.type === ContentType.GALLERY;
  const linkPath = isGallery ? `/gallery/${item.id}` : `/post/${item.id}`;

  return (
    <Link 
      to={linkPath}
      className={`group relative block bg-swiss-black ${getGridClass(item.size)} h-full flex flex-col overflow-hidden rounded-2xl`}
    >
      {/* Content Layer - Top Labels */}
      <div className="absolute top-0 left-0 w-full p-6 z-30 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
         <span className="font-mono text-xs uppercase tracking-widest opacity-90 font-bold border border-white/30 px-2 py-1 rounded-full backdrop-blur-sm">
            {item.type === ContentType.GALLERY ? 'Gallery' : 'Journal'}
         </span>
         <div className="bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
            <ArrowUpRight className="w-5 h-5" />
         </div>
      </div>

      {/* Image Container */}
      <div className="relative flex-grow w-full h-full overflow-hidden bg-swiss-black">
        {/* Heavy Gaussian Blur Overlay - Dreamy Effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 ease-in-out z-10 group-hover:backdrop-blur-[8px]" />
        
        <img 
          src={item.coverImage} 
          alt={item.title} 
          className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
      </div>

      {/* Info Panel - Overlay Style for Immersive Feel */}
      <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-8 transition-all duration-500">
        <div className="flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.9] tracking-tighter text-white mix-blend-difference uppercase">
            {item.title}
          </h3>
          
          <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">
               {new Date(item.date).getFullYear()}
            </span>
            <div className="h-px w-8 bg-white/50"></div>
            <div className="flex gap-3">
              {item.tags.slice(0, 2).map(tag => (
                <span key={tag} className="font-mono text-[10px] uppercase tracking-widest text-white/90">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
