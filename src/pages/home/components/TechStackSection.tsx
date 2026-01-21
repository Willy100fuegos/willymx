import { useTheme } from '../../../context/ThemeContext';

const TechStackSection = () => {
  const { theme } = useTheme();

  const techCategories = [
    {
      title: 'Sistemas Operativos',
      icon: 'ri-computer-line',
      color: 'from-blue-500 to-cyan-400',
      techs: [
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'Ubuntu', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg' },
        { name: 'Debian', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg' },
        { name: 'CentOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-original.svg' }
      ]
    },
    {
      title: 'Infraestructura & Cloud',
      icon: 'ri-cloud-line',
      color: 'from-cyan-500 to-blue-400',
      techs: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' }
      ]
    },
    {
      title: 'Desarrollo',
      icon: 'ri-code-box-line',
      color: 'from-purple-500 to-pink-400',
      techs: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
      ]
    },
    {
      title: 'Herramientas & Monitoreo',
      icon: 'ri-tools-line',
      color: 'from-orange-500 to-red-400',
      techs: [
        { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
        { name: 'Apache', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
        { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
        { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' }
      ]
    }
  ];

  return (
    <section id="tech" className={`py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold rounded-full">
              Tecnologías
            </span>
          </div>
          <h2 className={`text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Herramientas y tecnologías que utilizo para crear soluciones robustas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, catIndex) => (
            <div 
              key={catIndex}
              className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 card-hover animate-slide-up ${
                theme === 'dark' ? 'glass-effect' : 'glass-effect-light'
              }`}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                  <i className={`${category.icon} text-2xl`}></i>
                </div>
                <h3 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {category.techs.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="group flex flex-col items-center"
                  >
                    <div className={`w-16 h-16 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg mb-2 ${
                      theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'
                    }`}>
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className={`text-xs font-medium text-center ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {tech.name}
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

export default TechStackSection;
