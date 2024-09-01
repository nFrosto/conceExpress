import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

const Header = () => (
  <header className="sticky top-0 z-50 bg-white">
    {/* Banner superior */}
    <div className="w-full bg-orange-500 text-white text-base py-3 text-center">
      ¡Retira GRATIS tus compras en nuestra tienda! Además recuerda que villita es entero weko
    </div>
    
    {/* Barra principal */}
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-orange-500">ConceExpress</h1>
        
        {/* Barra de búsqueda */}
        <div className="flex-grow max-w-2xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Hora de encontrar tus productos al mejor precio :)"
              className="w-full py-2 px-4 pr-10 rounded-full bg-white text-black text-lg"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Search className="text-orange-500" size={24} />
            </button>
          </div>
        </div>
        
        {/* Iconos de usuario y carrito */}
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center text-base hover:text-orange-500">
            <User size={24} className="mr-1" />
            Iniciar sesión
          </a>
          <a href="#" className="text-orange-500">
            <ShoppingCart size={28} />
          </a>
        </div>
      </div>
    </div>
    
    {/* Barra de navegación */}
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6 py-4 text-base">
          {['Gaming y Streaming', 'Computación', 'Componentes', 'Conectividad y Redes', 'Hogar y Oficina', 'Audio y Video', 'Otras Categorías'].map((category) => (
            <li key={category}><a href="#" className="text-gray-700 hover:text-orange-500">{category}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
