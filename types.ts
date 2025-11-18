export enum ContentType {
  GALLERY = 'GALLERY',
  POST = 'POST'
}

export enum BlockType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  DIPTYCH = 'DIPTYCH',
  COLLAGE = 'COLLAGE'
}

export interface ContentBlock {
  type: BlockType;
  content?: string; // For text
  src?: string; // For single image
  caption?: string;
  images?: string[]; // For diptych/collage
}

export interface BaseItem {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  description: string;
  tags: string[];
  size: 'small' | 'medium' | 'large' | 'tall' | 'wide'; // For bento grid sizing
}

export interface GalleryItem extends BaseItem {
  type: ContentType.GALLERY;
  images: { src: string; alt: string; orientation: 'landscape' | 'portrait' }[];
}

export interface BlogPostItem extends BaseItem {
  type: ContentType.POST;
  blocks: ContentBlock[];
}

export type FeedItem = GalleryItem | BlogPostItem;