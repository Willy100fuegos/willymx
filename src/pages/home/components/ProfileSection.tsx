import { useTheme } from '../../../context/ThemeContext';

const ProfileSection = () => {
  const { theme } = useTheme();

  return (
    <section id="profile" className={`py-24 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-20 animate-glow"></div>
            <div className="relative">
              <img 
                src="https://imgfz.com/i/JHF14ig.jpeg" 
                alt="William Velázquez Valenzuela" 
                className="w-full h-auto rounded-3xl shadow-2xl ring-4 ring-blue-500/30"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-slide-in-right">
            <h2 className={`text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Sobre <span className="gradient-text">Mí</span>
            </h2>

            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Con más de una década de experiencia en administración de sistemas, infraestructura y seguridad, me especializo en crear soluciones robustas y escalables que impulsan el crecimiento empresarial.
              </p>

              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Mi expertise abarca desde la gestión de infraestructuras complejas hasta la implementación de prácticas DevOps avanzadas, siempre enfocado en la seguridad, eficiencia y automatización.
              </p>

              <div className={`p-6 rounded-xl ${
                theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-100'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  Áreas de Especialización
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: 'ri-server-line', text: 'Infraestructura' },
                    { icon: 'ri-shield-check-line', text: 'Seguridad' },
                    { icon: 'ri-code-box-line', text: 'DevOps' },
                    { icon: 'ri-cloud-line', text: 'Cloud Computing' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 group cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white group-hover:scale-110 transition-transform">
                        <i className={`${item.icon} text-xl`}></i>
                      </div>
                      <span className={`font-medium ${
                        theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://github.com/Willy100fuegos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 whitespace-nowrap ${
                    theme === 'dark'
                      ? 'bg-slate-800 hover:bg-slate-700 text-white'
                      : 'bg-white hover:bg-slate-100 text-slate-900 border-2 border-slate-200'
                  }`}
                >
                  <i className="ri-github-line"></i>
                  <span>Ver Proyectos</span>
                </a>
                <a 
                  href="https://wa.me/5219211453200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center space-x-2 whitespace-nowrap"
                >
                  <i className="ri-whatsapp-line"></i>
                  <span>Contactar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
