
export const createObjWithRoutes = () => {
  const data = `import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import WithoutAuthentication from '../middlewares/WithoutAuthentication';
import WithAuthentication from '../middlewares/WithAuthentication';

import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';
import ForgotPasswordPage from '../pages/ForgotPassword';
import ServerErrorPage from '../pages/ServerError';
import NotFoundPage from '../pages/NotFound';

const objWithRoutes = () => {
  const routes = useRoutes([
    {
      element: <WithoutAuthentication/>,
      children: [
        { index: true, element: <LoginPage/> },
        { path: 'sign-in', element: <LoginPage/> },
        { path: 'sign-up', element: <SignUpPage/> },
        { path: 'forgot-password', element: <ForgotPasswordPage/> },
      ],
    },
    {
      element: <WithAuthentication/>,
      children: [
        {
          path: 'dashboard',
          element: (
            <div>
              <Outlet/>
            </div>
          ),
          children: [
            { path: 'home', element: null },
            { path: 'profile', element: null },
          ],
        },
      ],
    },
    {
      path:'500',
      element: <ServerErrorPage/>,
    },
    {
      path: '404',
      element: <NotFoundPage/>,
    },
    {
      path: '*',
      element: <Navigate to='404' replace/>
    }
  ]);
  return routes;
}

export default objWithRoutes
`;
  return data;
}
