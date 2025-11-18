import React from 'react';
import { FeedItem } from '../types';
import { BentoItem } from './BentoItem';

interface BentoGridProps {
  items: FeedItem[];
}

export const BentoGrid: React.FC<BentoGridProps> = ({ items }) => {
  return (
    <div className="min-h-screen w-full bg-swiss-black">
      {/* Full width container with gaps showing the swiss-black background */}
      <div className="w-full p-3">
        {/* 
            Immersive sizing updates:
            - Reduced row height from 45vh to 30vh to make the title and footer less overwhelming.
            - Added gap-3 for the "off-black between" look (now pure black).
            - Added rounded corners to blocks via the BentoItem component and manual classes here.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[35vh] md:auto-rows-[30vh] gap-3 grid-flow-row-dense">
          
          {/* Intro Block - Massive Hero Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 flex flex-col justify-between bg-white p-8 md:p-12 overflow-hidden relative group rounded-2xl ring-1 ring-white/10">
            <div className="relative z-10">
               <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-swiss-black"></div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-swiss-black font-semibold">
                    Portfolio 2023—2024
                  </p>
               </div>
              <h1 className="font-display text-[12vw] md:text-[4vw] font-bold leading-[0.85] tracking-tighter text-swiss-black uppercase break-words">
                Sam<br/>
                Out Of<br/>
                Pocket
              </h1>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-grid-line relative z-10">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-swiss-gray">Manifesto</span>
                <p className="font-sans text-lg font-light leading-tight text-swiss-black">
                  Visual exploration of ephemeral moments, brutalist structures, and light.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-swiss-gray">Current Status</span>
                <p className="font-sans text-lg font-light leading-tight text-swiss-black">
                  Based in Nowhere.<br/>
                  Open for archival work.
                </p>
              </div>
            </div>
          </div>

          {items.map((item) => (
            <BentoItem key={item.id} item={item} />
          ))}
          
          {/* Footer Block - Interactive Contact Tile */}
          <div className="col-span-1 row-span-1 flex flex-col justify-between bg-swiss-black p-8 group transition-colors cursor-pointer hover:bg-neutral-900 text-white rounded-2xl border border-white/10">
            <div>
               <div className="w-2 h-2 bg-white rounded-full mb-6 animate-pulse"></div>
               <div className="font-display text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-none">Let's<br/>Work</div>
            </div>
            <div className="flex flex-col gap-3 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
              <a href="#" className="flex justify-between border-b border-neutral-800 pb-2 hover:text-white hover:pl-2 transition-all">Instagram <span>↗</span></a>
              <a href="#" className="flex justify-between border-b border-neutral-800 pb-2 hover:text-white hover:pl-2 transition-all">Twitter <span>↗</span></a>
              <a href="#" className="flex justify-between border-b border-neutral-800 pb-2 hover:text-white hover:pl-2 transition-all">Email <span>↗</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};