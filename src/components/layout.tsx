/** @jsx jsx */
import { jsx } from 'theme-ui';
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
      }}
    >
      <div
        sx={{
          maxWidth: 768,
          mx: `auto`,
          px: 3,
        }}
      >
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export default Layout;
