import { Link, useParams } from 'react-router-dom';
import Layout from './Layout.jsx';
import Gallery from '../components/Gallery/index.jsx';
import BuyBox from '../components/BuyBox/index.jsx';
import ProductOptions from '../components/ProductOptions/index.jsx';
import Section from '../components/Section/index.jsx';
import ProductListing from '../components/ProductListing/index.jsx';
import { getProduct, productImages, products } from '../data/products.js';
import styles from './ProductViewPage.module.css';

export default function ProductViewPage() {
  const { id } = useParams();
  const product = getProduct(id);

  if (!product) {
    return (
      <Layout>
        <div className={`container ${styles.notFound}`}>
          <h1>Produto não encontrado</h1>
          <Link to="/products">Ver todos os produtos</Link>
        </div>
      </Layout>
    );
  }

  const recommended = products.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div className={`container ${styles.page}`}>
        <nav className={styles.breadcrumb} aria-label="Você está em">
          <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> /{' '}
          <Link to={`/products?filter=${encodeURIComponent(product.type)}`}>{product.type}</Link> / {product.name}
        </nav>

        <div className={styles.product}>
          <Gallery images={productImages} width="700" height="570" radius="4px" showThumbs />

          <BuyBox
            name={product.name}
            reference={product.reference}
            stars={product.stars}
            rating={product.rating}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description={product.description}
          >
            <div className={styles.optionGroup}>
              <h2>Tamanho</h2>
              <ProductOptions options={product.sizes} shape="square" radius="4px" type="text" />
            </div>
            <div className={styles.optionGroup}>
              <h2>Cor</h2>
              <ProductOptions options={product.colors} shape="circle" type="color" />
            </div>
          </BuyBox>
        </div>

        <div className={styles.recommended}>
          <Section
            title="Produtos recomendados"
            titleAlign="left"
            link={{ text: 'Ver todos', href: '/products' }}
          >
            <ProductListing products={recommended} columns={4} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}
