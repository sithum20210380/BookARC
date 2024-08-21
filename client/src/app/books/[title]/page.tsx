'use client';

import React from 'react';
import Image from 'next/image';
import { Book, useBookStore } from '@/store/bookStore';
import { useCartStore } from '@/store/cartStore';
import { Tabs, rem } from '@mantine/core';
import { useRouter } from 'next/navigation';
import BookCard from '@/components/Home/bookCard/page';

const BookDetails = () => {
    const selectedBook = useBookStore((state) => state.selectedBook);
    const books = useBookStore((state) => state.books);
    const addToCart = useCartStore((state) => state.addToCart) as unknown as (book: Book) => void;
    const router = useRouter();

    if (!selectedBook) {
        return <div className="container mx-auto p-8 ">No book selected.</div>;
    }

    // Filter out the selected book and pick 4 related books
    const relatedBooks = books
        .filter(book => book.id !== selectedBook.id)
        .slice(0, 4);

    const handleAddToCart = () => {
        //addToCart(selectedBook);
        router.push('/cart');
    };

    return (
        <div className="container mx-auto p-8">
            <span className="text-sm text-gray-600 flex mb-8">
                <span className='mr-2'>
                    <Image src="/home.png" alt="home" width={20} height={20} />
                </span>
                Home / Shop Page /<span className='font-semibold ml-1'>{selectedBook.title}</span>
            </span>
            <div className="flex flex-col md:flex-row gap-8">
                <div className=" bg-neutral-100 pr-20 pl-20 pt-10 pb-10 rounded-lg">
                    <Image
                        src={selectedBook.imageUrl}
                        alt={selectedBook.title}
                        width={250}
                        height={200}
                        className="object-contain rounded"
                    />
                </div>
                <div className="md:w-2/3 flex flex-col gap-2">
                    <h1 className="text-3xl font-bold mb-2">{selectedBook.title}</h1>
                    <p className="text-xl text-gray-600 mb-4">By {selectedBook.author}</p>
                    <p className="text-sm text-gray-600 mb-4">Published: {selectedBook.publishedDate}</p>
                    <p className="text-2xl text-green-600 font-bold mb-4">{selectedBook.price}</p>
                    <div className="flex items-center mb-4">
                        <span className="text-orange-400 text-xl">{'★'.repeat(selectedBook.rating)}</span>
                        <span className="text-gray-400 text-xl">{'★'.repeat(5 - selectedBook.rating)}</span>
                    </div>
                    <div>
                        <p className="text-gray-600 mb-4">
                            Category:
                            <span className='text-black rounded-full px-3 py-1 ml-2 inline-block'>
                                {selectedBook.category?.join(', ')}
                            </span>
                        </p>
                    </div>
                    <div>
                        <button className="bg-green-500 text-sm text-black px-4 py-2 rounded-md mr-2">Buy now</button>
                        <button className="bg-neutral-200 text-sm text-black px-4 py-2 rounded-md" onClick={handleAddToCart}>Add to cart</button>
                    </div>
                    <div className='text-sm text-gray-500 mt-6'>
                        Life time Access
                    </div>
                    <div className='text-sm text-gray-500 mt-6 flex gap-2 items-center'>
                        Share:
                        <span>
                            <Image src="/fb.png" alt="facebook" width={25} height={20} className='rounded-full border border-gray-300 p-1' />
                        </span>
                        <span>
                            <Image src="/insta.png" alt="facebook" width={25} height={20} className='rounded-full border border-gray-300 p-1' />
                        </span>
                        <span>
                            <Image src="/twitter.png" alt="facebook" width={25} height={20} className='rounded-full border border-gray-300 p-1' />
                        </span>

                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <Tabs defaultValue="Description">
                    <Tabs.List className='mb-5'>
                        <Tabs.Tab value="Description" >
                            Description
                        </Tabs.Tab>
                        <Tabs.Tab value="Additional Info" >
                            Additional Info
                        </Tabs.Tab>
                        <Tabs.Tab value="Reviews" >
                            Reviews
                        </Tabs.Tab>
                        <Tabs.Tab value="Video" >
                            Video
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="Description" className='text-sm text-gray-500 text-justify'>
                        {selectedBook.description}
                    </Tabs.Panel>

                    <Tabs.Panel value="Additional Info">
                        Messages tab content
                    </Tabs.Panel>

                    <Tabs.Panel value="Reviews">
                        Settings tab content
                    </Tabs.Panel>

                    <Tabs.Panel value="Video">
                        Video tab content
                    </Tabs.Panel>
                </Tabs>
            </div>

            <div>
                <p className='text-base font-medium mt-10 mb-5'>Related Products</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {relatedBooks.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookDetails;