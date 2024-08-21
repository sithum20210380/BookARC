import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className="p-5 bg-white shadow ">
            <div className="container mx-auto px-4 flex items-center justify-between ">
                <Link href="/" className="flex items-center cursor-pointer">
                    <span className="text-2xl font-bold text-black">BOOK</span>
                    <span className="bg-green-500 text-black rounded-full px-2 ml-2">ARC</span>
                    <span className="border-l border-gray-300 mx-2"></span>
                    <span className="text-gray-600">Category</span>
                </Link>
                <div className="flex items-center space-x-4 text-sm gap-4">
                    <Link href="/" className="text-gray-600 hover:text-green-500">Home</Link>
                    <Link href="/shop" className="text-gray-600 hover:text-green-500">Shop</Link>
                    <Link href="/about" className="text-gray-600 hover:text-green-500">About</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-green-500">Contact</Link>
                    <Image src="/search.png" alt="search" width={20} height={20} />
                    <Link href="/cart">
                        <Image src="/cart.png" alt="cart" width={20} height={20} />
                    </Link>
                    <button className="border border-gray-300 rounded-xl px-4 py-2 text-black bg-gray-200">Sign In</button>
                    <button className="bg-green-500 text-black rounded-xl px-4 py-2">Register</button>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;