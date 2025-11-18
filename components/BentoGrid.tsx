import React from 'react';
import { FeedItem } from '../types';
import { BentoItem } from './BentoItem';

interface BentoGridProps {
  items: FeedItem[];
}

export const BentoGrid: React.FC<BentoGridProps> = ({ items }) => {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto max-w-[1800px] border-x border-grid-line">
        {/* 
            FIXED ROW HEIGHT: md:auto-rows-[240px] 
        */}
        <div className="grid grid-cols-1 gap-px bg-grid-line md:grid-cols-3 lg:grid-cols-4 md:auto-rows-[240px]">
          
          {/* Intro Block - Spans 2x2 units (480px height on desktop) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 flex flex-col justify-between bg-white p-6 md:p-10">
            <div>
               <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-swiss-black"></div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-swiss-black font-medium">
                    Archive 2023—2024
                  </p>
               </div>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.85] tracking-tighter text-swiss-black uppercase">
                Sam<br/>
                Out Of<br/>
                Pocket
              </h1>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-12 border-t border-grid-line pt-8">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-swiss-gray">Concept</span>
                <p className="font-sans text-lg md:text-xl font-normal leading-snug text-swiss-black max-w-[200px]">
                  Visual exploration of ephemeral moments.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-swiss-gray">Status</span>
                <p className="font-sans text-lg md:text-xl font-normal leading-snug text-swiss-black max-w-[200px]">
                  Based in Nowhere.<br/>
                  Open for archival work.
                </p>
              </div>
            </div>
          </div>

          {items.map((item) => (
            <BentoItem key={item.id} item={item} />
          ))}
          
          {/* Footer Block - 1x1 unit */}
          <div className="col-span-1 row-span-1 flex flex-col justify-between bg-white p-6 md:p-8 group hover:bg-stone-50 transition-colors cursor-pointer">
            <div>
               <div className="w-2 h-2 bg-swiss-black rounded-full mb-6"></div>
               <div className="font-display text-3xl md:text-4xl font-bold tracking-tighter uppercase">Get in Touch</div>
            </div>
            <div className="flex flex-col gap-3 font-mono text-[10px] uppercase tracking-widest text-swiss-black">
              <a href="#" className="flex justify-between border-b border-grid-line pb-1 hover:text-swiss-gray hover:indent-2 transition-all">Instagram <span>↗</span></a>
              <a href="#" className="flex justify-between border-b border-grid-line pb-1 hover:text-swiss-gray hover:indent-2 transition-all">Twitter <span>↗</span></a>
              <a href="#" className="flex justify-between border-b border-grid-line pb-1 hover:text-swiss-gray hover:indent-2 transition-all">Email <span>↗</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};