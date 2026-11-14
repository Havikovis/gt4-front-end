import { Link } from 'react-router-dom';
import styles from './FooterInfo.module.css';

// title e informations: [{ text, link }] renderizados dinamicamente
export default function FooterInfo({ title, informations = [] }) {
  return (
    <div className={styles.info}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {informations.map((item) => (
          <li key={item.text}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
