const projects = [
  {
    id: 'progetto-1',
    title: 'Installazione sonora - il NON tempo (ultimo progetto)',
    year: '2026',
    type: 'Installazione',
    hero: 'images/installazione-nontempo-hero.webp',
    description: `"Chi può dire come si gestisce bene il tempo?"

"L'esempio da seguire da dove arriva?"

"Il mio tempo è diverso da quello degli altri,
Forse il tempo degli altri è meglio del mio"

Accademia di Belle Arti di Urbino
Scuola di Nuove Tecnologie dell'Arte
Progettazione Multimediale II / 2025 - 2026
Progetto a cura del Prof. Marcello Signorile`,
    gallery: [
      'images/installazione-nontempo-1.webp',
      'images/installazione-nontempo-2.webp',
      'images/installazione-nontempo-3.webp',
      'images/installazione-nontempo-4.webp',
      'images/installazione-nontempo-5.webp',
      'images/installazione-nontempo-6.webp'
    ],
    videos: [
      'https://vimeo.com/1177276564?fl=tl&fe=ec'
    ]
  },
  {
    id: 'progetto-2',
    title: 'Rinasceremo alberi - Una molteplice singolarità',
    year: '2026',
    type: 'Video trittico',
    hero: 'https://vimeo.com/1177276619?fl=tl&fe=ec', // Video Vimeo come hero
    homePreview: 'images/rinasceremo-hero.webp', // Anteprima per homepage
    description: `Nella tua assenza mi sono perso,
soffrendo la solitudine,
sprofondando nel mio io
e ho avuto paura,
di quello che ho vissuto,
di quello che ho scelto,
forse mi pento
e questo non avrà rimedio.
Attraversando il tempo,
ho visto la tua luce correre, illuminandomi
come se il sole
non fosse mai esistito,
e lì ho capito.
Rinasceremo alberi,
ci rincontreremo
e anche se lontani,
le nostre radici si uniranno
sotto il suolo, facendoci forza,
legandoci per sempre
insieme a questa terra,
quando cresceremo,
le nostre mani si toccheranno
di nuovo per poterci accarezzare
come abbiamo sempre fatto.

Video di Francesco Pio Diella
Un testo di Francesco Pio Diella
Registrazione a cura di Francesco Pio Diella e Lorenzo Bucciarelli

Accademia di Belle Arti di Urbino
Scuola di Nuove Tecnologie dell'Arte
Progettazione Multimediale II / 2025 - 2026
Prof. Marcello Signorile`,
    gallery: [], // Nessuna galleria di immagini
    videos: [] // Solo il video hero, nessun video aggiuntivo
  },
  {
    id: 'progetto-3',
    title: 'Eredità dorata',
    year: '2026',
    type: 'Editoriale (leporello)',
    hero: 'images/eredita-dorata-hero.webp',
    description: `Dalla terra calpestata da lui fino a me.`,
    gallery: [
      'images/eredita-dorata-1.webp',
      'images/eredita-dorata-2.webp',
      'images/eredita-dorata-3.webp',
      'images/eredita-dorata-4.webp',
      'images/eredita-dorata-5.webp'
    ],
    videos: []
  },
  {
    id: 'progetto-4',
    title: 'Ricordati di me - La mano',
    year: '2025',
    type: 'Editoriale',
    hero: 'images/1_insta.webp',
    description: 'Ricordati di me - La mano',
    gallery: [
      'images/1_insta.webp',
      'images/2_insta.webp',
      'images/3_insta.webp',
      'images/4_insta.webp',
      'images/5_insta.webp',
      'images/6_insta.webp',
      'images/7_insta.webp',
      'images/8_insta.webp',
      'images/9_insta.webp',
      'images/10_insta.webp',
      'images/11_insta.webp',
      'images/12_insta.webp',
      'images/13_insta.webp',
      'images/14_insta.webp',
      'images/15_insta.webp',
      'images/16_insta.webp',
      'images/17_insta.webp',
      'images/18_insta.webp',
      'images/19_insta.webp'
    ],
    videos: [
      'https://vimeo.com/1177276541?fl=tl&fe=ec'
    ]
  },
  {
    id: 'progetto-5',
    title: 'io so(g)no',
    year: '2025',
    type: 'Unity',
    hero: 'images/Io_sogno(1).webp',
    description: `Il gioco è scelta, sviluppato per una mia compagna di corso. Mi sono occupato della sviluppo e programmazione dell'intero gioco inserendo i video e le animazioni create da Giulia Peli.`,
    gallery: [
      'images/Io_sogno(2).webp',
      'images/Io_sogno(3).webp',
      'images/Io_sogno(4).webp',
      'images/Io_sogno(5).webp',
      'images/Io_sogno(6).webp'
    ],
    videos: []
  },
  {
    id: 'progetto-6',
    title: 'Tumbleweed Simulator',
    year: '2025',
    type: 'Unity',
    hero: 'images/TS(1).webp',
    description: `Il gioco creato prende ispirazione dal gioco Marble Blast ed i giochi Flash-player anni 2000.`,
    gallery: [
      'images/TS(2).webp',
      'images/TS(3).webp',
      'images/TS(4).webp',
      'images/TS(5).webp',
      'images/TS(6).webp',
      'images/TS(7).webp'
    ],
    videos: []
  },
  {
    id: 'progetto-7',
    title: 'Space Bowling',
    year: '2025',
    type: 'Unity',
    hero: 'images/Space_Bowling_1.webp',
    description: `Il gioco è stato creato durante il corso di Computer Games per comprendere le basi del movimento, l'aspetto è ispirato ai videogiochi arcade anni '80/90.`,
    gallery: [
      'images/Space_Bowling_1(1).webp',
      'images/Space_Bowling_1(2).webp',
      'images/Space_Bowling_1(3).webp',
      'images/Space_Bowling_1(4).webp'
    ],
    videos: [
      'https://vimeo.com/1177287934?fl=tl&fe=ec'
    ]
  },
  {
    id: 'progetto-8',
    title: "Everything's fine excepts us",
    year: '2025',
    type: 'Type Design',
    hero: 'images/bandiera_1.webp',
    description: `Everything's fine except us`,
    gallery: [
      'images/bandiera_2.webp',
      'images/bandiera_3.webp',
      'images/bandiera_4.webp',
      'images/bandiera_5.webp',
      'images/bandiera_6.webp'
    ],
    videos: []
  },
  {
    id: 'progetto-9',
    title: 'Infografica Bank Gothic',
    year: '2025',
    type: 'Poster',
    hero: 'images/info(1).webp',
    description: `I poster analizzano le misure in punti delle assi verticali, orizzontali e oblique del font Bank Gothic (regular).`,
    gallery: [
      'images/info(2).webp',
      'images/info(3).webp',
      'images/info(4).webp'
    ],
    videos: []
  },
  {
    id: 'progetto-10',
    title: 'Energia vibrante',
    year: '2025',
    type: 'Video sperimentale',
    hero: 'https://vimeo.com/1177346429?fl=tl&fe=ec',
    homePreview: 'images/hero-vibrante.webp',
    description: `Energia vibrante`,
    gallery: [],
    videos: []
  },
  {
    id: 'progetto-11',
    title: 'Habitat Naturale',
    year: '2025',
    type: '3D/Virtual Tour',
    hero: 'images/virtual(1).webp',
    description: `Habitat Naturale`,
    gallery: [
      'images/virtual(2).webp'
    ],
    videos: []
  },
  {
    id: 'progetto-12',
    title: 'Habitat Naturale',
    year: '2025',
    type: 'Editoriale',
    hero: 'images/heronaturale.webp',
    homePreview: 'images/heronaturale.webp',
    description: `Habitat Naturale`,
    gallery: [],
    videos: [],
    pdfViewer: 'https://heyzine.com/flip-book/424a35ebab.html'
  },
  {
    id: 'progetto-13',
    title: 'So fare come se fossi',
    year: '2025',
    type: 'Breve animazione',
    hero: 'https://vimeo.com/1177361312?fl=tl&fe=ec',
    homePreview: 'images/sofare-hero.webp',
    description: `Animazione ispirata alla filosofia del regista Peter Greenaway ed il film "I misteri del giardino di Compton House"`,
    gallery: [],
    videos: [
      'https://vimeo.com/1177361312?fl=tl&fe=ec'
    ]
  },
  {
    id: 'progetto-14',
    title: 'Social media',
    year: '2023',
    type: 'Fotografia (Archivio)',
    hero: 'images/social_1.webp',
    homePreview: 'images/social_1.webp',
    description: `Fotografie scattate durante il periodo all'interno di una ex agenzia di comunicazione di Barletta.`,
    gallery: [
      'images/social_1.webp',
      'images/social_2.webp',
      'images/social_3.webp',
      'images/social_4.webp',
      'images/social_5.webp',
      'images/social_6.webp',
      'images/social_7.webp',
      'images/social_8.webp'
    ],
    videos: []
  },
];

