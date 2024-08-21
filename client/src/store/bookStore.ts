import create from 'zustand';
import axios from 'axios';

interface Book {
  id: string;
  imageUrl: string;
  title: string;
  author: string;
  price: string;
  category?: string[];
  rating: number;
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
  fetchBooks: () => Promise<void>;
}

export const useBookStore = create<BookStore>((set) => ({
  books: [],
  selectedCategory: 'Graphic Novels & Comics',
  selectedRating: 4,
  currentPage: 1,
  booksPerPage: 6,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedRating: (rating) => set({ selectedRating: rating }),
  setCurrentPage: (page) => set({ currentPage: page }),
  selectedBook: null,
  setSelectedBook: (book) => set({ selectedBook: book }),
  fetchBooks: async () => {
    try {
      const response = await axios.get<Book[]>('http://localhost:5149/api/Books');
      set({ books: response.data });
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  },
}));