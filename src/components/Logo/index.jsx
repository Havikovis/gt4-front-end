import { Link } from 'react-router-dom';
import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';
import styles from './Logo.module.css';

// variant: "header" (colorida) ou "footer" (branca). Tamanho original 253x44.
export default function Logo({ variant = 'header', width = 253, height = 44 }) {
  const src = variant === 'footer' ? logoFooter : logoHeader;
  return (
    <Link to="/" className={styles.logo} aria-label="Digital Store, página inicial">
      <img src={src} alt="Digital Store" width={width} height={height} />
    </Link>
  );
}
