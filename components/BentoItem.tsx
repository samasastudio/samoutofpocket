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
      className={`group relative block bg-white ${getGridClass(item.size)} h-[280px] md:h-full flex flex-col overflow-hidden border-b border-grid-line`}
    >
      {/* Content Layer - Minimal styling */}
      <div className="absolute top-0 left-0 w-full p-4 z-30 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
         <span className="font-mono text-[9px] uppercase tracking-widest opacity-90 font-medium">
            {item.type === ContentType.GALLERY ? 'Gallery' : 'Journal'}
         </span>
         <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Image Container */}
      <div className="relative flex-grow w-full h-full overflow-hidden bg-stone-100">
        {/* Heavy Gaussian Blur Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-700 ease-in-out z-10 group-hover:backdrop-blur-md" />
        
        <img 
          src={item.coverImage} 
          alt={item.title} 
          className="h-full w-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-[1.02]"
        />
      </div>

      {/* Info Panel - Editorial Style */}
      <div className="relative z-20 bg-white p-4 border-t border-grid-line transition-colors duration-500 group-hover:bg-stone-50">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-baseline">
             <h3 className="font-display text-xl md:text-2xl font-bold leading-[1] tracking-tight text-swiss-black truncate pr-2 uppercase">
              {item.title}
            </h3>
          </div>
          
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-grid-line">
            <div className="flex gap-3 overflow-hidden">
              {item.tags.slice(0, 2).map(tag => (
                <span key={tag} className="font-mono text-[9px] uppercase tracking-widest text-swiss-gray whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-swiss-black ml-2">
               {new Date(item.date).getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};