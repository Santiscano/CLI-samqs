
export const createInputs = () => {
  const data = `import OutlinedInput from '@mui/material/OutlinedInput';
import { ChangeEvent, useState } from 'react';

import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { HiOutlineSearch } from 'react-icons/hi';
import InputDatePicker from '../../../../components/common/InputDatePicker';
import InputSelect from '../../../../components/common/InputSelect';


const InputsCustom = () => {
  const [filterName, setFilterName] = useState('');
  const onFilterName = (e: ChangeEvent<HTMLInputElement>) => setFilterName(e.target.value);

  const [select, setSelect] = useState('');

  return (
    <Grid container spacing={1} gap={1} marginBottom={6}>

      <Grid xs={12}>
        <Typography variant='h6'>Inputs Custom</Typography>
      </Grid>

      <Grid xs={12}><Typography variant="caption">Contained's</Typography></Grid>

      {/* input */}
      <Grid xs={12} md={5}>
        <OutlinedInput
          value={filterName}
          onChange={onFilterName}
          placeholder="input text ..."
          startAdornment={
            <InputAdornment position="start">
              <HiOutlineSearch />
            </InputAdornment>
          }
        />
      </Grid>

      {/* select */}
      <Grid xs={12} md={6}>
        <InputSelect
          label='Select'
          value={select}
          setValue={setSelect}
          items={[
            {value: 10, label: "Ten"},
            {value: 20, label: "Twenty"},
            {value: 30, label: "Thirty"}
          ]}
        />
      </Grid>

      {/* dataPicker */}
      <Grid xs={11}>
        <InputDatePicker label='Basic date picker'/>
      </Grid>

    </Grid>
  )
}

export default InputsCustom
`;
  return data;
}
