// js/main.js
console.log("🚀 NovaStream JS cargado correctamente!");
const movies = [
  {
    id: "the-batman",
    title: "The Batman",
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    rating: "8.4",
    year: "2022",
    duration: "2h 56m",
    genre: "Acción / Crimen",
    description: "Cuando un asesino en serie comienza a matar a importantes figuras de Gotham, Batman descubre una red de corrupción que pondrá a prueba su misión y su identidad."
  },

  {
    id: "the-godfather",
    title: "The Godfather",
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    rating: "9.2",
    year: "1972",
    duration: "2h 55m",
    genre: "Drama / Crimen",
    description: "Michael Corleone es arrastrado al imperio criminal de su familia mientras lucha entre sus principios y el legado de la mafia italiana."
  },

  {
    id: "dune-part-two",
    title: "Dune: Parte Dos",
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    rating: "8.8",
    year: "2024",
    duration: "2h 46m",
    genre: "Ciencia Ficción / Aventura",
    description: "Paul Atreides une fuerzas con los fremen para enfrentarse a quienes destruyeron su familia y cambiar el destino del universo."
  },

  {
    id: "spider-man-no-way-home",
    title: "Spider-Man: No Way Home",
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    rating: "8.1",
    year: "2021",
    duration: "2h 28m",
    genre: "Acción / Superhéroes",
    description: "Peter Parker pide ayuda al Doctor Strange, pero un hechizo fallido abre el multiverso y enfrenta a Spider-Man con enemigos de otras realidades."
  },

  {
    id: "oppenheimer",
    title: "Oppenheimer",
    image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    rating: "8.6",
    year: "2023",
    duration: "3h 00m",
    genre: "Drama / Historia",
    description: "La historia de J. Robert Oppenheimer y el desarrollo de la bomba atómica durante la Segunda Guerra Mundial."
  },

  {
    id: "fight-club",
    title: "Fight Club",
    image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    rating: "8.8",
    year: "1999",
    duration: "2h 19m",
    genre: "Drama / Suspenso",
    description: "Un hombre atrapado en la rutina conoce a Tyler Durden y juntos crean un club clandestino que terminará escapando de todo control."
  },

  {
    id: "pulp-fiction",
    title: "Pulp Fiction",
    image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    rating: "8.9",
    year: "1994",
    duration: "2h 34m",
    genre: "Crimen / Drama",
    description: "Historias cruzadas de asesinos, mafiosos y boxeadores se entrelazan en uno de los clásicos más influyentes del cine moderno."
  },

  {
    id: "the-witcher",
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
    rating: "8.2",
    year: "2019",
    duration: "Serie",
    genre: "Fantasía",
    description: "Geralt de Rivia, un cazador de monstruos, busca su destino mientras protege a una poderosa princesa en un continente lleno de magia y guerra."
  },

  {
    id: "stranger-things",
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    rating: "8.7",
    year: "2016",
    duration: "Serie",
    genre: "Ciencia Ficción / Terror",
    description: "La desaparición de un niño lleva a un grupo de amigos a descubrir experimentos secretos y criaturas provenientes del Mundo del Revés."
  },

  {
    id: "the-mandalorian",
    title: "The Mandalorian",
    image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    rating: "8.6",
    year: "2019",
    duration: "Serie",
    genre: "Acción / Ciencia Ficción",
    description: "Un solitario cazarrecompensas emprende una peligrosa misión para proteger a Grogu mientras recorre la galaxia."
  },

  {
    id: "peaky-blinders",
    title: "Peaky Blinders",
    image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    rating: "8.8",
    year: "2013",
    duration: "Serie",
    genre: "Drama / Crimen",
    description: "La familia Shelby expande su imperio criminal en la Inglaterra de la posguerra bajo el liderazgo de Thomas Shelby."
  },

  {
    id: "the-last-of-us",
    title: "The Last of Us",
    image: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    rating: "8.7",
    year: "2023",
    duration: "Serie",
    genre: "Drama / Postapocalíptico",
    description: "Joel acepta escoltar a Ellie a través de un Estados Unidos devastado por una infección que ha destruido la civilización."
  },

  {
    id: "the-green-mile",
    title: "The Green Mile",
    image: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    rating: "8.6",
    year: "1999",
    duration: "3h 09m",
    genre: "Drama / Fantasía",
    description: "Un guardia de prisión conoce a un condenado a muerte con un misterioso don capaz de realizar milagros."
  },

  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    image: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    rating: "8.0",
    year: "2017",
    duration: "2h 44m",
    genre: "Ciencia Ficción",
    description: "Un blade runner descubre un secreto que podría alterar el equilibrio entre humanos y replicantes."
  },

  {
    id: "forrest-gump",
    title: "Forrest Gump",
    image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    rating: "8.8",
    year: "1994",
    duration: "2h 22m",
    genre: "Drama / Romance",
    description: "Forrest Gump vive una vida extraordinaria participando, casi sin proponérselo, en algunos de los acontecimientos más importantes del siglo XX."
  },

  {
    id: "the-matrix",
    title: "The Matrix",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: "8.7",
    year: "1999",
    duration: "2h 16m",
    genre: "Acción / Ciencia Ficción",
    description: "Neo descubre que la realidad es una simulación creada por máquinas y se une a la resistencia para liberar a la humanidad."
  }
];
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ DOM completamente cargado");

    // ==================== CARRUSELES ====================
    function initCarousels() {
        const carousels = document.querySelectorAll('.carousel');

        carousels.forEach(carousel => {
            const id = carousel.id;
            
            // Buscamos los botones específicos de ESTE carrusel
            const wrapper = carousel.closest('.carousel-wrapper');
            const prevBtn = document.querySelector(`.carousel-btn.prev[data-carousel="${id}"]`);
            const nextBtn = document.querySelector(`.carousel-btn.next[data-carousel="${id}"]`);

            if (!prevBtn || !nextBtn) {
                console.warn(`⚠️ Botones no encontrados para el carrusel: ${id}`);
                return; // saltamos este carrusel
            }
                function updateButtons() {
                const isAtStart = carousel.scrollLeft <= 0;
                const isAtEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10;

                prevBtn.style.opacity = isAtStart ? '0.3' : '0.9';
                prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';

                nextBtn.style.opacity = isAtEnd ? '0.3' : '0.9';
                nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
            }
                 
            //Eventos de scroll
            carousel.addEventListener('scroll', updateButtons);
            

            // ← Botón Anterior
            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({
                    left: -320,           // ancho aproximado de una tarjeta + gap
                    behavior: 'smooth'
                });
            });

            // → Botón Siguiente
            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({
                    left: 320,
                    behavior: 'smooth'
                });
            });
            //Actualizar al cargar y al redimensionar
            updateButtons();
            window.addEventListener('resize', updateButtons);
            console.log(`✅ Controles activados para: ${id}`);
        });
    }
    // Modal ====
    const modal = document.getElementById('movie-modal');
    const modalClose = document.getElementById('modal-close');

    function openMovieModal (movie){
        document.getElementById('modal-image').src = movie.image;
        document.getElementById('modal-title').textContent = movie.title;
        document.getElementById('modal-meta').innerHTML = `
        <span>★ ${movie.rating}</span>
        <span>${movie.year}</span>
        <span>${movie.duration || '2h 30m'}</span>
        <span>${movie.genre}</span>
    `;
       document.getElementById('modal-description').textContent = movie.description || "Una increíble película que te mantendrá al borde de tu asiento.";
        modal.style.display = 'flex';
        }

        // cerrar modal 
        modalClose.addEventListener ('click', () => {
            modal.style.display = 'none';
        });

        // cerrar al hacer 
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    
        function initMovieCards() {
        const cards = document.querySelectorAll('.movie-card, .movie-card_2');
        
        cards.forEach(card => {
            card.style.cursor = 'pointer';
            
            card.addEventListener('click', () => {
                const moviedId = card.dataset.id; 
                
                if (!moviedId) {
                    console.warn('Tarjeta sin data-id');
                    return;
                }
                const movie = movies.find(m => m.id === moviedId);
                if (movie) {
                    openMovieModal(movie);
                } else {
                    console.warn(`Pelicula no encontrada: ${movieId}`);
                }
                
            });
        });
        
        console.log(`✅ ${cards.length} tarjetas clickeables activadas`);
    }
   
    // ==================== WIDGET GÉNEROS ====================
