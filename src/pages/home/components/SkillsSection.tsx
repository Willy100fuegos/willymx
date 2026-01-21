import { useTheme } from '../../../context/ThemeContext';

const SkillsSection = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: 'Gestión de Sistemas',
      icon: 'ri-server-line',
      color: 'from-blue-500 to-cyan-400',
      skills: [
        { name: 'Administración de Servidores Linux', icon: 'ri-terminal-box-line' },
        { name: 'Virtualización (VMware, Proxmox)', icon: 'ri-stack-line' },
        { name: 'Gestión de Redes', icon: 'ri-router-line' },
        { name: 'Monitoreo y Logging', icon: 'ri-line-chart-line' }
      ]
    },
    {
      title: 'Desarrollo & DevOps',
      icon: 'ri-code-s-slash-line',
      color: 'from-cyan-500 to-teal-400',
      skills: [
        { name: 'CI/CD Pipelines', icon: 'ri-git-branch-line' },
        { name: 'Docker & Kubernetes', icon: 'ri-ship-line' },
        { name: 'Infrastructure as Code', icon: 'ri-file-code-line' },
        { name: 'Scripting (Bash, Python)', icon: 'ri-braces-line' }
      ]
    },
    {
      title: 'Seguridad & Backup',
      icon: 'ri-shield-check-line',
      color: 'from-teal-500 to-emerald-400',
      skills: [
        { name: 'Seguridad de Infraestructura', icon: 'ri-lock-line' },
        { name: 'Backup y Recuperación', icon: 'ri-database-2-line' },
        { name: 'Firewall y VPN', icon: 'ri-shield-line' },
        { name: 'Auditoría de Sistemas', icon: 'ri-search-eye-line' }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-24 ${
      theme === 'dark' ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Mis <span className="gradient-text">Competencias</span>
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Habilidades técnicas y experiencia profesional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`group relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 animate-slide-up ${
                theme === 'dark'
                  ? 'bg-slate-900/50 hover:bg-slate-900/80'
                  : 'bg-slate-50 hover:bg-white border-2 border-slate-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                  <i className={`${category.icon} text-3xl text-white`}></i>
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                      theme === 'dark'
                        ? 'hover:bg-slate-800'
                        : 'hover:bg-slate-100'
                    }`}
                  >
                    <div className={`w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r ${category.color} opacity-80`}>
                      <i className={`${skill.icon} text-white text-sm`}></i>
                    </div>
                    <span className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
