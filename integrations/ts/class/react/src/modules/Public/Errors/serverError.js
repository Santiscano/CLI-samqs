
export const createServerError = () => {
  const data = `import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Logo from '../../../components/common/Logo';
import { RouterLink } from '../../../components/tools/RouterLink';

const ServerErrorView = () => {
  const theme = useTheme();

  const renderHeader = (
    <Box
      component="header"
      sx={{
        top: 0,
        left: 0,
        width: 1,
        lineHeight: 0,
        position: 'fixed',
        p: (theme) => ({ xs: theme.spacing(3, 3, 0), sm: theme.spacing(5, 5, 0) }),
      }}
    >
      <Box sx={{
        padding: 10,
        margin: 10,
      }}>
        <Logo color={theme.palette.primary}/>
      </Box>
    </Box>
  );

  return (
    <>
      {renderHeader}

      <Container>
        <Box
          sx={{
            py: 12,
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            minHeight: '100vh',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Disculpanos, Tenemos fallas!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Lo sentimos, Estamos trabajando para identificar el problema.
            Vuelve a intentarlo en unos minutos.
          </Typography>

          <Box
            component="img"
            src="/assets/illustrations/error-server-500.svg"
            sx={{
              mx: 'auto',
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />

          <Button href="/dashboard/home" size="large" variant="contained" component={RouterLink}>
            Regresar al Inicio
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default ServerErrorView
`;
  return data;
}
