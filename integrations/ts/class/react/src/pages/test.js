
export const createTestPage = () => {
  const data = `import { Helmet } from 'react-helmet-async';
import TestView from '../modules/Public/Test';

const TestPage = () => {
  return (
    <>
    <Helmet>
      <title>Test Page</title>
    </Helmet>

    <TestView/>
    </>
  )
}

export default TestPage
`;
  return data;
}
