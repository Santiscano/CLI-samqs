
export const createComponentsPage = () => {
  const data = `import { Helmet } from 'react-helmet-async';
import ComponentsView from '../modules/Admin/Develop/Components';

const ComponentsPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Components personal</title>
      </Helmet>

      <ComponentsView />
    </>
  )
}

export default ComponentsPage
`;
  return data;
}
