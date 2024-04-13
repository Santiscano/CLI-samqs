
export const createInputSelect = () => {
  const data = `import { Dispatch, FC, SetStateAction } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface InputSelectProps<T> {
  label: string;
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  items: {value: any, label: string}[];
}

const InputSelect: FC<InputSelectProps<string>> = ({label, value, setValue, items }) => {

  const handleChange = (event: SelectChangeEvent) => setValue(event.target.value);

  return (
    <FormControl fullWidth>
      <InputLabel id={\`select-label-\${label}\`}>{label}</InputLabel>
      <Select
        labelId={\`select-label-\${label}\`}
        id={\`select-label-\${label}-\`}
        label={label}
        value={value}
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default InputSelect
`;
  return data;
}
