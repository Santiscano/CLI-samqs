
export const createAuthContainer = () => {
  const data = `import { FC, ReactNode } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';


import Iconify from '../../components/common/Iconify';
import Logo from '../../components/common/Logo';
import { bgGradient } from '../../theme/css';

interface Props {
  children: ReactNode;
  title: string;
  subtitle?: ReactNode;
}

const AuthContainerLayout: FC<Props> = ({ children, title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Box sx={{ paddingLeft: 4, paddingTop: 2 }}>
        <Logo color={theme.palette.primary}/>
      </Box>
      <Stack alignItems="center" justifyContent="start" sx={{marginTop: "2rem"}}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>{title}</Typography>

          {subtitle && (subtitle)}

          <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              O
            </Typography>
          </Divider>

          {children}
        </Card>
      </Stack>
    </Box>
  )
}

export default AuthContainerLayout
`;
  return data;
}
