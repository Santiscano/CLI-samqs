
export const createLineChart = () => {
  const data = `import { FC } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart from './chart';
import { ChartOptionsProps } from './user-chart';
import useChart from './user-chart';

interface Series {
  name: string;
  type: 'area' | 'column' | 'line';
  fill: 'gradient' | 'solid' ;
  data: number[];
}

interface ChartData {
  labels: string[];
  series: Series[];
  colors?: string[];
  options?: ChartOptionsProps;
};

interface LineAreaChartProps {
  title: string;
  subheader?: string;
  pluralTitle: string;
  type?: 'line'| 'area'| undefined;
  chart: ChartData;
}

const LineAreaChart: FC<LineAreaChartProps> = ({ title, subheader, pluralTitle, type = "line", chart, ...other }) => {
  const { labels, colors, series, options } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: series.map((i) => i.fill),
    },
    labels,
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value:any) => {
          if (typeof value !== 'undefined') {
            return \`\${value.toFixed(0)} \${pluralTitle}\`;
          }
          return value;
        },
      },
    },
    ...options,
  })

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          dir="ltr"
          type={type}
          width="100%"
          height={364}
          series={series}
          //  @ts-ignore
          options={chartOptions}
        />
      </Box>
    </Card>
  )
}

LineAreaChart.propTypes = {
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

export default LineAreaChart
`;
  return data;
}
