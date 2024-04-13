
export const createHomePage = () => {
  const data = `import { Helmet } from 'react-helmet-async';

import HomeView from '../modules/Admin/Home';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Home</title>
      </Helmet>

      <HomeView/>
    </>
  )
}

export default HomePage
`;
  return data;
}
