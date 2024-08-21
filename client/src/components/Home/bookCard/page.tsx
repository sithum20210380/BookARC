import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useBookStore } from '@/store/bookStore';

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

interface BookCardProps {
    book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    const router = useRouter();
    const { setSelectedBook, fetchBooks, books } = useBookStore(state => state);

    useEffect(() => {
        if (books.length === 0) {
            fetchBooks();
        }
    }, [books, fetchBooks]);

    const handleClick = () => {
        setSelectedBook(book);
        router.push(`/books/${book.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="bg-white p-0 rounded-lg shadow hover:outline hover:outline-green-500 cursor-pointer">
            <div className="bg-neutral-100 p-8">
                <Image src={book?.imageUrl} alt={book?.title} width={200} height={200} className="w-full h-48 object-contain rounded" />
            </div>
            <h3 className="text-black font-normal text-lg mt-3 pl-5">{book?.title}</h3>
            <p className="text-gray-600 p-5">By {book?.author}</p>
            <p className="text-green-600 font-bold pl-5">{book?.price}</p>
            <div className="flex items-center mt-1 mb-5 pl-5">
                <span className="text-orange-400 text-sm">{'★'.repeat(book?.rating)}</span>
                <span className="text-gray-400 text-sm">{'★'.repeat(5 - book?.rating)}</span>
            </div>
        </div>
    );
};

export default BookCard;