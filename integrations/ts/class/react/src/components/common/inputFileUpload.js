
export const createInputFileUpload = () => {
  const data = `import { FC } from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { HiOutlineCloudUpload } from "react-icons/hi";

type variant = "text" | "contained" | "outlined"

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const InputFileUpload:FC<{variant:variant}> = ({variant}) => {
  return (
    <Button
      component="label"
      variant={variant}
      startIcon={ <HiOutlineCloudUpload/> }
    >
      Upload File
      <VisuallyHiddenInput type='file' />
    </Button>
  )
}

export default InputFileUpload
`;
  return data;
}
