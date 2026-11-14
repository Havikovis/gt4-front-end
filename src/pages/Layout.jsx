import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';

// Layout compartilhado: Header, conteudo da pagina (children) e Footer
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
