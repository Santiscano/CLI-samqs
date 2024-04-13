
export const createAppWebsiteVisits = () => {
  const data = `import { FC } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart, { useChart } from '../../../../components/chart';
import { ChartOptionsProps } from '../../../../components/chart/user-chart';

interface Series {
  data: number[];
  name: string;
  fill: string;
}

interface ChartData {
  labels: string[];
  colors: string[];
  series: Series[];
  options: ChartOptionsProps;
}

interface AppWebsiteVisitsProps {
  title: string;
  subheader?: string;
  chart: ChartData;
}

const AppWebsiteVisits: FC<AppWebsiteVisitsProps> = ({ title, subheader, chart, ...other }) => {
  const { labels, colors, series, options } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      // @ts-ignore
      type: series.map((i) => i.fill),
    },
    labels,
    xaxis: {
      // @ts-ignore
      type: 'datetime',
    },
    tooltip: {
      // @ts-ignore
      shared: true,
      intersect: false,
      y: {
        formatter: (value:any) => {
          if (typeof value !== 'undefined') {
            return \`\${value.toFixed(0)} visits\`;
          }
          return value;
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          dir="ltr"
          type="line"
          series={series}
          // @ts-ignore
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}

AppWebsiteVisits.propTypes = {
  // @ts-ignore
  chart: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string),
    series: PropTypes.arrayOf(PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.number).isRequired,
      name: PropTypes.string.isRequired,
      fill: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    options: PropTypes.object,
  }).isRequired,
  subheader: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default AppWebsiteVisits;
`;
  return data;
}