function initGenresWidget() {
    const genres = [
        { emoji: "🔥", name: "Acción" },
        { emoji: "🌌", name: "Ciencia Ficción" },
        { emoji: "🎭", name: "Drama" },
        { emoji: "👻", name: "Terror" },
        { emoji: "😂", name: "Comedia" },
        { emoji: "🏔️", name: "Aventura" },
        { emoji: "🕵️", name: "Suspense" },
        { emoji: "🦸", name: "Animación" }
    ];

    const container = document.getElementById('genres-grid');
    container.innerHTML = '';

    genres.forEach(genre => {
        const chip = document.createElement('div');
        chip.className = 'genre-chip';
        chip.innerHTML = genre.emoji;
        chip.dataset.name = genre.name;
        chip.setAttribute('role', 'button');
        chip.setAttribute('aria-label', genre.name); // accesibilidad, no crea tooltip nativo

        chip.addEventListener('click', () => {
            const wasActive = chip.classList.contains('active');

            // Quitar active/show-tooltip a todos
            document.querySelectorAll('.genre-chip').forEach(c => {
                c.classList.remove('active', 'show-tooltip');
            });

            if (!wasActive) {
                chip.classList.add('active');
                chip.classList.add('show-tooltip');
                // Ocultar el tooltip solo (no el active) tras 1.5s en touch
                setTimeout(() => chip.classList.remove('show-tooltip'), 1500);
            }

            console.log(`Filtro activado: ${genre.name}`);
        });

        container.appendChild(chip);
    });
}

