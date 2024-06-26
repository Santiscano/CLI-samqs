
export const createSignUp = () => {
  const data = `import { useState } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Iconify from '../../../components/common/Iconify';
import { useRouter } from '../../../hooks/routes/useRouter';
import AuthContainerLayout from '../../../layout/others/AuthContainer';


const SignUpView = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleNavigate = (route: string) => {
    router.navigate(route);
  };
  const handleRegister = () => {
    // actions register...
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      handleNavigate("/dashboard/home");
    }, 1000 * 3);
  };

  const renderSubtitle = (
    <Typography variant="body2">
      Ya tienes cuenta?
      <Link
        variant="subtitle2"
        sx={{ ml: 0.5, cursor: "pointer" }}
        onClick={() => handleNavigate("/sign-in")}
      >
        Ingresa aquí
      </Link>
    </Typography>
  );
  return (
    <AuthContainerLayout
      title='Registrarse en Integrator 🚀🔭'
      subtitle={renderSubtitle}
    >
      <>
        <Stack spacing={3} sx={{ my: 3 }}>
          <TextField name="email" label="Correo electronico" />

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
          onClick={handleRegister}
        >
          Registrarse
        </LoadingButton>
      </>
    </AuthContainerLayout>
  )
}

export default SignUpView
`;
  return data;
}
