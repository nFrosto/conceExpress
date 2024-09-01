import React, { useState, useEffect } from 'react';

import '../styles/global.css';



const ProductGrid = () => (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
    <style jsx>{`
    .neon-hover {
        transition: box-shadow 0.3s ease-in-out;
    }
    .neon-hover:hover {
        box-shadow: 0 4px 10px -2px rgba(255, 153, 0, 0.6);
    }
    `}</style>
    {[...Array(6)].map((_, i) => (
    <div key={i} className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 neon-hover">
        <div className="bg-gray-200 h-48 mb-4 rounded"></div>
        <h3 className="font-bold text-lg mb-2">Producto {i + 1}</h3>
        <p className="text-orange-500 font-bold text-xl mb-4">$99.99</p>
        <button className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
        Agregar al carrito
        </button>
    </div>
    ))}
</div>
);
  
  

const Footer = () => (
  <footer className="bg-black text-white p-6 mt-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <p>&copy; 2024 Mi Tienda. Todos los derechos reservados.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-orange-500">Términos</a>
        <a href="#" className="hover:text-orange-500">Privacidad</a>
        <a href="#" className="hover:text-orange-500">Contacto</a>
      </div>
    </div>
  </footer>
);

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-20">
        <ProductGrid />
        {children}
      </main>
      <Footer />
    </div>
  );
}
