
export const createIndexModuleAdminHome = () => {
  const data = `
  import Container from '@mui/material/Container';
  import Typography from '@mui/material/Typography';
  import Grid from '@mui/material/Unstable_Grid2';
  
  
  const HomeView = () => (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hola, Bienvenido de nuevo 👋
      </Typography>
  
      <Grid container spacing={3}>
  
      </Grid>
    </Container>
  )
  
  export default HomeView
`;
  return data;
}
