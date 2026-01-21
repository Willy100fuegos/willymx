import { useTheme } from '../../../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: 'ri-github-fill', url: 'https://github.com/Willy100fuegos/', label: 'GitHub' },
    { icon: 'ri-linkedin-fill', url: 'https://www.linkedin.com/in/willymx/', label: 'LinkedIn' },
    { icon: 'ri-facebook-fill', url: 'https://www.facebook.com/willy100fuegos', label: 'Facebook' },
    { icon: 'ri-instagram-fill', url: 'https://www.instagram.com/willycienfuegos/', label: 'Instagram' },
    { icon: 'ri-mail-fill', url: 'mailto:hola@willy.mx', label: 'Email' }
  ];

  const quickLinks = [
    { text: 'Perfil', href: '#profile' },
    { text: 'Habilidades', href: '#skills' },
    { text: 'Tech Stack', href: '#tech' },
    { text: 'Proyectos', href: '#projects' },
    { text: 'Servicios', href: '#services' }
  ];

  return (
    <footer className={`relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-slate-900 to-slate-950' 
        : 'bg-gradient-to-b from-slate-50 to-slate-100'
    }`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 animate-slide-in-left">
            <div className="mb-6">
              <img 
                src="https://imgfz.com/i/c32x7bk.png" 
                alt="Willy Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            <p className={`mb-6 leading-relaxed ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Especialista en infraestructura, seguridad y automatización. Construyendo soluciones robustas y escalables para el futuro digital.
            </p>

            <div className="flex items-center space-x-2 mb-4">
              <i className={`ri-map-pin-line ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}></i>
              <span className={`text-sm ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Coatzacoalcos, Veracruz, México
              </span>
            </div>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 ${
                    theme === 'dark'
                      ? 'bg-slate-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 text-slate-400 hover:text-white'
                      : 'bg-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 text-slate-600 hover:text-white border border-slate-200'
                  }`}
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h4 className={`text-lg font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`inline-flex items-center space-x-2 transition-all duration-300 hover:translate-x-2 ${
                      theme === 'dark'
                        ? 'text-slate-400 hover:text-blue-400'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    <i className="ri-arrow-right-s-line"></i>
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h4 className={`text-lg font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hola@willy.mx"
                  className={`flex items-start space-x-3 transition-colors ${
                    theme === 'dark'
                      ? 'text-slate-400 hover:text-blue-400'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  <i className="ri-mail-line mt-1"></i>
                  <span className="break-all">hola@willy.mx</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Willy100fuegos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 transition-colors ${
                    theme === 'dark'
                      ? 'text-slate-400 hover:text-blue-400'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  <i className="ri-github-line"></i>
                  <span>@Willy100fuegos</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/willymx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 transition-colors ${
                    theme === 'dark'
                      ? 'text-slate-400 hover:text-blue-400'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  <i className="ri-linkedin-line"></i>
                  <span>willymx</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${
          theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${
              theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
            }`}>
              © {new Date().getFullYear()} William Velázquez Valenzuela. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-blue-500/50'
            : 'bg-white text-slate-900 hover:shadow-blue-500/30 border-2 border-slate-200'
        }`}
        aria-label="Scroll to top"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </button>
    </footer>
  );
};

export default Footer;
