
export const createTest3 = () => {
  const data = `import { styled, useTheme } from '@mui/material/styles';
import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { useResponsive } from "../../../hooks/useResponsive";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const drawerWidth = 240;
// @ts-ignore
const AppBarStyled = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: \`calc(100% - \${drawerWidth}px)\`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

// common header

const TestView = ({ open, handleDrawerToggle }:any) => {
  const theme = useTheme();
  const matchDownMD = useResponsive('up', 'lg');
  const iconBackColor = 'grey.100';
  const iconBackColorOpen = 'grey.200';

  const HeaderContent = (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      <IconButton
        component={Link}
        href="https://github.com/codedthemes/mantis-free-react-admin-template"
        target="_blank"
        disableRipple
        color="secondary"
        title="Download Free Version"
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      >
        <GithubOutlined />
      </IconButton>

      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  )

  const mainHeader = (
    <Toolbar>
      <IconButton
        disableRipple
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        edge="start"
        color="secondary"
        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor, ml: { xs: 0, lg: -2 } }}
      >
        {!open ? <HiOutlineChevronRight /> : <HiOutlineChevronLeft />}
      </IconButton>
      {HeaderContent}
    </Toolbar>
  );

  // app-bar params
  const appBar = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: \`1px solid \${theme.palette.divider}\`,
      // boxShadow: theme.customShadows.z1
    }
  };

  return (
    <>
      {!matchDownMD ? (
        // @ts-ignore
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        // @ts-ignore
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

export default TestView
`;
  return data;
}
