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

  export default Footer;
  