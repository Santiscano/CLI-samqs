
export const createCardWidget = () => {
  const data = `import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from '../../utils/format-numbers';

interface CardWidgetProps {
  title: string;
  total: number;
  icon?: ReactNode;
  color?: string;
  sx?: SxProps;
}

const CardWidget: FC<CardWidgetProps> = ({ title, total, icon, color='primary', sx, ...other }) => {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}

      <Stack spacing={0.5}>
        <Typography variant="h4">{fShortenNumber(total)}</Typography>

        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {title}
        </Typography>
      </Stack>
    </Card>
  )
}

CardWidget.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default CardWidget
`;
  return data;
}
