
export const createWithAuthentication = () => {
  const data = `import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { session } from '../components/config/SessionSettings';

const WithAuthentication = () => {
  const navigate = useNavigate();
  const token = session();

  useEffect(() => {
    if (!token) {
      navigate("/")
    }
  }, [navigate, token]);

  return <Outlet />;
}

export default WithAuthentication
`;
  return data;
}
