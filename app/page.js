import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data/projects';

function isVimeoVideo(url) {
  return url?.includes('vimeo.com');
}

export default function HomePage() {
  return (
    <main className="page-wrap">
      <header className="header">
        <div>
          <h1>Portfolio - Francesco Diella</h1>
          <p className="small-meta">Sono semplicemente un barlettano (Puglia) temporaneamente ad Urbino (Marche).</p>
        </div>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/me">Me</Link>
        </nav>
      </header>

      <section>
        <div className="grid" id="projects-grid">
          {projects.map((project) => (
            <article className="card" key={project.id}>
              <Link href={`/projects/${project.id}`} aria-label={`Apri ${project.title}`}>
                {project.homePreview ? (
                  <div className="image-wrapper">
                    <Image
                      src={project.homePreview}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="card-img"
                    />
                  </div>
                ) : isVimeoVideo(project.hero) ? (
                  <div className="card-img vimeo-placeholder">
                    <span className="play-icon">▶</span>
                  </div>
                ) : (
                  <div className="image-wrapper">
                    <Image
                      src={project.hero}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="card-img"
                    />
                  </div>
                )}
                <h3 className="card-title">{project.title}</h3>
                <p className="card-subtitle">{project.type} • {project.year}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer>Premi un progetto per aprire la pagina dettagliata.</footer>
    </main>
  );
}
