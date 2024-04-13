
export const createNewPasswordPage = () => {
  const data = `import { Helmet } from "react-helmet-async";
import NewPasswordView from "../modules/Auth/NewPassword";

const NewPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title> New Password </title>
      </Helmet>

      <NewPasswordView/>
    </>
  )
}

export default NewPasswordPage
`;
  return data;
}
