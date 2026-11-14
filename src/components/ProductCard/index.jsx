import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { formatPrice as money } from '../../utils/price.js';

// image (ou imagem), name, price, priceDiscount. id, category e href sao opcionais.
export default function ProductCard({ id, image, imagem, name, price, priceDiscount, category }) {
  const src = image ?? imagem;
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;
  const percent = hasDiscount ? Math.round((1 - priceDiscount / price) * 100) : 0;

  const content = (
    <>
      <div className={styles.imageBox}>
        {hasDiscount && percent > 0 && <span className={styles.badge}>{percent}% OFF</span>}
        <img className={styles.image} src={src} alt={name} width={292} height={321} />
      </div>
      {category && <span className={styles.category}>{category}</span>}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.prices}>
        {hasDiscount ? (
          <>
            <span className={styles.oldPrice}>{money(price)}</span>
            <span className={styles.price}>{money(priceDiscount)}</span>
          </>
        ) : (
          <span className={styles.price}>{money(price)}</span>
        )}
      </p>
    </>
  );

  return id !== undefined ? (
    <Link to={`/product/${id}`} className={styles.card}>
      {content}
    </Link>
  ) : (
    <div className={styles.card}>{content}</div>
  );
}
