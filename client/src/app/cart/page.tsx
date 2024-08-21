"use client";
import React from 'react';
import { useCartStore } from '@/store/cartStore';
import TopHeader from '@/components/Home/topHeader/page';
import Image from 'next/image';
import { Table, Button, Group, Input } from '@mantine/core';

const CartPage: React.FC = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCartStore((state) => ({
        cartItems: state.cartItems,
        updateQuantity: state.updateQuantity,
        removeFromCart: state.removeFromCart,
    }));

    const handleQuantityChange = (id: number, amount: number) => {
        updateQuantity(id, amount);
    };

    const handleRemove = (id: number) => {
        removeFromCart(id);
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    };

    if (cartItems.length === 0) {
        return <div className="container mx-auto p-8">Your cart is empty.</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <TopHeader />
            <div className='flex justify-between mt-10 mb-10'>
                <div className='flex flex-col'>
                    <div>
                        <Table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Product</th>
                                    <th className="py-2 px-4 border-b">Price</th>
                                    <th className="py-2 px-4 border-b">Quantity</th>
                                    <th className="py-2 px-4 border-b">Total</th>
                                    <th className="py-2 px-4 border-b">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="py-2 px-4 border-b flex items-center">
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.title}
                                                width={50}
                                                height={70}
                                                className="object-contain"
                                            />
                                            <span className="ml-4">{item.title}</span>
                                        </td>
                                        <td className="py-2 px-4 border-b">{item.price}</td>
                                        <td className="border-b">
                                            <Group>
                                                <button
                                                    className='ml-4'
                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                                    +
                                                </button>
                                            </Group>
                                        </td>
                                        <td className="py-2 px-4 border-b">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">
                                                <Image
                                                    src="/trash.png"
                                                    alt="Remove"
                                                    width={20}
                                                    height={20}
                                                    className="object-contain"
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className='flex items-center gap-4 mt-5'>
                        <Input placeholder="Coupon Code" />
                        <button className="bg-green-500 text-white text-sm px-4 py-2 rounded">Apply</button>
                    </div>

                </div>
                <div>
                    <div className="flex flex-col bg-gray-100 p-5 rounded-lg">
                        <div className='flex justify-between items-center border-b pb-5 gap-10'>
                            <p className="text-base font-medium text-gray-500">Subtotal:</p>
                            <p>${getTotal().toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between items-center mt-5'>
                            <p className="text-base font-medium">Total:</p>
                            <p className='text-green-600'>${getTotal().toFixed(2)}</p>
                        </div>
                        <div className='flex gap-3 mt-5 mb-4'>
                            <Image src="/tick.png" alt="Secure" width={15} height={20} />
                            <p className="text-gray-600 text-xs">Shipping & taxes calculated at checkout</p>
                        </div>

                        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Proceed to checkout</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CartPage;
