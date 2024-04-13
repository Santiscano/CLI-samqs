
export const createBarChart = () => {
  const data = `import { FC } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { fNumber } from '../../utils/format-numbers';

import Chart from './chart';
import { ChartOptionsProps } from './user-chart';
import useChart from './user-chart';

interface Series {
  data?: number[];
  name?: string;
  fill?: string;
  label: string;
  value: number;
}

interface ChartData {
  colors?: string[];
  series: Series[];
  options?: ChartOptionsProps;
}

interface BarChartProps {
  title: string;
  subheader?: string;
  type?: 'bar' | undefined;
  chart: ChartData;
}

const BarChart: FC<BarChartProps> = ({title, subheader, type = 'bar', chart, ...other}) => {
  const { colors, series, options } = chart;

  const chartSeries = series.map(i => i.value);


  const chartOptions = useChart({
    colors,
    tooltip: {
      marker: {
        show: false,
      },
      y: {
        formatter: (value: number) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '28%',
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: series.map((i) => i.label),
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }}>
        <Chart
          dir="ltr"
          type={type}
          width="100%"
          height={364}
          series={[{ data: chartSeries }]}
          // @ts-ignore
          options={chartOptions}
        />
      </Box>
    </Card>
  )
}

BarChart.propTypes = {
  // @ts-ignore
  chart: PropTypes.shape({
    colors: PropTypes.arrayOf(PropTypes.string),
    series: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })).isRequired,
    options: PropTypes.object
  }).isRequired,
  subheader: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default BarChart
`;
  return data;
}
