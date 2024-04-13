
export const createNewPassword = () => {
  const data = `import { useState } from 'react';

import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';

import Iconify from '../../../components/common/Iconify';
import { useRouter } from '../../../hooks/routes/useRouter';
import AuthContainerLayout from '../../../layout/others/AuthContainer';

const NewPasswordView = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
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
      Ingresa tu nueva contraseña para continuar.
    </Typography>
  );

  return (
    <AuthContainerLayout
      title='Restablecer Contraseña'
      subtitle={renderSubtitle}
    >
      <>
        <Stack spacing={3} sx={{ my: 3 }}>
        <TextField
            name="password"
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
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

export default NewPasswordView
`;
  return data;
}
