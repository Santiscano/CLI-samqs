
export const createWithoutAuthentication = () => {
  const data = `import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { session } from '../components/config/SessionSettings';


const WithoutAuthentication = () => {
  const navigate = useNavigate();
  const token = session();

  useEffect(() => {
    if (token) {
      navigate("/dashboard/home")
    }
  }, [navigate, token]);

  return <Outlet />;
}

export default WithoutAuthentication
`;
  return data;
}
