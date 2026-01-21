import { useEffect, useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';

const HeroSection = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]' 
          : 'bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)]'
      } bg-[size:4rem_4rem]`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 animate-slide-up ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            <span className="gradient-text">William Velázquez Valenzuela</span>
          </h1>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className={`text-2xl md:text-3xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Systems Administrator & DevOps Engineer
            </p>
            <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Especialista en infraestructura, seguridad y automatización. Construyendo soluciones robustas y escalables.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://github.com/Willy100fuegos/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center space-x-2 whitespace-nowrap ${
                theme === 'dark'
                  ? 'bg-slate-800 hover:bg-slate-700 text-white hover:shadow-blue-500/50'
                  : 'bg-white hover:bg-slate-100 text-slate-900 hover:shadow-blue-500/30 border-2 border-slate-200'
              }`}
            >
              <i className="ri-github-fill text-xl"></i>
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/willymx/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 flex items-center space-x-2 whitespace-nowrap"
            >
              <i className="ri-linkedin-fill text-xl"></i>
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:hola@willy.mx"
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center space-x-2 whitespace-nowrap ${
                theme === 'dark'
                  ? 'bg-slate-800 hover:bg-slate-700 text-white hover:shadow-blue-500/50'
                  : 'bg-white hover:bg-slate-100 text-slate-900 hover:shadow-blue-500/30 border-2 border-slate-200'
              }`}
            >
              <i className="ri-mail-line text-xl"></i>
              <span>Email</span>
            </a>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}>
              📍 Coatzacoalcos, Veracruz, México
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className={`ri-arrow-down-line text-3xl ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`}></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
