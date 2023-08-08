import {Feed} from '@/types/Feed';

export const FEEDS: Feed[] = [
  {
    description: 'Exploring the city streets',
    picture: 'https://source.unsplash.com/random/400x400/?europe',
    author: {
      name: 'Alice Johnson',
      photo: 'https://example.com/alice-johnson-photo.jpg',
    },
    publishedAt: '2023-08-08T10:15:00Z',
    totalLikes: 85,
    totalComments: 12,
    location: 'Downtown',
    privacy: 'public',
  },
  {
    description: 'Enjoying a peaceful hike in the mountains',
    picture: 'https://source.unsplash.com/random/400x400/?beach',
    author: {
      name: 'Michael Smith',
      photo: 'https://example.com/michael-smith-photo.jpg',
    },
    publishedAt: '2023-08-07T14:45:00Z',
    totalLikes: 150,
    totalComments: 30,
    privacy: 'firends',
  },
  {
    description:
      "Spent the day wandering through the bustling city streets, exploring hidden alleys and quaint cafes. The architecture was breathtaking, a blend of modern skyscrapers and historic buildings. Met some friendly locals who shared stories about the city's history. Captured this candid moment during sunset",
    picture: 'https://source.unsplash.com/random/400x400/?lake',
    author: {
      name: 'Emily Brown',
      photo: 'https://example.com/emily-brown-photo.jpg',
    },
    publishedAt: '2023-08-06T17:20:00Z',
    totalLikes: 65,
    totalComments: 8,
    location: 'Lakeside',
    privacy: 'only me',
  },
];
