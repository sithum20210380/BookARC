"use client";
import { create } from 'zustand';

export interface Book {
  id: string;
  title: string;
  author: string;
  price: string;
  rating: number;
  imageUrl: string;
  category?: string[];
  publishedDate?: string;
  description?: string;
}

interface BookStore {
  books: Book[];
  selectedCategory: string;
  selectedRating: number | null;
  currentPage: number;
  booksPerPage: number;
  setSelectedCategory: (category: string) => void;
  setSelectedRating: (rating: number | null) => void;
  setCurrentPage: (page: number) => void;

  selectedBook: Book | null;
  setSelectedBook: (book: Book) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  books: [
    {
      id: '1',
      title: 'All The Light We Cannot See',
      author: 'Anthony Doerr',
      price: '$24.99',
      rating: 4,
      category: ['Religion, Spirituality, Novels'],
      publishedDate: '1st July 2016',
      imageUrl: '/allTheLight.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
    },
    {
      id: '2',
      title: 'Where The Crawdads Sing',
      author: 'Delia Owens',
      price: '$34.99',
      rating: 4,
      category: ['Children, Fiction, Novels'],
      publishedDate: '1st July 2016',
      imageUrl: '/crawdadSing.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
    },
    {
      id: '3',
      title: 'Rich People Problems',
      author: 'Kevin Kwan',
      price: '$18.50',
      rating: 4,
      category: ['Religion, Novels'],
      publishedDate: '1st July 2016',
      imageUrl: '/richPeople.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
    },
    {
      id: '4',
      title: 'Crazy Rich Asians',
      author: 'Kevin Kwan',
      price: '$18.50',
      rating: 4,
      category: ['Arts, Children, Novels'],
      publishedDate: '1st July 2016',
      imageUrl: '/crazyRich.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
    },
    {
      id: '5',
      title: 'Konspirasi Alam Semesta',
      author: 'fiersa besari',
      price: '$18.50',
      rating: 4,
      category: ['Religion, Children, Novels'],
      publishedDate: '1st July 2016',
      imageUrl: '/konspirasi.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
    },
    {
      id: '6',
      title: 'Becoming',
      author: 'Michelle Obama',
      price: '$18.50',
      rating: 4,
      category: ['Religion, Children, Novels'],
      publishedDate: '1st July 2016',
      imageUrl: '/becoming.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
    },
    {
      id: '7',
      title: 'Rich People Problems',
      author: 'Kevin Kwan',
      price: '$18.50',
      rating: 4,
      category: ['Religion, Children, Novels'],
      publishedDate: '1st July 2016',
      imageUrl: '/richPeople.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
    },
    {
      id: '8',
      title: 'Rich People Problems',
      author: 'Kevin Kwan',
      price: '$18.50',
      rating: 4,
      category: ['Religion, Children, Novels'],
      publishedDate: '1st July 2016',
      imageUrl: '/richPeople.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
    },
  ],
  selectedCategory: 'Graphic Novels & Comics',
  selectedRating: 4,
  currentPage: 1,
  booksPerPage: 6,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedRating: (rating) => set({ selectedRating: rating }),
  setCurrentPage: (page) => set({ currentPage: page }),
  selectedBook: null,
  setSelectedBook: (book) => set({ selectedBook: book }),
}));
