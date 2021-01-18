import Prism from '@theme-ui/prism';

import * as ShortCodes from '../mdx-shortcodes/';

export default {
  pre: (props) => props.children,
  code: Prism,
  ...ShortCodes,
};
