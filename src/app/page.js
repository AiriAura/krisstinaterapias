"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

// ==================== CONFIGURACIÓN Y DATOS ====================
const TERAPIAS_DATA = [
  {
    id: 'reiki',
    titulo: 'Reiki',
    subtitulo: 'Sanación Energética',
    descripcion: 'Canaliza la energía universal para purificar tu campo energético, liberar bloqueos y florecer como el loto.',
    duracion: '60 min',
    precio: 'Consultar',
    imagen: 'https://images.unsplash.com/photo-1544164559-90f4302d7142?auto=format&fit=crop&w=800&q=80',
    alt: 'Sesión de Reiki con sanación energética'
  },
  {
    id: 'flores-bach',
    titulo: 'Flores de Bach',
    subtitulo: 'Equilibrio Emocional',
    descripcion: 'Terapia floral para armonizar emociones y restaurar tu paz interior con esencias naturales.',
    duracion: '45 min',
    precio: 'Consultar',
    imagen: 'https://images.unsplash.com/photo-1604079339391-53e79e6c8672?auto=format&fit=crop&w=800&q=80',
    alt: 'Flores de Bach para terapia emocional'
  },
  {
    id: 'yoga',
    titulo: 'Yoga Terapéutico',
    subtitulo: 'Unión de Cuerpo y Espíritu',
    descripcion: 'Posturas conscientes y meditación para encontrar tu centro, aumentar tu vitalidad y conectar con tu esencia.',
    duracion: '75 min',
    precio: 'Consultar',
    imagen: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=800&q=80',
    alt: 'Clase de yoga terapéutico al amanecer'
  },
  {
    id: 'yoga-infantil',
    titulo: 'Yoga para Niños',
    subtitulo: 'Crecimiento Consciente',
    descripcion: 'Clases lúdicas que ayudan a los más pequeños a desarrollar conciencia corporal y gestión emocional.',
    duracion: '45 min',
    precio: 'Consultar',
    imagen: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80',
    alt: 'Niños practicando yoga en grupo'
  },
  {
    id: 'yoga-tercera-edad',
    titulo: 'Yoga para Tercera Edad',
    subtitulo: 'Vitalidad y Bienestar',
    descripcion: 'Movimientos suaves adaptados para mantener flexibilidad, fuerza y equilibrio en la edad dorada.',
    duracion: '60 min',
    precio: 'Consultar',
    imagen: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    alt: 'Adultos mayores practicando yoga suave'
  },
  {
    id: 'circulos-mujeres',
    titulo: 'Círculos de Mujeres',
    subtitulo: 'Sanación Colectiva',
    descripcion: 'Espacios sagrados donde las mujeres se reúnen para compartir, sanar y celebrar su feminidad.',
    duracion: '120 min',
    precio: 'Consultar',
    imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    alt: 'Círculo de mujeres en ritual de sanación'
  },
  {
    id: 'ayurveda',
    titulo: 'Consultoría Ayurveda',
    subtitulo: 'Medicina Ancestral',
    descripcion: 'Descubre tu dosha y recibe recomendaciones personalizadas para equilibrar tu constitución única.',
    duracion: '90 min',
    precio: 'Consultar',
    imagen: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80',
    alt: 'Consulta de medicina ayurvédica'
  },
  {
    id: 'masaje-ayurvedico',
    titulo: 'Masaje Ayurvédico',
    subtitulo: 'Terapia Corporal',
    descripcion: 'Técnicas ancestrales con aceites herbales que nutren tu cuerpo y calman tu mente profundamente.',
    duracion: '75 min',
    precio: 'Consultar',
    imagen: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    alt: 'Masaje ayurvédico con aceites naturales'
  }
];

const BLOG_POSTS = [
  {
    id: 'desapego',
    titulo: 'El Arte del Desapego: Dejar Ir para Crecer',
    extracto: 'Como los árboles sueltan sus hojas, nosotros también debemos aprender a soltar lo que ya no nos sirve.',
    imagen: 'https://images.unsplash.com/photo-1476611338395-5f9b92402517?auto=format&fit=crop&w=800&q=80',
    alt: 'Camino en bosque de bambú iluminado'
  },
  {
    id: 'equilibrio',
    titulo: 'Encuentra tu Centro: Rituales para el Equilibrio',
    extracto: 'Pequeños actos diarios que pueden anclarte al presente y restaurar tu armonía interior.',
    imagen: 'https://images.unsplash.com/photo-1598202391038-e52b204e3345?auto=format&fit=crop&w=800&q=80',
    alt: 'Piedras en equilibrio en playa serena'
  }
];

