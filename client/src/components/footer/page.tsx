import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 pt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">

                    <div className="w-full md:w-1/4 mb-5">
                        <div className='flex items-center'>
                            <span className="text-2xl font-bold text-black">BOOK</span>
                            <span className="bg-green-500 text-black rounded-full px-2 ml-2">ARC</span>
                        </div>

                        <p className="text-sm mb-4">Subscribe Now!</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border border-gray-300 rounded-l px-3 py-2"
                            />
                            <button className="bg-green-500 text-white rounded-r px-4">
                                &#x2709;
                            </button>
                        </div>
                        <p className="mt-4 text-sm">Contact Info</p>
                        <p className="text-sm">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>

                    <div className="w-full md:w-1/4 mb-5">
                        <h3 className="text-md font-bold mb-2">Popular Categories</h3>
                        <ul className="space-y-3 text-sm">
                            <li>Graphic Novels & Comics</li>
                            <li>Religion & Spirituality</li>
                            <li>Arts & Photography</li>
                            <li>Educational & Textbooks</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 mb-5">
                        <h3 className="text-md font-bold mb-2">Customer Care</h3>
                        <ul className="space-y-3 text-sm">
                            <li>My Account</li>
                            <li>Discount</li>
                            <li>Returns</li>
                            <li>Orders History</li>
                            <li>Order Tracking</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 mb-5">
                        <h3 className="text-md font-bold mb-2">Quick Action</h3>
                        <ul className="space-y-3 text-sm">
                            <li>Authors</li>
                            <li>Books Compare</li>
                            <li>All Category</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>Powered by <span className="text-blue-500">Stripe</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
