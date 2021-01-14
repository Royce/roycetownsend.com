/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from '../components/layout';

// markup
const IndexPage: React.FC = () => {
  return (
    <Layout>
      <h1>Heading</h1>
      <p>
        Paragraph in <code>/index.tsx</code>
      </p>
      <h2>Heading</h2>
    </Layout>
  );
};

export default IndexPage;
