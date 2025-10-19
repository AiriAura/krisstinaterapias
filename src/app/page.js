"use client";
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const header = document.getElementById('header');
    const heroSection = document.getElementById('inicio');
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mobileNavMenu = document.getElementById('mobile-nav-menu');
    const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav-menu a');
    const sections = document.querySelectorAll('section[id]');
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    function handleScroll() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            header.classList.add('scrolled');
            header.classList.remove('at-top');
        } else {
            header.classList.remove('scrolled');
            header.classList.add('at-top');
        }

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollPosition >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
        
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 100 && rect.bottom >= 0) {
                el.classList.add('is-visible');
            }
        });
    }

    mobileNavToggle.addEventListener('click', () => {
        mobileNavToggle.classList.toggle('active');
        mobileNavMenu.classList.toggle('open');
    });

    mobileNavMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNavToggle.classList.remove('active');
            mobileNavMenu.classList.remove('open');
        });
    });

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
<header id="header" className="at-top">
  <a href="#inicio" className="logo">🌿 Cristina Holística</a>
  
  <nav className="desktop-nav">
    <a href="#inicio">Inicio</a>
    <a href="#terapias">Terapias</a>
    <a href="#sobre">Sobre Mí</a>
    <a href="#blog">Blog</a>
    <a href="#contacto" className="btn">Contacto</a>
  </nav>

  <div className="mobile-nav-toggle" id="mobile-nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </div>
</header>

<nav className="mobile-nav-menu" id="mobile-nav-menu">
    <a href="#inicio">Inicio</a>
    <a href="#terapias">Terapias</a>
    <a href="#sobre">Sobre Mí</a>
    <a href="#blog">Blog</a>
    <a href="#contacto">Contacto</a>
</nav>

