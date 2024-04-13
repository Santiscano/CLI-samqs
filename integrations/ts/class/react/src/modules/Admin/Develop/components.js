
export const createComponents = () => {
  const data = `import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Buttons from './components/Buttons';
import InputsCustom from './components/Inputs';
import Tables from './components/Tables';


const ComponentsView = () => {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="center" mb={5}>
        <Typography variant="h4">Components</Typography>
      </Stack>

      <Buttons/>

      <InputsCustom/>

      <Tables/>


    </Container>
  )
}

export default ComponentsView
`;
  return data;
}
