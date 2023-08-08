import {Author} from './Author';

export type Privacy = 'public' | 'firends' | 'only me';

export interface Feed {
  description: string;
  picture: string;
  author: Author;
  publishedAt: string;
  totalLikes: number;
  totalComments: number;
  location?: string;
  privacy?: Privacy;
}