<main>
    <section className="hero diagonal" id="inicio">
      <div className="hero-content">
        <svg viewBox="0 0 900 300" width="900" height="300" style={{overflow: 'visible'}}>
            <path id="curve" d="M 0, 150 C 250, 50, 650, 50, 900, 150" fill="transparent"/>
            <text className="curved-title">
                <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                    Conecta con tu Esencia Divina
                </textPath>
            </text>
        </svg>
        <p>Un viaje de sanación para el alma, donde la naturaleza y tu mundo interior se encuentran.</p>
        <a href="#contacto" className="btn">Despierta tu Luz Interior</a>
      </div>
    </section>

    <section className="intro" id="intro">
        <div className="reveal-on-scroll">
            <h2>¿Anhelas Paz en un Mundo Ajetreado?</h2>
            <p>La desconexión espiritual y el estrés son el velo que oculta tu verdadera esencia. Te ofrezco un santuario para el alma, un espacio para meditar, sanar y redescubrir la serenidad que ya habita en ti.</p>
            <a href="#terapias">Encuentra tu Terapia &rarr;</a>
        </div>
    </section>

    <section className="terapias diagonal" id="terapias">
        <div className="reveal-on-scroll">
            <h2>Caminos hacia tu Bienestar</h2>
            <p className="subtitle">Terapias que nutren el alma y equilibran tu energía.</p>
            <div className="cards">
                <div className="card">
                  <Image src="https://images.unsplash.com/photo-1544164559-90f4302d7142?auto=format&fit=crop&w=500&q=80" alt="Manos luminosas ofreciendo sanación Reiki, con una flor de loto de fondo." width={500} height={300} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                  <div className="card-content">
                    <h3>Reiki y Sanación con Loto</h3>
                    <p>Canaliza la energía universal para purificar tu campo energético, liberar bloqueos y florecer como el loto.</p>
                    <div className="card-info">
                        <span className="price">60 min / 55€</span>
                        <a href="#contacto" className="btn-reservar">Reservar</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <Image src="https://images.unsplash.com/photo-1604079339391-53e79e6c8672?auto=format&fit=crop&w=500&q=80" alt="Jardín Zen con bambú, piedras y aceites esenciales para aromaterapia." width={500} height={300} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                  <div className="card-content">
                    <h3>Aromaterapia Búdica</h3>
                    <p>Una meditación olfativa con aceites sagrados que te transportan a un estado de calma y claridad mental.</p>
                    <div className="card-info">
                        <span className="price">45 min / 45€</span>
                        <a href="#contacto" className="btn-reservar">Reservar</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <Image src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=500&q=80" alt="Silueta de una persona meditando al amanecer frente a un paisaje montañoso." width={500} height={300} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                  <div className="card-content">
                    <h3>Yoga y Meditación Guiada</h3>
                    <p>Unión de cuerpo y espíritu a través de posturas suaves y meditación para encontrar tu centro y tu paz interior.</p>
                    <div className="card-info">
                        <span className="price">75 min / 25€</span>
                        <a href="#contacto" className="btn-reservar">Consultar</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>

    <section className="sobre" id="sobre">
        <div className="reveal-on-scroll" style={{display: 'contents'}}>
            <Image src="https://images.unsplash.com/photo-1593811167563-a7c379a11470?auto=format&fit=crop&w=500&q=80" alt="Retrato sereno de Cristina, la terapeuta, en un entorno natural y luminoso." width={500} height={500} style={{borderRadius: '25px', width: '100%', height: 'auto', objectFit: 'cover'}} />
            <div>
                <h2>Mi Dharma: Ser un Faro en tu Camino</h2>
                <p>Mi viaje espiritual me ha enseñado que la verdadera sanación nace de la compasión y la conexión. Mi propósito, mi dharma, es guiarte con herramientas ancestrales y una profunda intuición para que recuerdes la luz y la sabiduría que ya residen en ti.</p>
                <p>Formada en [Tu Certificación Espiritual] y como Maestra de Reiki, mi enfoque es puramente holístico, honrando la unión inseparable de tu cuerpo, tu mente y tu espíritu divino.</p>
                <a href="#contacto" className="btn">Inicia tu Viaje Conmigo</a>
            </div>
        </div>
    </section>

    <section className="testimonios diagonal" id="testimonios">
        <div className="reveal-on-scroll">
            <h2>Ecos del Alma</h2>
            <div className="testimonial">
                <Image src="https://randomuser.me/api/portraits/women/47.jpg" alt="Foto de una clienta sonriendo serenamente" width={80} height={80} style={{borderRadius: '50%', marginBottom: '15px', border: '3px solid var(--pink-accent)'}}/>
                <p>"Las sesiones con Cristina son un regalo para el alma. He conectado con una parte de mí que estaba dormida. Su energía es pura y su guía, un mapa hacia la paz interior."</p>
                <cite>- Elena R., Buscadora Espiritual</cite>
            </div>
        </div>
    </section>

    <section className="blog" id="blog">
        <div className="reveal-on-scroll">
            <h2>SENDEROS DE SABIDURÍA</h2>
            <p className="subtitle">Inspiración para tu práctica diaria.</p>
            <div className="blog-cards">
                <div className="blog-card">
                  <Image src="https://images.unsplash.com/photo-1476611338395-5f9b92402517?auto=format&fit=crop&w=500&q=80" alt="Un camino en un bosque de bambú iluminado por el sol." width={500} height={300} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                  <div className="blog-card-content">
                    <h3>El Arte del Desapego: Dejar Ir para Crecer</h3>
                    <p>Como los árboles sueltan sus hojas, nosotros también debemos aprender a soltar lo que ya no nos sirve.</p>
                    <a href="#">Leer más &rarr;</a>
                  </div>
                </div>
                <div className="blog-card">
                  <Image src="https://images.unsplash.com/photo-1598202391038-e52b204e3345?auto=format&fit=crop&w=500&q=80" alt="Piedras apiladas en equilibrio (cairn) en una playa serena." width={500} height={300} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                  <div className="blog-card-content">
                    <h3>Encuentra tu Centro: Rituales para el Equilibrio</h3>
                    <p>Pequeños actos diarios que pueden anclarte al presente y restaurar tu armonía interior.</p>
                    <a href="#">Leer más &rarr;</a>
                  </div>
                </div>
            </div>
        </div>
    </section>

    <section className="contacto diagonal" id="contacto">
        <div className="reveal-on-scroll">
            <h2>Da el Primer Paso hacia tu Interior</h2>
            <p>Tu viaje de sanación comienza con una simple intención. Estoy aquí para escucharte y guiarte.</p>
            <a href="#" className="btn btn-main">Agendar mi Sesión Sagrada</a>
            <p style={{marginTop: '20px'}}>Si tienes dudas o prefieres un primer contacto, puedes escribirme.</p>
            <form>
                <input type="text" placeholder="Tu Nombre" required />
                <input type="email" placeholder="Tu Email" required />
                <textarea placeholder="Tu mensaje..." rows="4" required></textarea>
                <button type="submit">Enviar Mensaje</button>
            </form>
        </div>
    </section>
</main>

<footer>
  &copy; 2025 Cristina Holística | Conecta con tu Esencia Divina
</footer>

    </>
  );
}
