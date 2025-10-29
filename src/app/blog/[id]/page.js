import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '../posts'; // Importamos los posts
import { notFound } from 'next/navigation';

// Componente para renderizar el contenido del blog con párrafos
function BlogPostContent({ content }) {
    const paragraphs = content.split('\n').filter(p => p.trim() !== '');
    return (
        <div className="post-body">
            {paragraphs.map((p, index) => {
                if (p.startsWith('✨') || p.startsWith('💛🙏')) {
                    return <p key={index} className="highlight">{p}</p>;
                }
                return <p key={index}>{p}</p>;
            })}
        </div>
    );
}

export default function BlogPostPage({ params }) {
  const { id } = params;
  const post = BLOG_POSTS.find(p => p.id === id);

  // Si el post no se encuentra, muestra la página 404 de Next.js
  if (!post) {
    notFound();
  }

  return (
    <div className="post-container">
        <header className="post-page-header">
            <Link href="/#blog" className="back-link">&larr; Volver al Blog</Link>
        </header>
        
        <div className="post-layout-grid">
            <article className="post-text-column">
                <h1 className="post-title">{post.titulo}</h1>
                <main className="post-main-content">
                    <BlogPostContent content={post.content} />
                </main>
            </article>

            <aside className="post-image-column">
                <div className="post-image-container-sticky">
                    <Image 
                        src={post.imagen}
                        alt={post.alt}
                        fill
                        style={{ objectFit: 'cover', borderRadius: '20px' }}
                        priority
                    />
                </div>
            </aside>
        </div>

        <footer className="post-footer">
             <p className="post-closing-quote">Que tu viaje interior te llene de luz.</p>
        </footer>
    </div>
  );
}
