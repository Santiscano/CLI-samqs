
export const createColumnsChart = () => {
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
  data: number[];
  fill?: string;
}

interface ChartData {
  series: Series[];
  categories: string[];
  colors?: string[];
  options?: ChartOptionsProps;

}

interface ColumnsChartProps {
  title: string;
  subheader?: string;
  pluralTitle: string;
  // type?: "bar" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined;
  chart: ChartData;
}

const ColumnsChart: FC<ColumnsChartProps> = ({ title, subheader, pluralTitle, chart, ...other}) => {
  const { colors, series, categories, options } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '25%',
      },
    },
    xaxis: {
      categories,
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

      <Box sx={{ p:3, pb: 1 }}>
        <Chart
          width="100%"
          height={364}
          type='bar'
          series={series}
          // @ts-ignore
          options={chartOptions}
        />
      </Box>

    </Card>
  )
}

ColumnsChart.propTypes = {
  // @ts-ignore
  chart: PropTypes.shape({
    series: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(PropTypes.number).isRequired,
      fill: PropTypes.string,
    }).isRequired).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.object,
  }).isRequired,
  subheader: PropTypes.string,
  title: PropTypes.string.isRequired,
  pluralTitle: PropTypes.string.isRequired,
};

export default ColumnsChart
`;
  return data;
}
