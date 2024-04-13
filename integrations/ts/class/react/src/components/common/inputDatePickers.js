
export const createInputDatePickers = () => {
  const data = `import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FC } from 'react';

interface InputProps {
  label: string;
}

const InputDatePicker: FC<InputProps> = ({label}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label={label} sx={{width: "100%"}} />
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default InputDatePicker
`;
  return data;
}
