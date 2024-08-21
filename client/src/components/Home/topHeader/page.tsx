import React from 'react';
import Image from 'next/image';

const TopHeader: React.FC = () => {
    return (
        <div className="container mx-auto p-12 mt-8 rounded-xl flex items-center bg-white justify-between flex-col gap-6 bg-zinc-100">
            <div>
                <span className="text-sm text-gray-600 flex">
                    <span className='mr-2'>
                        <Image src="/home.png" alt="home" width={20} height={20} />
                    </span>
                    Home / Shop Page
                </span>
            </div>
            <div>
                <span className="text-4xl font-medium text-black">Read and add your</span>
                <span className="text-4xl font-medium text-green-400 ml-2">insight</span>
            </div>
            <div>
                <span className="text-sm text-black">Find Your Favourite Book And Read It Here For Free</span>
            </div>
        </div>
    );
};

export default TopHeader;