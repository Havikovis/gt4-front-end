import { Link } from 'react-router-dom';
import Layout from './Layout.jsx';
import styles from './ComingSoonPage.module.css';

export default function ComingSoonPage() {
  return (
    <Layout>
      <div className={`container ${styles.box}`}>
        <h1>Página em construção</h1>
        <p>Esta área da Drip Store ainda não está disponível.</p>
        <Link to="/" className={styles.button}>
          Voltar para a Home
        </Link>
      </div>
    </Layout>
  );
}
