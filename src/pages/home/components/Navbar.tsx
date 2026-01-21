import { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? theme === 'dark' 
          ? 'glass-effect shadow-2xl' 
          : 'glass-effect-light'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center group cursor-pointer animate-slide-in-left">
            <img 
              src="https://imgfz.com/i/c32x7bk.png" 
              alt="Willy Logo" 
              className="h-12 w-auto transition-all group-hover:scale-105"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8 animate-fade-in">
            <button 
              onClick={() => scrollToSection('profile')}
              className={`font-medium transition-all duration-300 hover:scale-110 ${
                theme === 'dark' ? 'text-slate-300 hover:text-blue-400' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Perfil
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`font-medium transition-all duration-300 hover:scale-110 ${
                theme === 'dark' ? 'text-slate-300 hover:text-blue-400' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Habilidades
            </button>
            <button 
              onClick={() => scrollToSection('tech')}
              className={`font-medium transition-all duration-300 hover:scale-110 ${
                theme === 'dark' ? 'text-slate-300 hover:text-blue-400' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Tech Stack
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`font-medium transition-all duration-300 hover:scale-110 ${
                theme === 'dark' ? 'text-slate-300 hover:text-blue-400' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-all duration-300 hover:scale-110 ${
                theme === 'dark' ? 'text-slate-300 hover:text-blue-400' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Servicios
            </button>
          </div>

          <div className="flex items-center space-x-4 animate-slide-in-right">
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                theme === 'dark' 
                  ? 'bg-slate-800/50 hover:bg-slate-700/50 text-yellow-400' 
                  : 'bg-slate-200/50 hover:bg-slate-300/50 text-slate-800'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <i className="ri-sun-line text-2xl"></i>
              ) : (
                <i className="ri-moon-line text-2xl"></i>
              )}
            </button>
            
            <a 
              href="mailto:hola@willy.mx"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
