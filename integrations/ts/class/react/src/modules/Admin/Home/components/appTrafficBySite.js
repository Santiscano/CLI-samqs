
export const createAppTrafficBySite = () => {
  const data = `import { FC } from 'react';
  import PropTypes from 'prop-types';
  
  import Box from '@mui/material/Box';
  import Card from '@mui/material/Card';
  import Paper from '@mui/material/Paper';
  import Typography from '@mui/material/Typography';
  import CardHeader from '@mui/material/CardHeader';
  
  import { fShortenNumber } from '../../../../utils/format-numbers';
  
  interface Site {
    name: string;
    value: number;
    icon: JSX.Element;
  }
  
  interface AppTrafficBySiteProps {
    title: string;
    subheader?: string;
    list: Site[];
  }
  
  const AppTrafficBySite: FC<AppTrafficBySiteProps> = ({ title, subheader, list, ...other }) => {
    return (
      <Card {...other}>
        <CardHeader title={title} subheader={subheader} />
  
        <Box
          sx={{
            p: 3,
            gap: 2,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {list.map((site) => (
            <Paper
              key={site.name}
              variant="outlined"
              sx={{ py: 2.5, textAlign: 'center', borderStyle: 'dashed' }}
            >
              <Box sx={{ mb: 0.5 }}>{site.icon}</Box>
  
              <Typography variant="h6">{fShortenNumber(site.value)}</Typography>
  
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {site.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Card>
    );
  }
  
  AppTrafficBySite.propTypes = {
    title: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        icon: PropTypes.element.isRequired,
      }).isRequired
    ).isRequired,
  };
  
  export default AppTrafficBySite;
  `;
  return data;
}
