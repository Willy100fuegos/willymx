import { useTheme } from '../../../context/ThemeContext';
import { servicesData } from '../../../mocks/services';

const ServicesSection = () => {
  const { theme } = useTheme();

  const serviceIcons = [
    'ri-server-line',
    'ri-shield-check-line',
    'ri-cloud-line',
    'ri-database-2-line',
    'ri-terminal-box-line',
    'ri-lock-line',
    'ri-git-branch-line',
    'ri-settings-3-line',
    'ri-speed-line'
  ];

  const gradients = [
    'from-blue-500 to-cyan-400',
    'from-purple-500 to-pink-400',
    'from-orange-500 to-red-400',
    'from-green-500 to-emerald-400',
    'from-cyan-500 to-blue-400',
    'from-pink-500 to-rose-400',
    'from-indigo-500 to-purple-400',
    'from-yellow-500 to-orange-400',
    'from-teal-500 to-cyan-400'
  ];

  return (
    <section id="services" className={`py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold rounded-full">
              Servicios
            </span>
          </div>
          <h2 className={`text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Servicios <span className="gradient-text">Especializados</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Soluciones profesionales en administración de sistemas y seguridad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-500 card-hover animate-slide-up ${
                theme === 'dark' ? 'glass-effect' : 'glass-effect-light'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                <div className={`relative w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r ${gradients[index]} text-white group-hover:scale-110 transition-transform`}>
                  <i className={`${serviceIcons[index]} text-3xl`}></i>
                </div>
              </div>

              <h3 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {service.title}
              </h3>

              <p className={`text-sm leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <a 
            href="mailto:hola@willy.mx"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-mail-line text-xl"></i>
            <span>Solicitar Cotización</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
