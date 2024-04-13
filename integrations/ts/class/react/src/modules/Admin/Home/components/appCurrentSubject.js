
export const createAppCurrentSubject = () => {
  const data = `import { FC } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled, useTheme, Theme } from '@mui/material/styles';

import Chart, { useChart } from '../../../../components/chart';
import { ChartOptionsProps } from '../../../../components/chart/user-chart';

interface Series {
  data: number[];
  name: string;
  fill: string;
}

interface ChartData {
  series: Series[];
  colors: string[];
  categories: string[];
  options?: ChartOptionsProps;
}

interface AppCurrentSubjectProps {
  title: string;
  subheader?: string;
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

const AppCurrentSubject: FC<AppCurrentSubjectProps> = ({ title, subheader, chart, ...other }) => {
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
      // @ts-ignore
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    xaxis: {
      // @ts-ignore
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
        type="radar"
        series={series}
        // @ts-ignore
        options={chartOptions}
        width="100%"
        height={340}
      />
    </Card>
  );
}

AppCurrentSubject.propTypes = {
  // @ts-ignore
  chart: PropTypes.shape({
    series: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
    })).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    options: PropTypes.object
  }).isRequired,
  subheader: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default AppCurrentSubject;
`;
  return data;
}
