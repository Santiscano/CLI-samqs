
export const createPaletteColorPopover = () => {
  const data = `import { useState } from 'react';

import { Box, IconButton, MenuItem, Popover, useTheme } from '@mui/material';
import { MdOutlineColorLens } from 'react-icons/md';
import { useThemeContext } from '../../../../theme';
import { ColorPreset } from '../../../../theme/theme.interface';

// ----------------------------------------------------------------------
const COLORS: { value: ColorPreset; label: string; color: string }[] = [
  {
    value: 'facebookBlue',
    label: 'Facebook Blue',
    color: '#1877f2' // Facebook blue color code.
  },
  {
    value: 'purpleLight',
    label: 'Purple Light',
    color: '#4f46e5',
  },
  {
    value: 'teal',
    label: 'Teal',
    color: '#00a76f',
  },
  {
    value: 'ceruleanBlue',
    label: 'Cerulean Blue',
    color: '#078dee',
  },
  {
    value: 'fireEngineRed',
    label: 'Fire Engine Red',
    color: '#ff3030',
  },
  {
    value: 'goldenrod',
    label: 'Golden Rod',
    color: '#fda92d',
  },
];
// ----------------------------------------------------------------------

const PaletteColorPopover = () => {
  const theme = useTheme();
  const primary = theme.palette.grey[500];
  const { colorPreset, toggleColorPreset } = useThemeContext();

  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton color={open ? 'primary' : 'default'} onClick={handleOpen}>
        <MdOutlineColorLens color={primary} cursor='pointer' fontSize={25} />
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
      >{COLORS.map(({ value, label, color }) => (
        <MenuItem
          key={value}
          selected={value === colorPreset}
          onClick={ () => toggleColorPreset(value) }
        >
          <Box
            component="section"
            sx={{
              p: "5px",
              marginRight: "10px",
              backgroundColor: color,
              borderRadius: '50%',
            }}></Box>
          {label}
        </MenuItem>
      ))}</Popover>
    </>
  )
}

export default PaletteColorPopover
`;
  return data;
}
