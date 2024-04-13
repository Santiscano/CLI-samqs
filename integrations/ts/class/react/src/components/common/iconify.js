
export const createIconify = () => {
  const data = `import { forwardRef, ForwardRefRenderFunction } from 'react';
import { Icon } from '@iconify/react';

import Box from '@mui/material/Box';

interface IconifyProps {
  icon: string;
  color?: string;
  sx?: React.CSSProperties;
  width?: number;
}

const Iconify: ForwardRefRenderFunction<HTMLDivElement, IconifyProps> = (
  { icon, width = 20, color, sx, ...other },
  ref
) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, color, ...sx }}
    {...other}
  />
);

export default forwardRef(Iconify);
`;
  return data;
}
