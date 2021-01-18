/** @jsx jsx */
/* global process */
import { Badge, Button, jsx, useColorMode } from 'theme-ui';

const ToggleColorModeButton: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    process.env.NODE_ENV === 'development' && (
      <Button
        px={2}
        py={0}
        backgroundColor="muted"
        color="text"
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
        }}
      >
        {colorMode === 'default' ? 'Dark' : 'Light'}
      </Button>
    )
  );
};
export default ToggleColorModeButton;
