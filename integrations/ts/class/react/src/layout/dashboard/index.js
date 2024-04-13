
export const createIndexDashboard = () => {
  const data = `
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

import { LayoutContextProvider } from '../../context/LayoutContext';
import Main from './Main';
import Navbar from './Navbar';
import SidebarLayout from './Sidebar';
import { DrawerHeader } from './Sidebar/components/Drawer';


const DashboardLayout = () => {

  return (
    <Box sx={{ display: "flex" }}>

      {/* NavBar */}
      <Navbar />

      {/* sidebar */}
      <SidebarLayout />

      {/* main */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Main>
          <Outlet />
        </Main>
      </Box>

    </Box>
  )















  return (
    <LayoutContextProvider>
      <Box sx={{ display: "flex", height: "100%" }}>

        <SidebarLayout />

        <Box
          sx={{
            minHeight: 1,
            display: 'flex',
            width: 1,
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <Box
            sx={{ width: "350px" }}
          >
            <Navbar />
          </Box>

          {/* <Main>
            <Outlet/>
          </Main> */}
        </Box>
      </Box>
    </LayoutContextProvider>
  )
}

export default DashboardLayout
`;
  return data;
}
