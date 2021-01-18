/** @jsx jsx */
/* global process */
import { Styled, jsx } from 'theme-ui';

import Layout from 'src/components/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <Styled.h1>Page not found</Styled.h1>
      <p>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
      </p>
      {process.env.NODE_ENV === 'development' ? (
        <p>
          Try creating a page in <code>src/pages/</code>.
        </p>
      ) : null}
    </Layout>
  );
};

export default NotFoundPage;
