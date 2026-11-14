import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout.jsx';
import Section from '../components/Section/index.jsx';
import ProductListing from '../components/ProductListing/index.jsx';
import { collections, heroSlides, products } from '../data/products.js';
import styles from './HomePage.module.css';

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const categories = [
  {
    name: 'Camisetas',
    icon: <path d="M8 4l-5 3 2 4 3-1v10h8V10l3 1 2-4-5-3a4 4 0 01-8 0z" {...strokeProps} />,
  },
  {
    name: 'Calças',
    icon: <path d="M7 3h10l1 18h-4l-2-10-2 10H6z" {...strokeProps} />,
  },
  {
    name: 'Bonés',
    icon: <path d="M4 15a8 8 0 0116 0M3 15h18M16 15h5" {...strokeProps} />,
  },
  {
    name: 'Headphones',
    icon: <path d="M4 15v-3a8 8 0 0116 0v3M4 15h3v5H5a1 1 0 01-1-1zm16 0h-3v5h2a1 1 0 001-1z" {...strokeProps} />,
  },
  {
    name: 'Tênis',
    icon: <path d="M3 15l4-1 3-5 3 2 3 1 5 2v3H3zM3 18h18" {...strokeProps} />,
  },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);

  return (
    <Layout>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className={styles.heroTag}>Melhores ofertas personalizadas</span>
            <h1>
              Queima de stoque Nike <span aria-hidden="true">🔥</span>
            </h1>
            <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
            <Link to="/products" className={styles.heroButton}>
              Ver Ofertas
            </Link>
          </div>
        </div>
        <div className={styles.heroImages}>
          {heroSlides.map((item, index) => (
            <img
              key={item.src}
              src={item.src}
              alt={item.alt}
              className={index === slide ? styles.heroImageActive : styles.heroImage}
              style={{ objectPosition: item.position }}
            />
          ))}
        </div>
        <div className={styles.dots} role="tablist" aria-label="Slides do destaque">
          {heroSlides.map((item, index) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={index === slide}
              aria-label={`Slide ${index + 1}`}
              className={index === slide ? styles.dotActive : styles.dot}
              onClick={() => setSlide(index)}
            />
          ))}
        </div>
      </section>

      <div className={`container ${styles.sections}`}>
        <Section title="Coleções em destaque" titleAlign="center">
          <div className={styles.collections}>
            {collections.map((collection) => (
              <div key={collection.src} className={styles.collection}>
                <img src={collection.src} alt={collection.alt} />
                <span className={styles.collectionBadge}>30% OFF</span>
                <Link to="/products" className={styles.collectionButton}>
                  Comprar
                </Link>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Coleções em destaque" titleAlign="center">
          <ul className={styles.categories}>
            {categories.map((category) => (
              <li key={category.name}>
                <Link to={`/products?filter=${encodeURIComponent(category.name)}`} className={styles.category}>
                  <span className={styles.categoryIcon}>
                    <svg width="44" height="44" viewBox="0 0 24 24" aria-hidden="true">
                      {category.icon}
                    </svg>
                  </span>
                  <span>{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Produtos em alta" titleAlign="left" link={{ text: 'Ver todos →', href: '/products' }}>
          <ProductListing products={products.slice(0, 8)} columns={4} />
        </Section>
      </div>

      <section className={styles.promo}>
        <div className={`container ${styles.promoInner}`}>
          <div className={styles.promoImage}>
            <img src="/produc-image-1.jpeg" alt="Air Jordan edição de colecionador" />
          </div>
          <div className={styles.promoText}>
            <span className={styles.promoTag}>Oferta especial</span>
            <h2>Air Jordan edição de colecionador</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <Link to="/product/5" className={styles.promoButton}>
              Ver Oferta
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
