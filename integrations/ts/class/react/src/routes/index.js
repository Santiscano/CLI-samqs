
export const createIndexRoutes = () => {
  const data = `import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import WithoutAuthentication from '../middlewares/WithoutAuthentication';
import WithAuthentication from '../middlewares/WithAuthentication';

import DashboardLayout from '../layout/dashboard';
import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';
import NewPasswordPage from '../pages/NewPassword';
import ForgotPasswordPage from '../pages/ForgotPassword';
import ServerErrorPage from '../pages/ServerError';
import TestPage from '../pages/Test';
import HomePage from '../pages/Home';
import { WithRoleAllowedComponent } from '../middlewares/WithRoleAllowed';
import ComponentsPage from '../pages/Components';

export const NotFoundPage = lazy(() => import('../pages/NotFound'));


const AllRouters = () => {
  return (
    <Routes>

      {/* test drawer */}
      {/* <Route path='test' element={ <TestPage/> } /> */}

      {/* not protected */}
      <Route element={ <WithoutAuthentication/> }>
        <Route index element={ <LoginPage/> }/>
        <Route path='sign-in' element={ <LoginPage/> }/>
        <Route path='sign-up' element={ <SignUpPage/> }/>
        <Route path='forgot-password' element={ <ForgotPasswordPage/> }/>
        <Route path='new-password' element={ <NewPasswordPage/> }/>
      </Route>


      {/* protected */}
      <Route element={ <WithAuthentication/> }>
        <Route path='dashboard' element={ <DashboardLayout/> }>

            <Route path='home' element={ <HomePage/> } />
            <Route path='radicacion/test' element={ <TestPage/> }/>
            <Route path='radicacion/test2' element={ <TestPage/> }/>
            <Route path='radicacion/test3' element={ <TestPage/> }/>

            <Route path='without' element={ <TestPage/> }/>
            <Route path='without-2' element={ <TestPage/> }/>

            {/* solo para desarrolladores */}
            <Route path='components' element={<WithRoleAllowedComponent allowedRolesList={[1]}/>}>
              <Route path='all' element={<ComponentsPage/>}/>
            </Route>

        </Route>
      </Route>


      <Route path='500' element={ <ServerErrorPage/> }/>
      <Route path='400' element={ <h4>No tienes permisos 400 falta token</h4> }/>
      <Route path='404' element={ <NotFoundPage/> }/>
      <Route path='*' element={<Navigate to='404' replace/>}/>

    </Routes>
  )
}

export default AllRouters
`;
  return data;
}
