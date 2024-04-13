
export const createPieChart = () => {
  const data = `import { FC } from 'react'
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled, useTheme, Theme } from '@mui/material/styles';

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

interface PieChartProps {
  title: string;
  subheader?: string;
  type?: 'pie'| 'donut'| undefined;
  chart: ChartData;
}
// area -

const CHART_HEIGHT = 400;
const LEGEND_HEIGHT = 72;

const StyledChartPie = styled(Chart)(({ theme }: { theme: Theme }) => ({
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

const PieChart: FC<PieChartProps> = ({title, subheader, type = 'pie', chart, ...other}) => {
  const theme = useTheme();

  const { colors, series, options } = chart;

  const chartSeries = series.map(i => i.value);

  const chartOptions = useChart({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    colors,
    labels: series.map((i) => i.label),
    stroke: {
      colors: [theme.palette.background.paper],
    },
    legend: {
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (value:any) => fNumber(value),
        title: {
          formatter: (seriesName:any) => \`\${seriesName}\`,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} />

      <StyledChartPie
        dir="ltr"
        type={type}
        width="100%"
        height={280}
        series={chartSeries}
        // @ts-ignore
        options={chartOptions}
      />
    </Card>
  )
}

PieChart.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  // @ts-ignore
  chart: PropTypes.shape({
    colors: PropTypes.arrayOf(PropTypes.string),
    series: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })).isRequired,
    options: PropTypes.object
  }).isRequired,
};

export default PieChart
`;
  return data;
}
