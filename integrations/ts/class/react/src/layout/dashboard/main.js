
export const createMainDashboard = () => {
  const data = `import { CSSProperties, ReactNode } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import { useResponsive } from '../../hooks/useResponsive';
import { HEADER } from './configLayout';
import { useLayoutContext } from '../../context/LayoutContext';

// ----------------------------------------------------------------------

interface MainProps {
  children?: ReactNode;
  sx?: CSSProperties;
}

const SPACING = 8;

export default function Main({ children, sx, ...other }: MainProps) {
  const lgUp = useResponsive('up', 'lg');

  const { sidebarConf } = useLayoutContext()

  return (
    <Box
      component="main"
      sx={{
        // flexGrow: 1,
        // minHeight: 1,
        // display: 'flex',
        // flexDirection: 'column',
        // py: \`\${HEADER.H_MOBILE + SPACING}px\`,
        // ...(lgUp && {
        //   px: 2,
        //   py: \`\${HEADER.H_DESKTOP + SPACING}px\`,
        //   width: \`calc(100% - \${sidebarConf.WIDTH}px)\`,
        // }),
        // ...sx,
      }}
      // {...other}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
`;
  return data;
}
