
export const createLoginPage = () => {
  const data = `import { Helmet } from 'react-helmet-async';
import LoginView from '../modules/Auth/Login';


const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title> LoginPage </title>
      </Helmet>

      <LoginView/>
    </>
  )
}

export default LoginPage
`;
  return data;
}
