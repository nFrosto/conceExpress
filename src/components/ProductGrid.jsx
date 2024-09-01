import React from 'react';
import '../styles/productGrid.css'; // Asegúrate de importar el archivo CSS

const ProductGrid = () => (
  <div className="w-[90%] mx-auto px-4">
    {/* Contenedor de la cuadrícula de productos */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 neon-hover"
        >
          <div className="bg-gray-200 h-48 mb-4 rounded"></div>
          <h3 className="font-bold text-lg mb-2">Producto {i + 1}</h3>
          <p className="text-orange-500 font-bold text-xl mb-4">$99.99</p>
          <button className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default ProductGrid;
