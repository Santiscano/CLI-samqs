
export const createForgotPassword = () => {
  const data = `import { useState } from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';


import { useRouter } from '../hooks/routes/useRouter';
import AuthContainerLayout from '../layout/others/AuthContainer';


const ForgotPasswordView = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleNavigate = (route: string) => {
    router.navigate(route);
  };
  const handleForgotPassword = () => {
    // actions forgot password ...
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      handleNavigate("/dashboard/home");
    }, 3000);
  };

  const renderSubtitle = (
    <Typography variant="body2">
      Regresar al
      <Link
        variant="subtitle2"
        sx={{ ml: 0.5, cursor: "pointer" }}
        onClick={() => handleNavigate("/sign-in")}
      >
        inicio de sesion
      </Link>
    </Typography>
  );

  return (
    <AuthContainerLayout
      title='Recuperar Contraseña'
      subtitle={renderSubtitle}
    >
      <>
        <Stack spacing={3} sx={{ my: 3 }}>
          <TextField name="email" label="Correo electronico" />
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="inherit"
          loading={loading}
          onClick={handleForgotPassword}
        >
          Ingresar
        </LoadingButton>
      </>
    </AuthContainerLayout>
  )
}

export default ForgotPasswordView
`;
  return data;
}
