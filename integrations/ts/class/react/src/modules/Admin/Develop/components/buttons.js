
export const createButtons = () => {
  const data = `import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { HiOutlinePlusSm } from 'react-icons/hi';
import InputFileUpload from '../../../../components/common/InputFileUpload';

const Buttons = () => {
  return (
    <Grid container spacing={1} gap={1} marginBottom={6}>

      <Grid xs={12}>
        <Typography variant="h6">Buttons</Typography>
      </Grid>

      <Grid xs={12}><Typography variant="caption">Contained's</Typography></Grid>

      <Grid>
        <Button variant="contained" color="primary" startIcon={<HiOutlinePlusSm />}>
          Contained Primary
        </Button>
      </Grid>
      <Grid>
        <Button variant="contained" color="secondary" startIcon={<HiOutlinePlusSm />}>
          Contained Secondary
        </Button>
      </Grid>
      <Grid>
        <Button variant="contained" color="success" startIcon={<HiOutlinePlusSm />}>
          Contained Success
        </Button>
      </Grid>
      <Grid>
        <Button variant="contained" color="warning" startIcon={<HiOutlinePlusSm />}>
          Contained Warning
        </Button>
      </Grid>
      <Grid>
        <Button variant="contained" color="error" startIcon={<HiOutlinePlusSm />}>
          Contained Error
        </Button>
      </Grid>
      <Grid>
        <Button variant="contained" color="info" startIcon={<HiOutlinePlusSm />}>
          Contained Info
        </Button>
      </Grid>
      <Grid>
        <Button variant="contained" color="inherit" startIcon={<HiOutlinePlusSm />}>
          Contained Inherit
        </Button>
      </Grid>
      <Grid>
        <Button variant="contained" disabled endIcon={<HiOutlinePlusSm />}>
          Disabled
        </Button>
      </Grid>
      <Grid>
        <InputFileUpload variant="contained"/>
      </Grid>

      <Grid xs={12}><Typography variant="caption">Outlined's</Typography></Grid>

      <Grid>
        <Button variant="outlined" color="primary" startIcon={<HiOutlinePlusSm />}>
          Outlined Primary
        </Button>
      </Grid>
      <Grid>
        <Button variant="outlined" color="secondary" startIcon={<HiOutlinePlusSm />}>
          Outlined Secondary
        </Button>
      </Grid>
      <Grid>
        <Button variant="outlined" color="success" startIcon={<HiOutlinePlusSm />}>
          Outlined Success
        </Button>
      </Grid>
      <Grid>
        <Button variant="outlined" color="warning" startIcon={<HiOutlinePlusSm />}>
          Outlined Warning
        </Button>
      </Grid>
      <Grid>
        <Button variant="outlined" color="error" startIcon={<HiOutlinePlusSm />}>
          Outlined Error
        </Button>
      </Grid>
      <Grid>
        <Button variant="outlined" color="info" startIcon={<HiOutlinePlusSm />}>
          Outlined Info
        </Button>
      </Grid>
      <Grid>
        <Button variant="outlined" color="inherit" startIcon={<HiOutlinePlusSm />}>
          Outlined Inherit
        </Button>
      </Grid>
      <Grid>
        <Button variant="outlined" disabled endIcon={<HiOutlinePlusSm />}>
          Disabled
        </Button>
      </Grid>
      <Grid>
        <InputFileUpload variant="outlined"/>
      </Grid>

      <Grid xs={12}><Typography variant="caption">Text's</Typography></Grid>

      <Grid>
        <Button variant="text" color="primary" startIcon={<HiOutlinePlusSm />}>
          Text Primary
        </Button>
      </Grid>
      <Grid>
        <Button variant="text" color="secondary" startIcon={<HiOutlinePlusSm />}>
          Text Secondary
        </Button>
      </Grid>
      <Grid>
        <Button variant="text" color="success" startIcon={<HiOutlinePlusSm />}>
          Text Success
        </Button>
      </Grid>
      <Grid>
        <Button variant="text" color="warning" startIcon={<HiOutlinePlusSm />}>
          Text Warning
        </Button>
      </Grid>
      <Grid>
        <Button variant="text" color="error" startIcon={<HiOutlinePlusSm />}>
          Text Error
        </Button>
      </Grid>
      <Grid>
        <Button variant="text" color="info" startIcon={<HiOutlinePlusSm />}>
          Text Info
        </Button>
      </Grid>
      <Grid>
        <Button variant="text" color="inherit" startIcon={<HiOutlinePlusSm />}>
          Text Inherit
        </Button>
      </Grid>
      <Grid>
        <Button variant="text" disabled endIcon={<HiOutlinePlusSm />}>
          Disabled
        </Button>
      </Grid>
      <Grid>
        <InputFileUpload variant="text"/>
      </Grid>

    </Grid>
  )
}

export default Buttons
`;
  return data;
}
