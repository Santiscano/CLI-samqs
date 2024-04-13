
export const createNotFoundPage = () => {
  const data = `import { Helmet } from 'react-helmet-async';
import NotFoundView from '../modules/Public/Errors/NotFound';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found </title>
      </Helmet>

      <NotFoundView/>
    </>
  )
}

export default NotFoundPage
`;
  return data;
}
