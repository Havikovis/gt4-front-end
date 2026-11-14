import ProductCard from '../ProductCard/index.jsx';
import styles from './ProductListing.module.css';

// products: [{ id?, name, image, price, priceDiscount? }]. columns controla a grade no desktop.
export default function ProductListing({ products = [], columns = 4 }) {
  return (
    <div className={styles.grid} style={{ '--columns': columns }}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id ?? `${product.name}-${index}`}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
          category={product.category}
        />
      ))}
    </div>
  );
}
