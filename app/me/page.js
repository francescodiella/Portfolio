import Link from 'next/link';
import Image from 'next/image';

export default function MePage() {
  return (
    <main className="page-wrap">
      <header className="header">
        <h1>Chi sono</h1>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/me">Me</Link>
        </nav>
      </header>

      <section className="me-card">
        <div className="me-photo-wrapper">
          <Image
            src="/images/francesco.webp"
            alt="Foto personale"
            width={520}
            height={520}
            className="me-photo"
          />
        </div>

        <div>
          <h2>Francesco Diella</h2>
          <p>Sono uno studente dell'Accademia di Belle Arti di Urbino.</p>

          <h3>Contatti</h3>
          <p>
            Instagram:{' '}
            <a href="https://www.instagram.com/francescodiella_/" target="_blank" rel="noreferrer">
              @francescodiella_
            </a>
            <br />
            Email:{' '}
            <a href="mailto:francescodiella322@gmail.com">francescodiella322@gmail.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}
