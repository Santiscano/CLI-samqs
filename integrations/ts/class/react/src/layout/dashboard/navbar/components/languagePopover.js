
export const createLanguagePopoverNavbar = () => {
  const data = `import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { useThemeContext } from '../../../../theme';
import { LanguageType } from '../../../../theme/theme.interface';


// ----------------------------------------------------------------------
const LANGS: { value: LanguageType; label: string; icon: string }[] = [
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/ic_flag_en.svg',
  },
  {
    value: 'por',
    label: 'Portuges',
    icon: '/assets/icons/ic_flag_por.png',
  },
  {
    value: 'fre',
    label: 'French',
    icon: '/assets/icons/ic_flag_fr.svg',
  },
  {
    value: 'es',
    label: 'Spanish',
    icon: '/assets/icons/ic_flag_es.png',
  }
];
// ----------------------------------------------------------------------

const LanguagePopover = () => {
  const { toggleLanguage, language } = useThemeContext();

  const [open, setOpen] = useState(null);
  const [flag, setFlag] = useState<LanguageType>('en');

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  const handleLanguage = (lang: LanguageType) => {
    toggleLanguage(lang);
    handleClose();
  };

  const conditionStyle = {
    bgcolor: 'action.selected',
  };

  useEffect(() => {
    const handleLang = LANGS.find(lang => lang.value === language );
    // @ts-ignore
    setFlag(handleLang?.icon)
  }, [language]);


  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          // @ts-ignore
          ...(open && conditionStyle)
        }}
      >
        <img src={flag} alt={flag} />
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
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === language}
            onClick={() => handleLanguage(option.value)}
            sx={{ typography: 'body2', py: 1 }}
          >
            <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  )
}

export default LanguagePopover
`;
  return data;
}
