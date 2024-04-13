
export const createServerErrorPage = () => {
  const data = `import { Helmet } from 'react-helmet-async';
import ServerErrorView from '../modules/Public/Errors/ServerError';

const ServerErrorPage = () => {
  return (
    <>
      <Helmet>
        <title> 500 Server Error </title>
      </Helmet>

      <ServerErrorView/>
    </>
  )
}

export default ServerErrorPage
`;
  return data;
}
