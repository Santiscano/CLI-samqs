
export const createScrollbarIndex = () => {
  const data = `import { CSSProperties, forwardRef, memo, ReactNode, Ref } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import { StyledScrollbar, StyledRootScrollbar } from './style';

interface ScrollbarProps {
  children?: ReactNode;
  sx?: CSSProperties;
}

const Scrollbar = forwardRef(function Scrollbar(
  { children, sx, ...other }: ScrollbarProps,
  ref: Ref<HTMLDivElement>
) {
  const userAgent =
    typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );

  if (mobile) {
    return (
      <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <StyledRootScrollbar>
      <StyledScrollbar
        scrollableNodeProps={{
          ref,
        }}
        clickOnTrack={false}
        sx={sx}
        {...other}
      >
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
});

Scrollbar.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default memo(Scrollbar);
`;
  return data;
}
