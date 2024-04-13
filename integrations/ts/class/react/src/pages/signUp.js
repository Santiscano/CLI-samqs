
export const createSignUpPage = () => {
  const data = `import { Helmet } from 'react-helmet-async';
import SignUpView from '../modules/Auth/SignUp';


const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title> Sign Up | Template Basic </title>
      </Helmet>

      <SignUpView/>
    </>
  )
}

export default SignUpPage
`;
  return data;
}
