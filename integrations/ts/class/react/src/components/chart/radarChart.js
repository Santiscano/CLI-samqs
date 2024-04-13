
export const createRadarChart = () => {
  const data = `import { FC } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled, useTheme, Theme } from '@mui/material/styles';

import Chart from './chart';
import { ChartOptionsProps } from './user-chart';
import useChart from './user-chart';

interface Series {
  name?: string;
  data?: number[];
}

interface ChartData {
  series: Series[];
  categories: string[];
  colors?: string[];
  options?: ChartOptionsProps;
}

interface RadarChartProps {
  title: string;
  subheader?: string;
  type?:"radar" | undefined;
  chart: ChartData;
}

const CHART_HEIGHT = 400;
const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ theme }: { theme: Theme }) => ({
  height: CHART_HEIGHT,
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: \`100% !important\`,
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    borderTop: \`dashed 1px \${theme.palette.divider}\`,
    top: \`calc(\${CHART_HEIGHT - LEGEND_HEIGHT}px) !important\`,
  },
}));

const RadarChart: FC<RadarChartProps> = ({ title, subheader, type = 'radar', chart, ...other }) => {
  const theme = useTheme();

  const { series, colors, categories, options = {} } = chart;

  const chartOptions = useChart({
    colors,
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.48,
    },
    legend: {
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: [...Array(6)].map(() => theme.palette.text.secondary),
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} />

      <StyledChart
        dir="ltr"
        type={type}
        width="100%"
        height={340}
        // @ts-ignore
        series={series}
        // @ts-ignore
        options={chartOptions}
      />
    </Card>
  )
}

RadarChart.propTypes = {
  // @ts-ignore
  chart: PropTypes.shape({
    series: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
    })).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    options: PropTypes.object
  }).isRequired,
  subheader: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default RadarChart
`;
  return data;
}
