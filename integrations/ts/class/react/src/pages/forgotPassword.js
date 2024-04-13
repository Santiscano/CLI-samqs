
export const createForgotPasswordPage = () => {
  const data = `import { Helmet } from 'react-helmet-async';
import ForgotPasswordView from '../modules/Auth/ForgotPassword';

const ForgotPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title> Forgot Passwords </title>
      </Helmet>

      <ForgotPasswordView/>
    </>
  )
}

export default ForgotPasswordPage
`;
  return data;
}
