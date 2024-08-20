"use client";
import { RangeSlider } from '@mantine/core';
import { useBookStore, Book } from '@/store/bookStore';
import { useRangeStore } from '@/store/range';
import BookCard from '@/components/Home/bookCard/page';

const BookList: React.FC = () => {
    const {
        books,
        selectedCategory,
        selectedRating,
        setSelectedCategory,
        setSelectedRating,
        currentPage,
        booksPerPage,
        setCurrentPage,
    } = useBookStore();
    const { range, setRange } = useRangeStore();

    const handleRangeChange = (newRange: [number, number]) => {
        setRange(newRange);
    };

    const filteredBooks = books.filter(book => (selectedRating ? book.rating === selectedRating : true));
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

    return (
        <div className="container mx-auto pt-10 pb-10">
            <div className="flex">
                <div className="w-1/4 bg-white p-4 text-black">
                    <h2 className="text-base font-medium">Books Category</h2>
                    <div className="flex flex-col mt-4 gap-4 text-sm">
                        <label>
                            <input
                                type="checkbox"
                                className='mr-2'
                                checked={selectedCategory === 'Fiction'}
                                onChange={() => setSelectedCategory('Fiction')}
                            />
                            Fiction
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                className='mr-2'
                                checked={selectedCategory === 'Non-Fiction'}
                                onChange={() => setSelectedCategory('Non-Fiction')}
                            />
                            Non-Fiction
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                className='mr-2'
                                checked={selectedCategory === 'Childrens Books'}
                                onChange={() => setSelectedCategory('Childrens Books')}
                            />
                            Childrens Books
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                className='mr-2'
                                checked={selectedCategory === 'Educational & Textbooks'}
                                onChange={() => setSelectedCategory('Educational & Textbooks')}
                            />
                            Educational & Textbooks
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                className='mr-2'
                                checked={selectedCategory === 'Graphic Novels & Comics'}
                                onChange={() => setSelectedCategory('Graphic Novels & Comics')}
                            />
                            Graphic Novels & Comics
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                className='mr-2'
                                checked={selectedCategory === 'Religion & Spirituality'}
                                onChange={() => setSelectedCategory('Religion & Spirituality')}
                            />
                            Religion & Spirituality
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                className='mr-2'
                                checked={selectedCategory === 'Arts & Photography'}
                                onChange={() => setSelectedCategory('Arts & Photography')}
                            />
                            Arts & Photography
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                className='mr-2'
                                checked={selectedCategory === 'Special Collection'}
                                onChange={() => setSelectedCategory('Special Collection')}
                            />
                            Special Collection
                        </label>
                    </div>
                    <h2 className="text-base font-medium mt-8">Books Rating</h2>
                    <div className="flex flex-col mt-4 text-sm gap-4">
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <label key={rating}>
                                <input
                                    type="checkbox"
                                    className='mr-2 bg-green-500'
                                    checked={selectedRating === rating}
                                    onChange={() => setSelectedRating(rating)}
                                />
                                <span className="text-orange-400">{'★'.repeat(rating)}</span>
                                <span className="text-gray-400">{'★'.repeat(5 - rating)}</span>
                            </label>
                        ))}
                    </div>
                    <h2 className="text-base font-medium mt-8">Price Range</h2>
                    <div className="flex flex-col mt-4 text-sm gap-4 text-black">
                        <RangeSlider color="green" minRange={0} min={0} max={3000} step={100} defaultValue={[0, 1500]} onChange={handleRangeChange} />
                        <div className="flex justify-between mt-2">
                            <span className='text-gray-500 font-medium'>{range[0]}$ - {range[1]}$</span>
                        </div>
                    </div>
                </div>

                <div className="w-3/4 grid grid-cols-3 gap-4">
                    {currentBooks
                        .filter(book => (selectedRating ? book.rating === selectedRating : true))
                        .map((book, index) => (
                            <BookCard key={index} book={book} />
                        ))}
                </div>

            </div>
            {/* Pagination Component */}
            <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-4 py-2 mx-1 rounded ${currentPage === i + 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BookList;