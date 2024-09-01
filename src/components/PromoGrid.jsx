import React from 'react';

const PromoGrid = () => (
  <div className="w-[90%] mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Tarjeta de promoción 1 */}
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img
        src="/images/monitores.jpg"
        alt="Monitores"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <h3 className="text-white text-2xl font-bold mb-2">Todo en Monitores</h3>
        <span className="bg-purple-600 text-white text-sm font-semibold px-2 py-1 rounded">desde: $65.990</span>
      </div>
    </div>

    {/* Tarjeta de promoción 2 */}
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img
        src="/images/hardware.jpg"
        alt="Hardware"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <h3 className="text-white text-2xl font-bold mb-2">Lo mejor en Hardware</h3>
        <span className="bg-teal-500 text-white text-sm font-semibold px-2 py-1 rounded">desde: $3.990</span>
      </div>
    </div>

    {/* Tarjeta de promoción 3 */}
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img
        src="/images/parlantes.jpg"
        alt="Parlantes"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <h3 className="text-white text-2xl font-bold mb-2">Parlantes Portátiles</h3>
        <span className="bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded">desde: $5.990</span>
      </div>
    </div>


  </div>
);

export default PromoGrid;