//  Menu Hamgurguesa
   // ==================== MENÚ HAMBURGUESA ====================

const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.createElement('div'); // Creamos el overlay con JS
overlay.className = 'overlay';
document.body.appendChild(overlay);

function openMenu() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // evita scroll mientras menú abierto
}

function closeMenu() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // restaura scroll
}

// Abrir menú
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // evita conflictos
    openMenu();
});
// Cerrar al tocar enlaces del menú
document.querySelectorAll('.sidebar__nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Pequeño delay para que se vea el efecto active antes de cerrar
        setTimeout(() => {
            closeMenu();
        }, 150);
    });
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {        // solo si toca el fondo, no el menú
        closeMenu();
    }
});

// Cerrar con tecla Escape (buena práctica)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

// ==================== HERO CARRUSEL ====================
function initHeroCarousel() {
    const heroMovies = [
        {
            image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            title: "INTERSTELLAR",
            description: "La aventura que desafía los límites del tiempo y del espacio para salvar a la humanidad.",
            rating: "8.9",
            year: "2014",
            duration: "2h 49m",
            genre: "Ciencia Ficción"
        },
        {
            image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            title: "Inception",
            description: "Un ladrón especializado en infiltrarse en los sueños recibe la misión imposible de implantar una idea en la mente de un poderoso empresario",
            rating: "8.8",
            year: "2010",
            duration: "2h 28m",
            genre: "Ciencia Ficción/Acción"
        },
        {
            image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            title: "Joker",
            description: "Un comediante marginado cae en la locura mientras se transforma en el criminal más temido de Gotham.",
            rating: "8.4",
            year: "2019",
            duration: "2h 2m",
            genre: "Crimen/Suspenso"
        }
    ];

    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.getElementById('hero-dots');
    const titleEl = document.getElementById('hero-title');
    const descEl = document.getElementById('hero-description');
    const ratingEl = document.getElementById('hero-rating');
    const yearEl = document.getElementById('hero-year');
    const durationEl = document.getElementById('hero-duration');
    const genreEl = document.getElementById('hero-genre');

    if (!slides.length || !dotsContainer) return;

    let currentIndex = 0;
    let autoplayTimer = null;
    const AUTOPLAY_DELAY = 6000;

    // Asignar imagen de fondo a cada slide
    slides.forEach((slide, i) => {
        slide.style.backgroundImage = `url('${heroMovies[i].image}')`;
    });

    // Crear los dots dinámicamente
    heroMovies.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.hero-dot');

    function updateContent(index) {
        const movie = heroMovies[index];
        titleEl.textContent = movie.title;
        descEl.textContent = movie.description;
        ratingEl.textContent = `★ ${movie.rating}`;
        yearEl.textContent = movie.year;
        durationEl.textContent = movie.duration;
        genreEl.textContent = movie.genre;
    }

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        currentIndex = index;

        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
        updateContent(currentIndex);
    }

    function nextSlide() {
        const next = (currentIndex + 1) % heroMovies.length;
        goToSlide(next);
    }

    function startAutoplay() {
        autoplayTimer = setInterval(nextSlide, AUTOPLAY_DELAY);
    }

    function resetAutoplay() {
        clearInterval(autoplayTimer);
        startAutoplay();
    }

    startAutoplay();
    console.log("✅ Hero carrusel inicializado");
}



    // Inicializamos todo
    initCarousels();
    initMovieCards();
    initGenresWidget();
    initHeroCarousel();
});