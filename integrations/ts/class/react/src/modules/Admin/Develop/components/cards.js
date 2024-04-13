
export const createCards = () => {
  const data = `import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import { FC, ReactNode } from 'react';

interface CardType {
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
  sx?: object;
  children: ReactNode;
}

const Cards: FC<CardType> = ({direction = "column", sx, children, ...other}) => {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction={direction}
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Card>
  )
}

export default Cards
`;
  return data;
}