// ==================== COMPONENTES ====================
function NavLink({ href, children, className = "", onClick = () => {} }) {
  return (
    <a 
      href={href} 
      className={className}
      onClick={(e) => {
        const targetId = href.substring(1);
        if (targetId) {
            e.preventDefault();
            const target = document.getElementById(targetId);
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        onClick(e); // Llama al onClick externo (ej. para cerrar el menú)
      }}
    >
      {children}
    </a>
  );
}

function TerapiaCard({ terapia }) {
  return (
    <article className="card">
      <Image 
        src={terapia.imagen} 
        alt={terapia.alt}
        width={800} 
        height={400}
        loading="lazy"
        style={{width: '100%', height: '200px', objectFit: 'cover'}} 
      />
      <div className="card-content">
        <h3>{terapia.titulo}</h3>
        <p className="card-subtitle">{terapia.subtitulo}</p>
        <p>{terapia.descripcion}</p>
        <div className="card-info">
          <span className="price">{terapia.duracion} / {terapia.precio}</span>
          <NavLink href="#contacto" className="btn-reservar">
            Reservar
          </NavLink>
        </div>
      </div>
    </article>
  );
}

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <Image 
        src={post.imagen} 
        alt={post.alt}
        width={800} 
        height={400}
        loading="lazy"
        style={{width: '100%', height: '200px', objectFit: 'cover'}} 
      />
      <div className="blog-card-content">
        <h3>{post.titulo}</h3>
        <p>{post.extracto}</p>
        <a href={`/blog/${post.id}`} aria-label={`Leer más sobre ${post.titulo}`}>
          Leer más &rarr;
        </a>
      </div>
    </article>
  );
}

