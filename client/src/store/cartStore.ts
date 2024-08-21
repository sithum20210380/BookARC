"use client";
import { create } from 'zustand';

interface Book {
    id: number;
    title: string;
    author: string;
    imageUrl: string;
    price: string;
    quantity: number;
}

interface CartStore {
    cartItems: Book[];
    addToCart: (book: Book) => void;
    removeFromCart: (id: number) => void; 
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
    cartItems: [
        {
            id: 1,
            title: 'All The Light We Cannot See',
            author: 'Anthony Doerr',
            imageUrl: '/allTheLight.jpg',
            price: '$24.99',
            quantity: 1, 
        },
        {
            id: 2,
            title: 'Where The Crawdads Sing',
            author: 'Delia Owens',
            imageUrl: '/crawdadSing.jpg',
            price: '$34.99',
            quantity: 1,
        },
    ],
    addToCart: (book) => set((state) => {
        const existingItem = state.cartItems.find(item => item.id === book.id);
        if (existingItem) {
            return { cartItems: state.cartItems.map(item =>
                item.id === book.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ) };
        }
        return { cartItems: [...state.cartItems, { ...book, quantity: 1 }] };
    }),
    removeFromCart: (id) => set((state) => ({
        cartItems: state.cartItems.filter(item => item.id !== id)
    })),
    updateQuantity: (id, quantity) => set((state) => ({
        cartItems: state.cartItems.map(item =>
            item.id === id
                ? { ...item, quantity: Math.max(1, quantity) }
                : item
        )
    })),
    clearCart: () => set({ cartItems: [] }),
}));
