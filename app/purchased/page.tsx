"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cart-store';

const PurchasedPage = () => {
  const router = useRouter();
  const { clearCart } = useCartStore();

  const handleRedirect = () => {
    router.push('/products');
  };

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-black-600 mb-4 text-center">
        Payment Successful!
      </h1>
      <h3 className="text-xl sm:text-2xl font-bold text-green-600 mb-4 text-center">
        Thank You for Your Purchase!
      </h3>
      <p className="text-base sm:text-lg text-gray-700 mb-6 text-center">
        We appreciate you!
      </p>
      <button
        onClick={handleRedirect}
        className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default PurchasedPage;