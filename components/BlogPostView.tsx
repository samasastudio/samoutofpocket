import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { FEED_DATA } from '../constants';
import { ContentType, BlogPostItem, BlockType, ContentBlock } from '../types';
import { ArrowLeft } from 'lucide-react';

const BlockRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case BlockType.TEXT:
      return (
        <p className="mb-10 font-sans text-lg md:text-xl leading-[1.6] text-swiss-black max-w-2xl font-light selection:bg-swiss-black selection:text-white">
          {block.content}
        </p>
      );
    
    case BlockType.IMAGE:
      return (
        <figure className="mb-16 mt-16 w-full">
          <img src={block.src} alt="Blog visual" className="w-full h-auto transition-all duration-500 hover:shadow-lg" />
          {block.caption && (
            <figcaption className="mt-4 flex items-center gap-4">
              <div className="h-px flex-grow bg-grid-line"></div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-swiss-gray whitespace-nowrap">
                {block.caption}
              </span>
            </figcaption>
          )}
        </figure>
      );

    case BlockType.DIPTYCH:
      return (
        <figure className="mb-16 mt-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white border border-white">
            {block.images?.map((src, idx) => (
              <div key={idx} className="relative aspect-[4/5]">
                <img src={src} alt={`Diptych ${idx}`} className="absolute inset-0 h-full w-full object-cover transition-all duration-500 hover:shadow-lg" />
              </div>
            ))}
          </div>
          {block.caption && (
            <figcaption className="mt-4 flex items-center gap-4">
              <div className="h-px flex-grow bg-grid-line"></div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-swiss-gray whitespace-nowrap">
                {block.caption}
              </span>
            </figcaption>
          )}
        </figure>
      );

    case BlockType.COLLAGE:
      return (
        <figure className="mb-16 mt-16 w-full">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white">
              <div className="md:col-span-2 relative aspect-square">
                 <img src={block.images?.[0]} className="absolute inset-0 w-full h-full object-cover transition-all duration-500 hover:shadow-lg" alt="Collage main" />
              </div>
              <div className="flex flex-col gap-px">
                {block.images?.slice(1, 3).map((src, idx) => (
                  <div key={idx} className="relative flex-1 aspect-square md:aspect-auto">
                    <img src={src} className="absolute inset-0 w-full h-full object-cover transition-all duration-500 hover:shadow-lg" alt={`Collage small ${idx}`} />
                  </div>
                ))}
              </div>
           </div>
           {block.caption && (
            <figcaption className="mt-4 flex items-center gap-4">
              <div className="h-px flex-grow bg-grid-line"></div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-swiss-gray whitespace-nowrap">
                {block.caption}
              </span>
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
};

export const BlogPostView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = FEED_DATA.find(i => i.id === id && i.type === ContentType.POST) as BlogPostItem | undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Editorial Header */}
      <header className="pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto border-b border-grid-line">
        <Link to="/" className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-swiss-gray hover:text-black mb-12 transition-colors">
           <ArrowLeft size={12} /> Journal Index
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter text-swiss-black mb-8">
              {item.title}
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end pb-4">
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-swiss-gray mb-2">Published</span>
                    <span className="font-display text-xl font-medium tracking-tight">{item.date}</span>
                </div>
                <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-swiss-gray mb-2">Category</span>
                    <span className="font-display text-xl font-medium tracking-tight">{item.tags[0]}</span>
                </div>
                <div className="col-span-2">
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-swiss-gray mb-2">Summary</span>
                    <p className="font-sans text-sm text-swiss-black leading-relaxed max-w-xs">
                        {item.description}
                    </p>
                </div>
              </div>
          </div>
        </div>
      </header>

      {/* Content Column */}
      <article className="mx-auto max-w-[1800px] px-6 md:px-12 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
         <div className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
            <div className="border-l border-swiss-black pl-6">
              <p className="font-display text-xl font-medium leading-tight tracking-tight text-swiss-black mb-4">
                "Digital allows for endless mistakes. Film demands intention."
              </p>
              <span className="font-mono text-[9px] uppercase tracking-widest text-swiss-gray">Excerpt</span>
            </div>
         </div>

         <div className="lg:col-span-6">
            {/* Lead Image */}
            <div className="mb-16 w-full">
              <img src={item.coverImage} alt={item.title} className="w-full max-h-[70vh] object-cover" />
            </div>

            {/* Blocks */}
            <div>
              {item.blocks.map((block, idx) => (
                <BlockRenderer key={idx} block={block} />
              ))}
            </div>
            
            {/* Footer Info */}
            <div className="mt-32 border-t border-grid-line pt-12 flex flex-col items-center text-center gap-6">
              <div className="w-2 h-2 bg-swiss-black rounded-full"></div>
              <p className="font-display text-3xl font-bold tracking-tighter uppercase">End of Entry</p>
            </div>
         </div>

         <div className="hidden lg:block lg:col-span-3"></div>
      </article>
    </div>
  );
};