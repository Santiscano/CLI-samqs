
export const createIndexSidebar = () => {
  const data = `import { Avatar, Box, ListItemButton, Stack, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Sidebar } from 'react-pro-sidebar';


import Logo from '../../../components/common/Logo';
import { RouterLink } from '../../../components/tools/RouterLink';
import { useLayoutContext } from '../../../context/LayoutContext';
import { usePathname } from '../../../hooks/routes/usePathName';
import { useResponsive } from '../../../hooks/useResponsive';
import { userSession } from '../../../../mock';

import ListSidebarAllowed from './common/ListSidebar';
import { Drawer } from './components/Drawer';

const SidebarLayout = () => {

  // *hooks
  const theme = useTheme()
  const upLg = useResponsive('up', 'lg');
  const { openSidebar, toggleSidebar } = useLayoutContext();

  const AvatarRender = (
    <Box mb="25px" sx={{ padding: "1.3rem 1.5rem" }}>

      <Box display="flex" mb="0.5rem">
        <Logo color={theme.palette.primary} />
        <Box sx={{ flexGrow: 1 }} />
      </Box>


      {openSidebar && (
        <>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar
              src={userSession.photoURL}
              alt={userSession.displayName}
              sx={{
                width: 90,
                height: 90,
                cursor: "pointer",
                borderRadius: "50%"
              }}
            />
          </Box>

          <Box textAlign="center">
            <Typography
              variant='subtitle2'
              color={theme.palette.text.primary}
              fontWeight="bold"
              sx={{ m: "10px 0 0 0" }}
            >
              {userSession.displayName}
            </Typography>
            <Typography
              variant='body2'
              color={theme.palette.text.secondary}
            >
              {userSession.email}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );


  const renderContentSidebar = (
    <>
      {AvatarRender}

      {/* lista de items */}
      <Stack component="nav" spacing={0.5} sx={{ px: openSidebar ? 2 : 1 }}>
        <ListSidebarAllowed />
      </Stack>

      <Box paddingX=".5rem" mt="3rem">

      </Box>
    </>
  )

  return (
    <>
      {upLg ? (
        <Drawer variant='permanent' open={openSidebar}>
          {renderContentSidebar}
        </Drawer>
      ) : (
        <Sidebar
          toggled={openSidebar}
          onBackdropClick={toggleSidebar}
          breakPoint='always'
          backgroundColor={theme.palette.background.default}
          width='280px'
          style={{ zIndex: 9999, border: "none" }}
        >
          {renderContentSidebar}
        </Sidebar>
      )}
    </>
  )
}

export default SidebarLayout


// -----------------------------------------------------
interface NavItemProps {
  item: {
    path: string;
    icon: React.ReactNode;
    title: string;
  };
}

function NavItem({ item }: NavItemProps): JSX.Element {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
`;
  return data;
}
