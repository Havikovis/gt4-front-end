import starIcon from '../../assets/star-icon.svg';
import styles from './BuyBox.module.css';

// Preco da pagina de produto no formato do Figma: R$ 219,00 (inteiro grande, centavos menores)
function Price({ value, small = false }) {
  const [integer, cents] = Number(value).toFixed(2).split('.');
  if (small) return <span className={styles.oldPrice}>{`${integer},${cents}`}</span>;
  return (
    <span className={styles.price}>
      <span className={styles.currency}>R$</span>
      <span className={styles.integer}>{integer}</span>
      <span className={styles.cents}>,{cents}</span>
    </span>
  );
}

// name, reference, stars, rating, price, priceDiscount, description e children (ex.: ProductOptions)
export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
  onBuy,
}) {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;
  return (
    <div className={styles.buyBox}>
      <h1 className={styles.name}>{name}</h1>
      {reference && <p className={styles.reference}>Ref: {reference}</p>}

      {(stars !== undefined || rating !== undefined) && (
        <div className={styles.ratingRow}>
          {stars !== undefined && (
            <span className={styles.stars}>
              {stars}
              <img src={starIcon} alt="estrelas" width={16} height={16} />
            </span>
          )}
          {rating !== undefined && <span className={styles.rating}>({rating} avaliações)</span>}
        </div>
      )}

      <p className={styles.prices}>
        {hasDiscount ? (
          <>
            <Price value={priceDiscount} />
            <Price value={price} small />
          </>
        ) : (
          <Price value={price} />
        )}
      </p>

      {description && (
        <div className={styles.description}>
          <h2 className={styles.descriptionTitle}>Descrição do produto</h2>
          <p>{description}</p>
        </div>
      )}

      {children}

      <button type="button" className={styles.buy} onClick={onBuy}>
        COMPRAR
      </button>
    </div>
  );
}
