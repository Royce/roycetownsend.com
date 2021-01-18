/** @jsx jsx */
import { Container, jsx } from 'theme-ui';
import Footer from './footer';
import Header from './header';

const Layout: React.FC = ({ children }) => (
  <div
    sx={{
      display: `flex`,
      flexDirection: `column`,
      minHeight: `100vh`,
    }}
  >
    <Header />
    <main
      sx={{
        width: `100%`,
        flex: `1 1 auto`,
        position: 'relative',
      }}
    >
      <Container>{children}</Container>
    </main>
    <Footer />
  </div>
);

export default Layout;
