import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects';

function isVimeoVideo(url) {
  return url?.includes('vimeo.com');
}

function getVimeoId(url) {
  const match = url?.match(/(?:www\.)?vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default function ProjectPage({ params }) {
  const project = projects.find((item) => item.id === params.id);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const prevProject = projects[currentIndex - 1] ?? null;
  const nextProject = projects[currentIndex + 1] ?? null;

  return (
    <main className="page-wrap">
      <header className="header">
        <Link href="/" className="portfolio-title">Portfolio - Francesco Diella</Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/me">Me</Link>
        </nav>
      </header>

      <article>
        <div className="article-left">
          <h2>{project.title}</h2>
          <p className="small-meta">{project.type} • {project.year}</p>
          <div className="project-description">{project.description}</div>
        </div>

        <div className="article-right">
          {project.pdfViewer ? (
            <iframe
              src={project.pdfViewer}
              width="100%"
              height="600"
              frameBorder="0"
              className="pdf-viewer large-video"
              allowFullScreen
            />
          ) : isVimeoVideo(project.hero) ? (
            <div className="vimeo-embed-wrapper">
              <iframe
                src={`https://player.vimeo.com/video/${getVimeoId(project.hero)}`}
                width="100%"
                height="560"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                className="vimeo-embed"
              />
            </div>
          ) : (
            <div className="image-wrapper">
              <Image
                src={project.hero}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="gallery-img"
              />
            </div>
          )}

          {project.gallery.length > 0 && (
            <div className="project-gallery">
              {project.gallery.map((media, index) => (
                <div key={media} className="gallery-item image-wrapper">
                  <Image
                    src={media}
                    alt={`${project.title} - immagine ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="gallery-img"
                  />
                </div>
              ))}
            </div>
          )}

          {project.videos.length > 0 && (
            <div className="project-gallery">
              {project.videos.map((video) => (
                isVimeoVideo(video) ? (
                  <div key={video} className="vimeo-embed-wrapper">
                    <iframe
                      src={`https://player.vimeo.com/video/${getVimeoId(video)}`}
                      width="100%"
                      height="560"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="vimeo-embed"
                    />
                  </div>
                ) : (
                  <video key={video} controls className="gallery-video">
                    <source src={video} />
                  </video>
                )
              ))}
            </div>
          )}
        </div>
      </article>

      <div className="project-navigation">
        {prevProject ? (
          <Link href={`/projects/${prevProject.id}`} className="nav-arrow prev-arrow">
            <span className="arrow-symbol">❮</span>
            <span className="arrow-text">Precedente</span>
          </Link>
        ) : (
          <span className="nav-arrow disabled">
            <span className="arrow-symbol">❮</span>
            <span className="arrow-text">Primo progetto</span>
          </span>
        )}

        {nextProject ? (
          <Link href={`/projects/${nextProject.id}`} className="nav-arrow next-arrow">
            <span className="arrow-text">Successivo</span>
            <span className="arrow-symbol">❯</span>
          </Link>
        ) : (
          <span className="nav-arrow disabled">
            <span className="arrow-text">Ultimo progetto</span>
            <span className="arrow-symbol">❯</span>
          </span>
        )}
      </div>
    </main>
  );
}
