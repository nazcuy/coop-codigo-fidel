import React from 'react';
import { useNavigate } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: 'Sistema de Gestión Cooperativa',
    description: 'Plataforma integral para la administración de cooperativas, incluyendo gestión de socios, finanzas y recursos.'
  },
  {
    id: 2,
    title: 'E-commerce para Pequeños Comercios',
    description: 'Tienda en línea diseñada específicamente para pequeños comerciantes, con gestión de inventario y pagos integrados.'
  },
  {
    id: 3,
    title: 'App de Seguimiento de Proyectos',
    description: 'Aplicación web para equipos de desarrollo que permite gestionar tareas, sprints y colaboración en tiempo real.'
  },
  {
    id: 4,
    title: 'Portal de Empleos Cooperativo',
    description: 'Plataforma que conecta trabajadores con cooperativas, fomentando la economía solidaria y el empleo digno.'
  },
  {
    id: 5,
    title: 'Sistema de Facturación Electrónica',
    description: 'Solución completa para la generación y gestión de facturas electrónicas, cumplimiento normativo incluido.'
  },
  {
    id: 6,
    title: 'Dashboard de Análisis de Datos',
    description: 'Herramienta de business intelligence con visualizaciones interactivas para la toma de decisiones empresariales.'
  }
];

function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <section id="proyectos" className="section projects">
      <div className="projects-container">
        <h2 className="section-title">Nuestros Proyectos</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => handleProjectClick(project.id)}
            >
              <img src={`../assets/images/project_${project.id}.png`} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <span className="project-button">Ver Detalles →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
