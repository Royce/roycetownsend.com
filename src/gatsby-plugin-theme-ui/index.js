import syntaxHighlighting from '@theme-ui/prism/presets/night-owl.json';

export default {
  breakpoints: ['40em', '56em', '64em'],
  sizes: {
    container: '60em',
  },
  layout: {
    container: {
      px: [2, 4],
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    moonospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#454f5b',
    background: '#fff',
    primary: '#5c6ac4',
    secondary: '#006fbb',
    highlight: '#47c1bf',
    muted: '#ddd',
    gray: '#dfe3e8',
    accent: '#f49342',
    darken: '#00044c',
    modes: {
      dark: {
        text: '#bbb',
        background: '#011627',
        primary: '#7c7ade',
        secondary: '#309fff',
        highlight: '#b7ecec',
        muted: '#444',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      backgroundColor: 'secondary',
      color: 'background',
      mx: -2,
      p: 2,
      my: 0,
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'text',
      fontSize: 5,
      letterSpacing: 2,
      wordSpacing: 8,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    navlink: {
      color: 'text',
      fontWeight: 'heading',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      mx: -2,
      px: 2,
      py: 1,
      code: {
        color: 'inherit',
      },
    },
    code: {
      borderColor: 'muted',
      borderWidth: 0,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderStyle: 'solid',
      ...syntaxHighlighting,
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
    blockquote: {
      borderLeftColor: 'primary',
      borderLeftWidth: 4,
      borderLeftStyle: 'solid',
      m: 0,
      px: 4,
    },
  },
  badges: {
    tag: {
      borderRadius: 4,
      px: 2,
      color: 'text',
      backgroundColor: 'muted',
      ':hover,:focus': {
        color: 'background',
        backgroundColor: 'secondary',
      },
    },
  },
};
