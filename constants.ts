import { FeedItem, ContentType, BlockType } from './types';

export const FEED_DATA: FeedItem[] = [
  {
    id: 'proj-tokyo-night',
    type: ContentType.GALLERY,
    title: 'TOKYO NIGHTWALK',
    date: '2023-11-15',
    description: 'Neon lights and rain-slicked streets in Shinjuku.',
    coverImage: 'https://picsum.photos/seed/tokyo/800/600',
    tags: ['Street', 'Night', 'Color'],
    size: 'large',
    images: [
      { src: 'https://picsum.photos/seed/tokyo1/1200/800', alt: 'Shinjuku Crossing', orientation: 'landscape' },
      { src: 'https://picsum.photos/seed/tokyo2/800/1200', alt: 'Alleyway', orientation: 'portrait' },
      { src: 'https://picsum.photos/seed/tokyo3/1200/800', alt: 'Neon Sign', orientation: 'landscape' },
      { src: 'https://picsum.photos/seed/tokyo4/800/1200', alt: 'Rainy Window', orientation: 'portrait' },
      { src: 'https://picsum.photos/seed/tokyo5/1200/800', alt: 'Taxi', orientation: 'landscape' },
    ]
  },
  {
    id: 'blog-gear-philosophy',
    type: ContentType.POST,
    title: 'THE RICOH GRIII DIARIES',
    date: '2023-12-02',
    description: 'Why a point-and-shoot changed my entire approach to composition.',
    coverImage: 'https://picsum.photos/seed/camera/600/600',
    tags: ['Gear', 'Philosophy', 'Writing'],
    size: 'small',
    blocks: [
      {
        type: BlockType.TEXT,
        content: "They say the best camera is the one you have with you. For years, I lugged around a massive DSLR system, convinced that the weight equated to quality. I was wrong. The friction of carrying 2kg of glass meant I often left the camera at home."
      },
      {
        type: BlockType.IMAGE,
        src: 'https://picsum.photos/seed/street1/1200/600',
        caption: 'Captured one-handed while crossing the street.'
      },
      {
        type: BlockType.TEXT,
        content: "The limitation of a fixed 28mm equivalent lens forces you to zoom with your feet. You become part of the scene, not a sniper observing from afar."
      },
      {
        type: BlockType.DIPTYCH,
        images: [
          'https://picsum.photos/seed/gr1/600/800',
          'https://picsum.photos/seed/gr2/600/800'
        ],
        caption: 'Texture and Shadow study.'
      }
    ]
  },
  {
    id: 'proj-concrete-dreams',
    type: ContentType.GALLERY,
    title: 'CONCRETE DREAMS',
    date: '2024-01-10',
    description: 'Brutalist architecture in London.',
    coverImage: 'https://picsum.photos/seed/concrete/600/800',
    tags: ['Architecture', 'B&W'],
    size: 'tall',
    images: [
      { src: 'https://picsum.photos/seed/arch1/800/1200', alt: 'Barbican', orientation: 'portrait' },
      { src: 'https://picsum.photos/seed/arch2/1200/800', alt: 'National Theatre', orientation: 'landscape' },
      { src: 'https://picsum.photos/seed/arch3/800/1200', alt: 'Trellick Tower', orientation: 'portrait' },
    ]
  },
  {
    id: 'blog-process-2024',
    type: ContentType.POST,
    title: '2024: A RETURN TO FILM',
    date: '2024-01-22',
    description: 'Slowing down the process with medium format.',
    coverImage: 'https://picsum.photos/seed/film/800/400',
    tags: ['Analog', 'Process'],
    size: 'wide',
    blocks: [
      {
        type: BlockType.TEXT,
        content: "Digital allows for endless mistakes. Film demands intention. Each shutter press costs money, which sounds like a drawback but is actually a feature. It introduces stakes to the act of creation."
      },
      {
        type: BlockType.COLLAGE,
        images: [
          'https://picsum.photos/seed/film1/600/600',
          'https://picsum.photos/seed/film2/600/600',
          'https://picsum.photos/seed/film3/600/600',
        ],
        caption: 'Contact sheet snippets.'
      }
    ]
  },
  {
    id: 'proj-coastline',
    type: ContentType.GALLERY,
    title: 'PACIFIC COAST',
    date: '2024-02-14',
    description: 'Fog, salt, and the eternal crash of waves.',
    coverImage: 'https://picsum.photos/seed/ocean/600/600',
    tags: ['Nature', 'Landscape'],
    size: 'medium',
    images: [
      { src: 'https://picsum.photos/seed/sea1/1200/800', alt: 'Big Sur', orientation: 'landscape' },
      { src: 'https://picsum.photos/seed/sea2/1200/800', alt: 'Waves', orientation: 'landscape' },
    ]
  },
  {
    id: 'blog-light-study',
    type: ContentType.POST,
    title: 'STUDYING LIGHT',
    date: '2024-03-01',
    description: 'Chasing the golden hour is cliché, but chasing shadows is timeless.',
    coverImage: 'https://picsum.photos/seed/shadow/600/800',
    tags: ['Technique'],
    size: 'tall',
    blocks: [
      {
        type: BlockType.TEXT,
        content: "Harsh light is often avoided, but it creates the most dramatic graphical elements in a composition."
      },
      {
        type: BlockType.DIPTYCH,
        images: [
          'https://picsum.photos/seed/light1/800/600',
          'https://picsum.photos/seed/light2/800/600'
        ]
      }
    ]
  },
  {
    id: 'proj-portraits',
    type: ContentType.GALLERY,
    title: 'FACES OF STRANGERS',
    date: '2024-03-20',
    description: 'Studio portraits of people I met on the subway.',
    coverImage: 'https://picsum.photos/seed/faces/800/600',
    tags: ['Portrait', 'Studio'],
    size: 'medium',
    images: [
      { src: 'https://picsum.photos/seed/face1/800/1000', alt: 'Portrait 1', orientation: 'portrait' },
      { src: 'https://picsum.photos/seed/face2/800/1000', alt: 'Portrait 2', orientation: 'portrait' },
      { src: 'https://picsum.photos/seed/face3/800/1000', alt: 'Portrait 3', orientation: 'portrait' },
    ]
  }
];