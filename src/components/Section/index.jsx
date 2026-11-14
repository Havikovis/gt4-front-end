import { Link } from 'react-router-dom';
import styles from './Section.module.css';

// title, titleAlign ("left" | "center"), link { text, href }, action (elemento a direita do titulo) e children
export default function Section({ title, titleAlign = 'left', link, action, children }) {
  const isInternal = link && link.href.startsWith('/');
  return (
    <section className={styles.section}>
      <header className={`${styles.header} ${titleAlign === 'center' ? styles.center : ''}`}>
        <h2 className={styles.title}>{title}</h2>
        {action}
        {link &&
          (isInternal ? (
            <Link className={styles.link} to={link.href}>
              {link.text}
            </Link>
          ) : (
            <a className={styles.link} href={link.href}>
              {link.text}
            </a>
          ))}
      </header>
      {children}
    </section>
  );
}
