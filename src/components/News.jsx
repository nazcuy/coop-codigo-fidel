import React from 'react';

const newsData = [
  {
    id: 1,
    date: '15 de Diciembre, 2025',
    title: 'Ampliación de Servicios de Desarrollo Móvil',
    excerpt: 'Nos complace anunciar que hemos expandido nuestra oferta de servicios para incluir desarrollo de aplicaciones móviles nativas e híbridas, respondiendo a la creciente demanda del mercado.'
  },
  {
    id: 2,
    date: '28 de Noviembre, 2025',
    title: 'Nueva Alianza Estratégica con Empresa Local',
    excerpt: 'Hemos establecido una colaboración estratégica con una empresa líder en automatización industrial para desarrollar soluciones de software integradas.'
  },
  {
    id: 3,
    date: '10 de Noviembre, 2025',
    title: 'Reconocimiento a la Innovación Tecnológica',
    excerpt: 'Nuestro proyecto de sistema de gestión para cooperativas fue reconocido en el reciente encuentro nacional de empresas tecnológicas.'
  }
];

function News() {
  return (
    <section id="noticias" className="section news">
      <div className="news-container">
        <h2 className="section-title">Últimas Noticias</h2>
        <div className="news-grid">
          {newsData.map(news => (
            <article key={news.id} className="news-card">
              <p className="news-date">{news.date}</p>
              <h3 className="news-title">{news.title}</h3>
              <p className="news-excerpt">{news.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
