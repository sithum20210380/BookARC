// hooks/useFetchBooks.ts
import { useEffect, useState } from 'react';

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

export const useFetchBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:5149/api/Books');
                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }
                const data = await response.json();
                setBooks(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return { books, loading, error };
};
