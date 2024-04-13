
export const createSidebarLayout2 = () => {
  const data = `import { FC, ReactNode, useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { HiOutlineMenu } from 'react-icons/hi';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import Logo from '../../components/common/Logo';
import { useLayoutContext } from '../../context/LayoutContext';
import { useResponsive } from '../../hooks/useResponsive';

import { userSession } from '../../../mock';

const SidebarLayout = () => {
  const upLg = useResponsive('up', 'lg');

  const { openSidebar: collapsed, toggleSidebar: toggleCollapsed, sidebarConf } = useLayoutContext();
  const handleOpenMenu = () => toggleCollapsed();

  const theme = useTheme();

  const [selected, setSelected] = useState("Project")

  const avatarRender = (
    <Box mb="25px" sx={{ padding: "1.3rem 1.5rem" }}>

      <Box display="flex" mb="0.5rem">
        <Logo color={theme.palette.primary}/>
        <Box sx={{ flexGrow: 1 }} />
        {/* <HiOutlineMenu
          color={theme.palette.grey[100]}
          cursor='pointer'
          fontSize={20}
          onClick={handleOpenMenu}
        /> */}
      </Box>


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
    </Box>
  );

  const renderSidebar = (
    <>
      {avatarRender}

      <Box paddingX=".5rem" mt="3rem">
        <Menu
          menuItemStyles={{
            button: ({ active }) => ({
              color: active ? theme.palette.primary.main : theme.palette.text.secondary,
              // @ts-ignore
              backgroundColor: active ? theme.palette.background.neutral : "transparent",
              borderRadius: 12,
              paddingLeft: "10px",
              '&:hover': {
                backgroundColor: theme.palette.grey[200],
              },
            })
          }}
        >

          <ListItemTitle
            title='DASHBOARDS'
            description='Unique dashboard designs'
          />

          <Item
            title='Project'
            to='/dashboards/project'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Analitics'
            to='/dashboards/analitics'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Finance'
            to='/dashboards/finance'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Crypto'
            to='/dashboards/crypto'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='Booking'
            to='/dashboards/booking'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />


          <ListItemTitle
            title='APPLICATIONS'
            description='Custom made application designs'
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title='File'
            to='/dashboards/file'
            icon={<HiOutlineMenu />}
            selected={selected}
            setSelected={setSelected}
          />



          <ListItemTitle
            title='PAGES'
            description='Custom made page designs'
          />

        </Menu>
      </Box>
    </>
  )

  return (
    <>
      {upLg ? (
        <Sidebar
          collapsed={collapsed}
          collapsedWidth={\`\${sidebarConf.COLLAPSEDWIDTH}px\`}
          backgroundColor={theme.palette.background.default}
          width={\`\${sidebarConf.WIDTH}px\`}
          transitionDuration={theme.transitions.duration.enteringScreen}
          style={{ borderColor: theme.palette.common.black }}
        >
          {renderSidebar}
        </Sidebar>
      ) : (
        <Sidebar
          onBackdropClick={handleOpenMenu}
          toggled={!collapsed}
          breakPoint="always"
          backgroundColor={theme.palette.background.default}
          width={\`\${sidebarConf.WIDTH}px\`}
          transitionDuration={theme.transitions.duration.enteringScreen}
          style={{ borderColor: theme.palette.common.black , zIndex: 9999 }}
        >
          {renderSidebar}
        </Sidebar>
      )}
    </>
  )

  return (
    <Sidebar
      collapsed={collapsed}
      collapsedWidth={\`\${sidebarConf.COLLAPSEDWIDTH}px\`}
      // collapsedWidth={\`0px\`}
      backgroundColor={theme.palette.common.black}
      width={\`\${sidebarConf.WIDTH}px\`}
      transitionDuration={theme.transitions.duration.enteringScreen}
      style={{ borderColor: theme.palette.common.black }}
      breakPoint='md'
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: sidebarConf.WIDTH,
            borderRight: (theme) => \`dashed 1px \${theme.palette.divider}\`,
          }}
        >
          { }
        </Box>
      ) : (
        <Drawer
          // open={openNav}
          // onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: sidebarConf.WIDTH,
            },
          }}
        >
          { }
        </Drawer>
      )}
    </Sidebar>
  )
}

export default SidebarLayout

interface ListItemTitleProps {
  title: string;
  description: string;
}
const ListItemTitle: FC<ListItemTitleProps> = ({ title, description }) => {
  const theme = useTheme();

  return (
    <Box paddingX="1.5rem" mb=".7rem" mt="2rem">
      <Typography
        fontSize={12}
        fontWeight='bold'
        color={theme.palette.primary.main}
      >
        {title}
      </Typography>
      <Typography
        variant='caption'
        color={theme.palette.grey[500]}
      >
        {description}
      </Typography>
    </Box>
  )
};

interface ItemProps {
  title: string;
  to: string;
  icon: ReactNode;
  selected: any;
  setSelected: any;
}
const Item: FC<ItemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography
        variant='body2'
      >{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
};
`;
  return data;
}
