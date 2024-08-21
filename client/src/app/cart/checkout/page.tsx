"use client";
import React from 'react';
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import { Input, TextInput, Radio, Group } from '@mantine/core';

const CheckoutPage: React.FC = () => {
    const { cartItems, clearCart } = useCartStore((state) => ({
        cartItems: state.cartItems,
        clearCart: state.clearCart,
    }));

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    };

    if (cartItems.length === 0) {
        return <div className="container mx-auto p-8">Your cart is empty.</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <span className="text-sm text-gray-600 flex mb-4">
                <span className='mr-2'>
                    <Image src="/home.png" alt="home" width={20} height={20} />
                </span>
                Home / Cart Page / <span className='font-semibold ml-1'>Checkout</span>
            </span>
            <h1 className="text-xl font-bold mb-8">Pay Now!</h1>
            <div className='flex flex-col md:flex-row gap-6'>
                <div className='flex-1 mb-5'>
                    <div>
                        <p className='font-medium mb-3'>Billing Details</p>
                        <div className="flex flex-col gap-8">
                            <div className='flex gap-5'>
                                <TextInput style={{ width: 320 }} label="First Name" placeholder="First Name" />
                                <TextInput style={{ width: 320 }} label="Last Name" placeholder="Last Name" />
                            </div>
                            <div>
                                <TextInput style={{ width: 660 }} label="Email Address" placeholder="Email Address" />
                            </div>
                            <div className='flex gap-5'>
                                <TextInput style={{ width: 320 }} label="Mobile Number" placeholder="+94 00 000 0000" />
                                <TextInput style={{ width: 320 }} label="Country" placeholder="SriLanka" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <p className='font-medium mb-3'>Payment Method</p>
                        <div className='mt-6 mb-6'>
                            <Radio.Group>
                                <Group mt="xs">
                                    <Radio value="Card" label="Card" />
                                    <Radio value="Bank" label="Bank" />
                                    <Radio value="Transfer" label="Transfer" />
                                </Group>
                            </Radio.Group>
                        </div>
                        <div className="flex flex-col gap-8 bg-stone-100 p-5 rounded-lg" style={{ width: '665px' }}>
                            <div>
                                <TextInput label="Card Number" placeholder="1234 5678 9101 1121" />
                            </div>
                            <div className='flex gap-6'>
                                <TextInput style={{ width: 310 }} label="Expiry Date" placeholder="MM/YY" />
                                <TextInput style={{ width: 310 }} label="CVV" placeholder="123" />
                            </div>
                            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded" style={{ width: '625px' }}>Pay ${getTotal().toFixed(2)}</button>
                            <p className='text-xs text-stone-500'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex-1 bg-stone-100 rounded-lg p-10 '>
                        <p className='font-medium mb-3'>Order Summary</p>
                        <div>
                            {cartItems.map((item) => (
                                <div className='flex items-center gap-4 border-b pb-4 mb-4 justify-between'>
                                    <div className='flex items-center'>
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.title}
                                            width={50}
                                            height={70}
                                            className="object-contain"
                                        />
                                        <span className='ml-5'>{item.title}</span>
                                    </div>
                                    <div className='justify-between'>
                                        <span>{item.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center gap-4 mt-5 border-b pb-5'>
                            <Input style={{ width: 300 }} placeholder="Coupon Code" />
                            <button className="bg-green-500 text-white text-sm px-4 py-2 rounded">Apply</button>
                        </div>
                        <div className='flex justify-between items-center border-b pt-5 pb-5 gap-10'>
                            <p className="text-base font-medium text-gray-500">Subtotal:</p>
                            <p>${getTotal().toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between items-center pt-5 pb-5 gap-10'>
                            <p className="text-base font-medium">Total:</p>
                            <p className='text-green-600'>${getTotal().toFixed(2)}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckoutPage;