// Variabili globali per lightbox
let currentLightboxIndex = 0;
let lightboxMedia = [];

// Funzione per estrarre l'ID Vimeo dal link
function getVimeoId(url) {
  const match = url.match(/(?:www\.)?vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
}

// Funzione per controllare se un URL è un video Vimeo
function isVimeoVideo(url) {
  return url.includes('vimeo.com');
}

function renderHome() {
  const container = document.querySelector('#projects-grid');
  if (!container) return;

  container.innerHTML = projects.map(project => {
    let mediaElement;
    
    // Se c'è un'anteprima per la homepage, usala
    if (project.homePreview) {
      mediaElement = `<img class="card-img" src="${project.homePreview}" alt="${project.title}">`;
    } else if (isVimeoVideo(project.hero)) {
      // Per video Vimeo, mostro un placeholder con icona play
      mediaElement = `<div class="card-img vimeo-placeholder"><span class="play-icon">▶</span></div>`;
    } else if (project.hero.endsWith('.mp4') || project.hero.endsWith('.webm') || project.hero.endsWith('.ogg')) {
      mediaElement = `<video class="card-img" src="${project.hero}" alt="${project.title}" muted autoplay loop></video>`;
    } else {
      mediaElement = `<img class="card-img" src="${project.hero}" alt="${project.title}">`;
    }
    
    return `
    <article class="card">
      <a href="project.html?id=${project.id}" aria-label="Apri ${project.title}">
        ${mediaElement}
        <h3 class="card-title">${project.title}</h3>
        <p class="card-subtitle">${project.type} • ${project.year}</p>
      </a>
    </article>
  `}).join('');
}

function renderProject() {
  const id = new URLSearchParams(window.location.search).get('id');
  const project = projects.find(p => p.id === id);
  const titleEl = document.querySelector('#project-title');
  const descEl = document.querySelector('#project-description');
  const metaEl = document.querySelector('#project-meta');
  const galleryEl = document.querySelector('#project-gallery');

  if (!project || !titleEl) {
    if (titleEl) titleEl.textContent = 'Progetto non trovato';
    return;
  }

  // Mostra loading state
  galleryEl.innerHTML = '<div class="loading-gallery">Caricamento galleria...</div>';
  galleryEl.style.opacity = '0.5';

  titleEl.textContent = project.title;
  metaEl.textContent = `${project.type} • ${project.year}`;
  descEl.innerHTML = project.description.replace(/\n/g, '<br>');

  // Caso speciale: progetto con PDF viewer
  if (project.pdfViewer) {
    galleryEl.innerHTML = `
      <iframe src="${project.pdfViewer}" width="100%" height="600px" frameborder="0" allowfullscreen class="pdf-viewer large-video"></iframe>
    `;
    galleryEl.style.opacity = '1';

    // Inizializza lightbox con solo l'hero (nessuna galleria per progetti PDF)
    const allMedia = [project.hero];
    initLightbox(allMedia);
    return;
  }

  // Renderizza media (hero + gallery) - hero potrebbe essere video o immagine
  const heroMedia = [project.hero];
  const photoMedia = [...project.gallery];
  
  let galleryHTML = '';
  
  // Renderizza hero (potrebbe essere video Vimeo, video locale o immagine)
  heroMedia.forEach((media, idx) => {
    const extraClass = (project.id === 'progetto-2' || project.id === 'progetto-10' || project.id === 'progetto-13') ? 'large-video' : '';
    const cropClass = project.id === 'progetto-14' ? 'crop-bottom' : '';
    if (isVimeoVideo(media)) {
      const vimeoId = getVimeoId(media);
      galleryHTML += `
        <iframe src="https://player.vimeo.com/video/${vimeoId}" width="100%" height="auto" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" class="gallery-video vimeo-embed ${extraClass}" data-vimeo-id="${vimeoId}" data-index="${idx}"></iframe>
      `;
    } else if (media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.ogg')) {
      galleryHTML += `
        <video src="${media}" alt="${project.title} - video hero" loading="eager" class="gallery-video ${extraClass}" data-index="${idx}" controls muted preload="metadata">
          Il tuo browser non supporta il tag video.
        </video>
      `;
    } else {
      galleryHTML += `
        <img src="${media}" alt="${project.title} - immagine hero" loading="eager" class="gallery-img ${cropClass}" data-index="${idx}">
      `;
    }
  });
  
  // Renderizza galleria immagini (escludi hero se già incluso)
  const filteredPhotoMedia = project.id === 'progetto-4' ? photoMedia.slice(1) : photoMedia;
  galleryHTML += filteredPhotoMedia.map((media, idx) => {
    return `
      <img src="${media}" alt="${project.title} - immagine ${idx + 1}" loading="eager" class="gallery-img" data-index="${heroMedia.length + idx}">
    `;
  }).join('');

  // Aggiungi video dopo le immagini (escludi duplicati del hero)
  const additionalVideos = project.videos ? project.videos.filter(v => !heroMedia.includes(v)) : [];
  if (additionalVideos.length > 0) {
    galleryHTML += additionalVideos.map((media, idx) => {
      if (isVimeoVideo(media)) {
        const vimeoId = getVimeoId(media);
        return `
          <iframe src="https://player.vimeo.com/video/${vimeoId}" width="100%" height="auto" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" class="gallery-video vimeo-embed video-separator" data-vimeo-id="${vimeoId}" data-index="${heroMedia.length + photoMedia.length + idx}"></iframe>
        `;
      } else {
        return `
          <video src="${media}" alt="${project.title} - video ${idx + 1}" loading="lazy" class="gallery-video video-separator" data-index="${heroMedia.length + photoMedia.length + idx}" controls muted preload="metadata">
            Il tuo browser non supporta il tag video.
          </video>
        `;
      }
    }).join('');
  }

  // Usa requestAnimationFrame per rendering fluido
  requestAnimationFrame(() => {
    galleryEl.innerHTML = galleryHTML;
    galleryEl.style.opacity = '1';
    
    // Combina tutti i media per il lightbox (escludi duplicati per progetto-4)
    const filteredGallery = project.id === 'progetto-4' ? photoMedia.slice(1) : photoMedia;
    const allMedia = [...new Set([...heroMedia, ...filteredGallery, ...additionalVideos])];
    
    // Inizializza lightbox dopo che la galleria è renderizzata
    initLightbox(allMedia);
    
    // Imposta navigazione progetti
    setupProjectNavigation(project.id);
  });
}

// Funzione per gestire la navigazione tra progetti
function setupProjectNavigation(currentProjectId) {
  const currentIndex = projects.findIndex(p => p.id === currentProjectId);
  const prevProjectLink = document.getElementById('prev-project');
  const nextProjectLink = document.getElementById('next-project');
  
  if (!prevProjectLink || !nextProjectLink) return;
  
  // Progetto precedente
  if (currentIndex > 0) {
    const prevProject = projects[currentIndex - 1];
    prevProjectLink.href = `project.html?id=${prevProject.id}`;
    prevProjectLink.classList.remove('disabled');
    prevProjectLink.querySelector('.arrow-text').textContent = 'Precedente';
  } else {
    prevProjectLink.href = '#';
    prevProjectLink.classList.add('disabled');
    prevProjectLink.querySelector('.arrow-text').textContent = 'Primo progetto';
  }
  
  // Progetto successivo
  if (currentIndex < projects.length - 1) {
    const nextProject = projects[currentIndex + 1];
    nextProjectLink.href = `project.html?id=${nextProject.id}`;
    nextProjectLink.classList.remove('disabled');
    nextProjectLink.querySelector('.arrow-text').textContent = 'Successivo';
  } else {
    nextProjectLink.href = '#';
    nextProjectLink.classList.add('disabled');
    nextProjectLink.querySelector('.arrow-text').textContent = 'Ultimo progetto';
  }
}

function initLightbox(media) {
  lightboxMedia = media;
  const galleryEl = document.querySelector('.project-gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  const closeBtn = document.querySelector('.lightbox-close');
  const totalImg = document.getElementById('total-img');

  totalImg.textContent = media.length;

  // Event delegation - ascolta clicks su gallery items
  if (galleryEl) {
    galleryEl.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-img, .gallery-video');
      if (item) {
        const items = galleryEl.querySelectorAll('.gallery-img, .gallery-video');
        currentLightboxIndex = Array.from(items).indexOf(item);
        showLightbox();
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + media.length) % media.length;
    showLightbox();
  });

  nextBtn.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % media.length;
    showLightbox();
  });

  closeBtn.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
      if (e.key === 'ArrowLeft') prevBtn.click();
      if (e.key === 'ArrowRight') nextBtn.click();
      if (e.key === 'Escape') closeLightbox();
    }
  });

  function showLightbox() {
    const currentMedia = media[currentLightboxIndex];
    const isVimeo = isVimeoVideo(currentMedia);
    const isVideo = currentMedia.endsWith('.mp4') || currentMedia.endsWith('.webm') || currentMedia.endsWith('.ogg');
    
    if (isVimeo) {
      lightboxImg.style.display = 'none';
      if (!document.getElementById('lightbox-video')) {
        const iframeEl = document.createElement('iframe');
        iframeEl.id = 'lightbox-video';
        iframeEl.frameborder = '0';
        iframeEl.allow = 'autoplay; fullscreen; picture-in-picture';
        iframeEl.style.width = '100%';
        iframeEl.style.height = '100%';
        iframeEl.style.maxHeight = '80vh';
        lightboxImg.parentNode.insertBefore(iframeEl, lightboxImg.nextSibling);
      }
      const iframeEl = document.getElementById('lightbox-video');
      iframeEl.style.display = 'block';
      const vimeoId = getVimeoId(currentMedia);
      iframeEl.src = `https://player.vimeo.com/video/${vimeoId}`;
    } else if (isVideo) {
      lightboxImg.style.display = 'none';
      if (!document.getElementById('lightbox-video')) {
        const videoEl = document.createElement('video');
        videoEl.id = 'lightbox-video';
        videoEl.controls = true;
        videoEl.style.maxWidth = '100%';
        videoEl.style.maxHeight = '80vh';
        lightboxImg.parentNode.insertBefore(videoEl, lightboxImg.nextSibling);
      }
      const videoEl = document.getElementById('lightbox-video');
      videoEl.style.display = 'block';
      videoEl.src = currentMedia;
      videoEl.load();
    } else {
      if (document.getElementById('lightbox-video')) {
        document.getElementById('lightbox-video').style.display = 'none';
      }
      lightboxImg.style.display = 'block';
      lightboxImg.src = currentMedia;
    }
    
    document.getElementById('current-img').textContent = currentLightboxIndex + 1;
    lightbox.classList.add('active');
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    if (document.getElementById('lightbox-video')) {
      document.getElementById('lightbox-video').pause();
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#projects-grid')) {
      renderHome();
    } else if (document.querySelector('#project-gallery')) {
      renderProject();
    }
  });
} else {
  if (document.querySelector('#projects-grid')) {
    renderHome();
  } else if (document.querySelector('#project-gallery')) {
    renderProject();
  }
}
