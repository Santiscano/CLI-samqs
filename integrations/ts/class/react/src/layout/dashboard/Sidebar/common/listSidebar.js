
export const createListSidebar = () => {
  const data = `import { FC, useState } from 'react';
import { Typography, useTheme } from '@mui/material';

import { developConfig, exampleConfig, exampleWithoutConf, homeConf } from '../../configNavigation';

import { CollapsibledItemsList, ItemsList } from './ItemsList';
import { useLayoutContext } from '../../../../context/LayoutContext';
import { HiOutlineBeaker } from 'react-icons/hi';
import { useMode } from '../../../../theme/useModeTheme';
import { get, roles } from '../../../../components/config/SessionSettings';

const ListSidebarAllowed = () => {
  const { openSidebar } = useLayoutContext();

  // *=============== COLLAPSEDS =============== //
  const [exampleColl, setExampleColl] = useState(false);
  const handleOpenExampleColl = () => setExampleColl(prev => !prev);
  // *=============== COLLAPSEDS =============== //


  // *=============== LIST SIDEBAR =============== //
  const Home = (
    <ItemsList data={homeConf} />
  );

  const ExampleWithCollapse = (
    <CollapsibledItemsList
      open={exampleColl}
      handleOpen={handleOpenExampleColl}
      section="Radicacion"
      iconSection={<HiOutlineBeaker />}
      data={exampleConfig}
    />
  );

  const ExampleWithoutCollapse = (
    <ItemsList data={exampleWithoutConf} />
  )

  // TODO: siempre mantenerla de ultima
  const ComponentsDevelop = (
    <ItemsList
      data={developConfig}
      isPublic={false}
      allowedRoles={[roles.Developer]}
    />
  )
  // *=============== LIST SIDEBAR =============== //


  return (
    <>
      {openSidebar && (<TitleSection title='Dashboard' />)}
      {Home}

      {openSidebar && (<TitleSection title="Overview" />)}
      {ExampleWithCollapse}

      {openSidebar && (<TitleSection title="Management" />)}
      {ExampleWithoutCollapse}


      {(openSidebar && Number(get("idroles")) == roles.Developer) && (<TitleSection title='Components' />)}
      {ComponentsDevelop}
    </>
  )
}

export default ListSidebarAllowed

interface TitleSectionProps {
  title: string;
};
const TitleSection: FC<TitleSectionProps> = ({ title }) => {
  const theme = useTheme();
  const { mode } = useMode();

  return (
    <Typography
      variant='body2'
      color={theme.palette.text.disabled}
      sx={{
        paddingX: "16px",
        "&:hover": {
          color: mode === "light" ? theme.palette.common.black : theme.palette.common.white,
        }
      }
      }
    >
      {title}
    </Typography>
  )
}
`;
  return data;
}
