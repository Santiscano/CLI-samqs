
export const createModelToggleNavbar = () => {
  const data = `import { useTheme } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useThemeContext } from '../../../../theme';

const ModeToggle = () => {
  const theme = useTheme();
  const primary = theme.palette.grey[500];
  const mode = theme.palette.mode;
  const size = 25;

  const { toggleColorMode: {toggleColorMode} } = useThemeContext();
  const handleMode = () => toggleColorMode();

  return (
    <IconButton onClick={handleMode}>
      {
        mode === "light"
          ? <HiOutlineSun color={primary} cursor='pointer' fontSize={size} />
          : <HiOutlineMoon color={primary} cursor='pointer' fontSize={size} />
      }
    </IconButton>
  )
}

export default ModeToggle
`;
  return data;
}
