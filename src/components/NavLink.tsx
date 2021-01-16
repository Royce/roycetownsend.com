/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';

export default function NavLink(props: {
  to: string;
  partiallyActive: boolean;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Link
      {...props}
      activeClassName="active"
      sx={{
        variant: 'styles.navlink',
        ml: 3,
        py: 2,
        color: 'inherit',
        '&.active': {
          color: 'primary',
        },
      }}
    />
  );
}