// ==================== COMPONENTE PRINCIPAL ====================
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav-menu a');
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    // Throttle para optimizar performance
    let scrollTimeout;
    function handleScroll() {
      if (scrollTimeout) return;
      
      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY;

        // Header scroll effect
        if (scrollPosition > 50) {
          header?.classList.add('scrolled');
          header?.classList.remove('at-top');
        } else {
          header?.classList.remove('scrolled');
          header?.classList.add('at-top');
        }

        // Active nav link
        let currentSection = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          if (scrollPosition >= sectionTop) {
            currentSection = section.getAttribute('id');
          }
        });
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href');
          if (href && href.substring(1) === currentSection) {
            link.classList.add('active');
          }
        });

        // Intersection Observer sería mejor, pero manteniendo tu lógica
        revealElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight - 100 && rect.bottom >= 0) {
            el.classList.add('is-visible');
          }
        });

        scrollTimeout = null;
      }, 100);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const formData = new FormData(e.target);
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      mensaje: formData.get('mensaje')
    };

    try {
      // Aquí conectarás tu API route: /api/contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormStatus({ 
          type: 'success', 
          message: '¡Gracias! Tu mensaje ha sido enviado. Te contactaré pronto 🙏' 
        });
        e.target.reset();
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Hubo un error. Por favor intenta nuevamente o escríbeme directamente.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Schema.org Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "Cristina Holística",
            "description": "Terapias holísticas: Reiki, Flores de Bach, Yoga, Ayurveda",
            "url": "https://tudominio.com",
            "telephone": "+56-9-XXXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Santiago",
              "addressCountry": "CL"
            },
            "priceRange": "$$",
            "image": "https://tudominio.com/og-image.jpg"
          })
        }}
      />

      <header id="header" className="at-top">
        <NavLink href="#inicio" className="logo">
        🪷 Cristina Holística
        </NavLink>
        
        <nav className="desktop-nav" aria-label="Navegación principal">
          <NavLink href="#inicio">Inicio</NavLink>
          <NavLink href="#terapias">Terapias</NavLink>
          <NavLink href="#sobre">Sobre Mí</NavLink>
          <NavLink href="#blog">Blog</NavLink>
          <NavLink href="#contacto" className="btn">Contacto</NavLink>
        </nav>

        <button 
          className={`mobile-nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
          id="mobile-nav-toggle"
          onClick={toggleMobileMenu}
          aria-label="Abrir menú de navegación"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <nav 
        className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}
        id="mobile-nav-menu"
        aria-label="Menú móvil"
      >
        <button onClick={closeMobileMenu} className="mobile-nav-close" aria-label="Cerrar menú">
          &times;
        </button>
        <NavLink href="#inicio" onClick={closeMobileMenu}>Inicio</NavLink>
        <NavLink href="#terapias" onClick={closeMobileMenu}>Terapias</NavLink>
        <NavLink href="#sobre" onClick={closeMobileMenu}>Sobre Mí</NavLink>
        <NavLink href="#blog" onClick={closeMobileMenu}>Blog</NavLink>
        <NavLink href="#contacto" onClick={closeMobileMenu}>Contacto</NavLink>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero diagonal" id="inicio">
          <div className="hero-content">
          
            {/* Título para Desktop (curvo) */}
            <div className="desktop-title">
              <svg viewBox="0 0 900 300" width="900" height="300" style={{overflow: 'visible'}} aria-hidden="true">
                <path id="curve" d="M 0, 150 C 250, 50, 650, 50, 900, 150" fill="transparent"/>
                <text className="curved-title">
                  <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                    Conecta con tu Esencia Divina
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Título para Móvil (recto) */}
            <h1 className="mobile-title">Conecta con tu Esencia Divina</h1>
            
            <h1 className="visually-hidden">Cristina Holística - Terapias para el Alma</h1>
            
             <p style={{
              fontSize: '1.5rem',
              color: 'var(--accent-color)',
              margin: '1.5rem 0',
              letterSpacing: '0.2em'
            }}>
              --- ❖ ---
            </p>
            <p>Un viaje de sanación para el alma, donde la naturaleza y tu mundo interior se encuentran.</p>
            <NavLink href="#contacto" className="btn">
              Despierta tu Luz Interior
            </NavLink>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro" id="intro">
          <div className="reveal-on-scroll">
            <h2>¿Anhelas Paz en un Mundo Ajetreado?</h2>
            <p>La desconexión espiritual y el estrés son el velo que oculta tu verdadera esencia. Te ofrezco un santuario para el alma, un espacio para meditar, sanar y redescubrir la serenidad que ya habita en ti.</p>
            <NavLink href="#terapias">Encuentra tu Terapia &rarr;</NavLink>
          </div>
        </section>

        {/* TERAPIAS */}
        <section className="terapias diagonal" id="terapias">
          <div className="reveal-on-scroll">
            <h2>Caminos hacia tu Bienestar</h2>
            <p className="subtitle">Terapias que nutren el alma y equilibran tu energía.</p>
            <div className="cards">
              {TERAPIAS_DATA.map(terapia => (
                <TerapiaCard key={terapia.id} terapia={terapia} />
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section className="sobre" id="sobre">
          <div className="reveal-on-scroll" style={{display: 'contents'}}>
            <Image 
              src="https://images.unsplash.com/photo-1593811167563-a7c379a11470?auto=format&fit=crop&w=800&q=80" 
              alt="Cristina, terapeuta holística, en entorno natural" 
              width={800} 
              height={800}
              loading="lazy"
              style={{borderRadius: '25px', width: '100%', height: 'auto', objectFit: 'cover'}} 
            />
            <div>
              <h2>Mi Dharma: Ser un Faro en tu Camino</h2>
              <p>Mi viaje espiritual me ha enseñado que la verdadera sanación nace de la compasión y la conexión. Mi propósito, mi dharma, es guiarte con herramientas ancestrales y una profunda intuición para que recuerdes la luz y la sabiduría que ya residen en ti.</p>
              <p>Formada en terapias holísticas y como Maestra de Reiki, mi enfoque es puramente holístico, honrando la unión inseparable de tu cuerpo, tu mente y tu espíritu divino.</p>
              <NavLink href="#contacto" className="btn">
                Inicia tu Viaje Conmigo
              </NavLink>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="testimonios diagonal" id="testimonios">
          <div className="reveal-on-scroll">
            <h2>Ecos del Alma</h2>
            <article className="testimonial">
              <Image 
                src="https://randomuser.me/api/portraits/women/47.jpg" 
                alt="Elena R., clienta satisfecha"
                width={80} 
                height={80}
                loading="lazy"
                style={{borderRadius: '50%', marginBottom: '15px', border: '3px solid var(--pink-accent)'}}
              />
              <blockquote>
                <p>"Las sesiones con Cristina son un regalo para el alma. He conectado con una parte de mí que estaba dormida. Su energía es pura y su guía, un mapa hacia la paz interior."</p>
                <cite>- Elena R., Buscadora Espiritual</cite>
              </blockquote>
            </article>
          </div>
        </section>

        {/* BLOG */}
        <section className="blog" id="blog">
          <div className="reveal-on-scroll">
            <h2>Senderos de Sabiduría</h2>
            <p className="subtitle">Inspiración para tu práctica diaria.</p>
            <div className="blog-cards">
              {BLOG_POSTS.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="contacto diagonal" id="contacto">
          <div className="reveal-on-scroll">
            <h2>Da el Primer Paso hacia tu Interior</h2>
            <p>Tu viaje de sanación comienza con una simple intención. Estoy aquí para escucharte y guiarte.</p>
            
            {/* Botón de WhatsApp */}
            <a 
              href="https://wa.me/56912345678?text=Hola%20Cristina,%20quisiera%20información%20sobre%20las%20terapias" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-main"
              aria-label="Contactar por WhatsApp"
            >
              💬 Agendar mi Sesión por WhatsApp
            </a>
            
            <p style={{marginTop: '20px', marginBottom: '10px'}}>O déjame un mensaje:</p>
            
            <form onSubmit={handleSubmit} aria-label="Formulario de contacto">
              <input 
                type="text" 
                name="nombre"
                placeholder="Tu Nombre" 
                required 
                aria-label="Nombre"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Tu Email" 
                required 
                aria-label="Correo electrónico"
              />
              <textarea 
                name="mensaje"
                placeholder="Tu mensaje..." 
                rows="4" 
                required
                aria-label="Mensaje"
              ></textarea>
              
              {formStatus.message && (
                <div 
                  className={`form-status ${formStatus.type}`}
                  role="alert"
                  aria-live="polite"
                >
                  {formStatus.message}
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Cristina Holística | Conecta con tu Esencia Divina</p>
        <p style={{fontSize: '0.85em', marginTop: '10px', opacity: 0.8}}>
          Santiago, Chile | 
          <a href="tel:+56912345678" style={{color: 'inherit', marginLeft: '5px'}}>
            +56 9 1234 5678
          </a>
        </p>
      </footer>

      {/* WhatsApp flotante */}
      <a
        href="https://wa.me/56912345678?text=Hola%20Cristina"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.322 1.225 4.938 1.863 7.812 1.863 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.25c-2.438 0-4.819-0.681-6.912-1.969l-0.5-0.3-4.137 1.069 1.1-4.088-0.319-0.519c-1.413-2.244-2.163-4.838-2.163-7.506 0-7.731 6.288-14.019 14.019-14.019s14.019 6.288 14.019 14.019-6.288 14.019-14.019 14.019zM22.5 18.563c-0.337-0.169-2-0.987-2.313-1.1-0.312-0.113-0.538-0.169-0.762 0.169s-0.875 1.1-1.075 1.325c-0.2 0.225-0.4 0.256-0.737 0.087s-1.438-0.531-2.738-1.688c-1.012-0.9-1.694-2.013-1.894-2.35s-0.019-0.519 0.15-0.688c0.156-0.15 0.337-0.4 0.506-0.6s0.225-0.337 0.337-0.562 0.056-0.425-0.025-0.6-0.762-1.838-1.044-2.519c-0.275-0.662-0.556-0.575-0.762-0.587-0.194-0.012-0.419-0.012-0.644-0.012s-0.587 0.087-0.894 0.425c-0.306 0.337-1.175 1.15-1.175 2.806s1.206 3.256 1.369 3.481c0.169 0.225 2.35 3.594 5.694 5.038 0.794 0.344 1.413 0.544 1.894 0.7 0.8 0.256 1.531 0.219 2.106 0.131 0.644-0.094 2-0.819 2.281-1.606s0.281-1.469 0.194-1.606c-0.087-0.137-0.313-0.225-0.65-0.394z"/>
        </svg>
      </a>
    </>
  );
}
