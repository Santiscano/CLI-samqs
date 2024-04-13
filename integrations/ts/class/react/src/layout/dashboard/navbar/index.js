
export const createIndexNavbar = () => {
  const data = `
import { Box, Stack, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

import { HiOutlineChatAlt2, HiOutlineCog, HiOutlineMenuAlt1, HiOutlineSearch } from "react-icons/hi";

import { useLayoutContext } from '../../../context/LayoutContext';
import { useResponsive } from '../../../hooks/useResponsive';
import AccountPopover from './components/AccountPopover';
import { AppBar, AppBarStyled } from './components/Appbar';
import LanguagePopover from './components/LanguagePopover';
import ModeToggle from './components/ModeToggle';
import NotificationsPopover from './components/NotificationsPopover';
import PaletteColorPopover from './components/PaletteColorPopover';
import SearchBar from './components/SearchBar';


const Navbar = () => {

  // *hooks
  const { openSidebar, toggleSidebar } = useLayoutContext();

  // *vars
  const handleOpenMenu = () => toggleSidebar();

  // *validar mediaquery
  const upLg = useResponsive('up', 'lg');
  const theme = useTheme();
  const primary = theme.palette.grey[500];
  const size = 25;

  // *render
  const renderContent = (
    <Toolbar>
      <IconButton
        aria-label="open drawer"
        onClick={handleOpenMenu}
        edge="start"
        sx={{ marginRight: 5 }}
      >
        <HiOutlineMenuAlt1 color={theme.palette.grey[500]} cursor='pointer'  fontSize={25}/>
      </IconButton>

      <SearchBar />

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1} gap={1.2}>
        <ModeToggle />
        <LanguagePopover />
        <PaletteColorPopover />


        <NotificationsPopover />
        <AccountPopover />



        <HiOutlineChatAlt2 color={primary} cursor='pointer' fontSize={size} />
        <HiOutlineCog color={primary} cursor='pointer' fontSize={size} />
        <HiOutlineSearch color={primary} cursor='pointer' fontSize={size} />
      </Stack>
    </Toolbar>
  );

  return (
    <>
      {upLg ? (
        // @ts-ignore
        <AppBar position='fixed' open={openSidebar}>
          {renderContent}
        </AppBar>
      ) : (
        <AppBarStyled>
          {renderContent}
        </AppBarStyled>
      )}
    </>
  )
}

export default Navbar
`;
  return data;
}
