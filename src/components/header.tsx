/** @jsx jsx */
import { Link } from 'gatsby';
import { Container, Flex, jsx } from 'theme-ui';

import NavLink from './NavLink';
import ToggleColorModeButton from './ToggleColorModeButton';

const Header: React.FC = () => (
  <Container>
    <header sx={{ variant: 'styles.header' }}>
      <Flex sx={{ alignItems: 'baseline' }}>
        <Link
          to="/"
          sx={{
            variant: 'styles.navlink',
            fontSize: 4,
            py: [0, 2],
          }}
        >
          Royce Townsend
        </Link>
        <div sx={{ mx: 'auto' }}>
          <ToggleColorModeButton />
        </div>
        <NavLink to="/" partiallyActive={false}>
          About
        </NavLink>
        <NavLink to="/blog" partiallyActive={true}>
          Blog
        </NavLink>
      </Flex>
    </header>
  </Container>
);

export default Header;
