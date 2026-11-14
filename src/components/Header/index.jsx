import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Logo from '../Logo/index.jsx';
import miniCart from '../../assets/mini-cart.svg';
import styles from './Header.module.css';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Produtos' },
  { to: '/categories', label: 'Categorias' },
  { to: '/orders', label: 'Meus Pedidos' },
];

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="#8F8F8F" strokeWidth="2" />
      <path d="M15.5 15.5L21 21" stroke="#8F8F8F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get('filter') ?? '');
  const [menuOpen, setMenuOpen] = useState(false);

  // fecha o menu mobile ao trocar de rota
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const filter = query.trim();
    navigate(filter ? `/products?filter=${encodeURIComponent(filter)}` : '/products');
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.top}`}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={styles.logo}>
          <Logo />
        </div>

        <form className={styles.search} onSubmit={handleSubmit} role="search">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Pesquisar produto..."
            aria-label="Pesquisar produto"
          />
          <button type="submit" aria-label="Buscar">
            <SearchIcon />
          </button>
        </form>

        <div className={styles.auth}>
          <Link to="/signup" className={styles.signup}>
            Cadastre-se
          </Link>
          <Link to="/login" className={styles.login}>
            Entrar
          </Link>
        </div>

        <Link to="/cart" className={styles.cart} aria-label="Carrinho de compras">
          <img src={miniCart} alt="" width={24} height={25} />
        </Link>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Navegação principal">
        <ul className={`container ${styles.navList}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className={styles.authMobile}>
            <Link to="/signup" className={styles.signup}>
              Cadastre-se
            </Link>
            <Link to="/login" className={styles.login}>
              Entrar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
