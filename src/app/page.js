'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

// Componentes
import TerapiaCard from './components/TerapiaCard';
import ModalTerapia from './components/ModalTerapia';
import TestimonioCard from './components/TestimonioCard';
import FAQ from './components/FAQ';
import FormularioContacto from './components/FormularioContacto';

// Datos
import { TERAPIAS_DATA, ordenarPorRelevancia } from './data/terapias';
import { TESTIMONIOS_DESTACADOS } from './data/testimonios';
import { BLOG_POSTS } from './blog/posts';

// Utils
import { abrirWhatsApp, getWhatsAppURL } from './utils/whatsapp';
import { eventos } from './utils/analytics';

// ==================== COMPONENTES AUXILIARES ====================
function NavLink({ href, children, className = "", onClick = () => {} }) {
  return (
    <a 
      href={href} 
      className={className}
      onClick={(e) => {
        const targetId = href.substring(1);
        if (targetId && document.getElementById(targetId)) {
          e.preventDefault();
          const target = document.getElementById(targetId);
          target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          eventos.clickNavLink(targetId);
        }
        onClick(e);
      }}
    >
      {children}
    </a>
  );
}

function BlogCard({ post }) {
  return (
    <Link 
      href={`/blog/${post.id}`} 
      className="blog-card"
      onClick={() => eventos.clickBlogPost(post.id, post.titulo)}
    >
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
        <span className="blog-read-more">Leer más &rarr;</span>
      </div>
    </Link>
  );
}

// ==================== COMPONENTE PRINCIPAL ====================
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalTerapia, setModalTerapia] = useState(null);
  const [terapiaParaFormulario, setTerapiaParaFormulario] = useState(null);

  // Ordenar terapias (populares primero)
  const terapiasOrdenadas = ordenarPorRelevancia(TERAPIAS_DATA, 'popular');

  useEffect(() => {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav-menu a');

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

        scrollTimeout = null;
      }, 100);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Timer de página
    let timeOnPage = 0;
    const pageTimer = setInterval(() => {
      timeOnPage += 30;
      eventos.tiempoEnPagina(timeOnPage);
    }, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      clearInterval(pageTimer);
    };
  }, []);

  const handleVerMasTerapia = (terapia) => {
    setModalTerapia(terapia);
    eventos.verModalTerapia(terapia.id);
  };

  const handleReservarTerapia = (terapia) => {
    setTerapiaParaFormulario(terapia);
    const contactoSection = document.getElementById('contacto');
    contactoSection?.scrollIntoView({ behavior: 'smooth' });
    eventos.clickReservar(terapia.id, terapia.precioNumerico);
  };

  return (
    <>
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "Cristina Holística",
            "description": "Terapias holísticas: Reiki, Flores de Bach, Yoga, Ayurveda",
            "url": "https://tudominio.com",
            "telephone": "+56-9-1234-5678",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Santiago",
              "addressCountry": "CL"
            },
            "priceRange": "$$"
          })
        }}
      />

      {/* HEADER */}
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
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* MOBILE MENU */}
      <nav 
        className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Menú móvil"
      >
        <button onClick={() => setMobileMenuOpen(false)} className="mobile-nav-close">
          &times;
        </button>
        <NavLink href="#inicio" onClick={() => setMobileMenuOpen(false)}>Inicio</NavLink>
        <NavLink href="#terapias" onClick={() => setMobileMenuOpen(false)}>Terapias</NavLink>
        <NavLink href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre Mí</NavLink>
        <NavLink href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</NavLink>
        <NavLink href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</NavLink>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero diagonal" id="inicio">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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

            <h1 className="mobile-title">Conecta con tu Esencia Divina</h1>
            <h1 className="visually-hidden">Cristina Holística - Terapias para el Alma</h1>
            
            <motion.p 
              style={{
                fontSize: '1.5rem',
                color: 'var(--accent-color)',
                margin: '2rem 0 1.5rem 0',
                letterSpacing: '0.2em'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              --- ❖ ---
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Un viaje de sanación para el alma, donde la naturaleza y tu mundo interior se encuentran.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <NavLink href="#contacto" className="btn">
                Despierta tu Luz Interior
              </NavLink>
            </motion.div>
          </motion.div>
        </section>

        {/* INTRO */}
        <section className="intro" id="intro">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>¿Anhelas Paz en un Mundo Ajetreado?</h2>
            <p>La desconexión espiritual y el estrés son el velo que oculta tu verdadera esencia. Te ofrezco un santuario para el alma, un espacio para meditar, sanar y redescubrir la serenidad que ya habita en ti.</p>
            <NavLink href="#terapias">Encuentra tu Terapia &rarr;</NavLink>
          </motion.div>
        </section>

        {/* TERAPIAS */}
        <section className="terapias diagonal" id="terapias">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Caminos hacia tu Bienestar</h2>
            <p className="subtitle">Terapias que nutren el alma y equilibran tu energía.</p>
            
            <div className="cards">
              {terapiasOrdenadas.map((terapia, index) => (
                <TerapiaCard 
                  key={terapia.id} 
                  terapia={terapia} 
                  onVerMas={handleVerMasTerapia}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* SOBRE MÍ */}
        <section className="sobre" id="sobre">
          <motion.div 
            style={{display: 'contents'}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/cristina-meditando.jpg" 
              alt="Cristina meditando en la orilla de un río"
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
          </motion.div>
        </section>

        {/* TESTIMONIOS */}
        <section className="testimonios diagonal" id="testimonios">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ecos del Alma</h2>
            <p className="subtitle">Transformaciones reales de personas como tú</p>
            
            <div className="testimonios-grid">
              {TESTIMONIOS_DESTACADOS.map((testimonio, index) => (
                <TestimonioCard 
                  key={testimonio.id} 
                  testimonio={testimonio}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="faq-section" id="faq">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Preguntas Frecuentes</h2>
            <p className="subtitle">Todo lo que necesitas saber antes de iniciar tu viaje</p>
            <FAQ />
          </motion.div>
        </section>

        {/* BLOG */}
        <section className="blog" id="blog">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Senderos de Sabiduría</h2>
            <p className="subtitle">Inspiración para tu práctica diaria.</p>
            <div className="blog-cards">
              {BLOG_POSTS.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* CONTACTO */}
        <section className="contacto diagonal" id="contacto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Da el Primer Paso hacia tu Interior</h2>
            <p>Tu viaje de sanación comienza con una simple intención. Estoy aquí para escucharte y guiarte.</p>
            
            <motion.a 
              href={getWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-main btn-whatsapp-hero"
              onClick={() => eventos.clickWhatsApp('seccion-contacto')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
              Agendar mi Sesión por WhatsApp
            </motion.a>
            
            <p style={{marginTop: '30px', marginBottom: '20px', fontSize: '1.1rem'}}>
              O déjame un mensaje:
            </p>
            
            <FormularioContacto terapiaPreseleccionada={terapiaParaFormulario} />
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
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
      <motion.a
        href={getWhatsAppURL()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        onClick={() => eventos.clickWhatsApp('boton-flotante')}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Modal de terapia */}
      {modalTerapia && (
        <ModalTerapia 
          terapia={modalTerapia}
          onClose={() => setModalTerapia(null)}
          onReservar={handleReservarTerapia}
        />
      )}
    </>
  );
}