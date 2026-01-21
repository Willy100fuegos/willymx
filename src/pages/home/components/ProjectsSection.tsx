import { useTheme } from '../../../context/ThemeContext';
import { projectsData } from '../../../mocks/projects';

const ProjectsSection = () => {
  const { theme } = useTheme();

  return (
    <section id="projects" className={`py-24 relative overflow-hidden ${
      theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
    }`}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold rounded-full">
              Portfolio
            </span>
          </div>
          <h2 className={`text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Proyectos del <span className="gradient-text">Ecosistema</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Iniciativas y contribuciones al ecosistema tecnológico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl transition-all duration-500 card-hover animate-scale-in border ${project.borderColor} ${
                theme === 'dark' ? 'glass-effect' : 'glass-effect-light'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${project.iconColor} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                  <i className={`${project.icon} text-2xl ${project.iconColor}`}></i>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>

              <h3 className={`text-xl font-bold mb-3 group-hover:${project.hoverColor} transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {project.title}
              </h3>

              <p className={`mb-4 text-sm leading-relaxed ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {project.description}
              </p>

              <div className="flex items-center justify-between mt-6">
                <span className={`text-sm font-semibold ${project.buttonTextColor} group-hover:underline`}>
                  {project.buttonText}
                </span>
                <i className={`ri-arrow-right-line text-xl ${project.buttonTextColor} group-hover:translate-x-1 transition-transform`}></i>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <a 
            href="https://github.com/Willy100fuegos/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            <i className="ri-github-line text-xl"></i>
            <span>Ver Todos los Proyectos</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
