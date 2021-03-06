export interface GalleryItemModel {
  id: number;
  name: string;
  description: string;
  thumbnails: {
    small?: string
    medium?: string,
    large?: string
  };
  url?: string;
}
