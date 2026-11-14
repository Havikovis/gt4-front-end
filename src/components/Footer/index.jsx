import Logo from '../Logo/index.jsx';
import FooterInfo from '../FooterInfo/index.jsx';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import styles from './Footer.module.css';

const infoLinks = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/jobs' },
  { text: 'Meus Pedidos', link: '/orders' },
];

const categoryLinks = [
  { text: 'Camisetas', link: '/products?filter=Camisetas' },
  { text: 'Calças', link: '/products?filter=Calças' },
  { text: 'Bonés', link: '/products?filter=Bonés' },
  { text: 'Headphones', link: '/products?filter=Headphones' },
  { text: 'Tênis', link: '/products?filter=Tênis' },
];

const socials = [
  { name: 'Facebook', icon: facebook, href: 'https://www.facebook.com' },
  { name: 'Instagram', icon: instagram, href: 'https://www.instagram.com' },
  { name: 'Twitter', icon: twitter, href: 'https://twitter.com' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.columns}>
          <div className={styles.brand}>
            <Logo variant="footer" width={253} height={44} />
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className={styles.socials}>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt="" height={20} />
                </a>
              ))}
            </div>
          </div>

          <FooterInfo title="Informação" informations={infoLinks} />
          <FooterInfo title="Categorias" informations={categoryLinks} />

          <div className={styles.contact}>
            <h3 className={styles.contactTitle}>Contato</h3>
            <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
            <p>(85) 3051-3411</p>
          </div>
        </div>

        <hr className={styles.divider} />
        <p className={styles.copyright}>© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  );
}
