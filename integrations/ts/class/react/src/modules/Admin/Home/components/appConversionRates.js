
export const createAppConversionRates = () => {
  const data = `import { FC } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { fNumber } from '../../../../utils/format-numbers';

import Chart, { useChart } from '../../../../components/chart';
import { ChartOptionsProps } from '../../../../components/chart/user-chart';

interface Series {
  data: number[];
  name: string;
  fill: string;
}

interface ChartData {
  colors: string[];
  series: Series[];
  options?: ChartOptionsProps;
}

interface AppConversionRatesProps {
  title: string;
  subheader?: string;
  chart: ChartData;
}

const AppConversionRates: FC<AppConversionRatesProps> = ({ title, subheader, chart, ...other }) => {
  const { colors, series, options = {} } = chart;

  // @ts-ignore
  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    colors,
    tooltip: {
      // @ts-ignore
      marker: { show: false },
      y: {
        formatter: (value: number) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: {
        // @ts-ignore
        horizontal: true,
        barHeight: '28%',
        borderRadius: 2,
      },
    },
    xaxis: {
      // @ts-ignore
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
          type="bar"
          series={[{ data: chartSeries }]}
          // @ts-ignore
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}

AppConversionRates.propTypes = {
  // @ts-ignore
  chart: PropTypes.shape({
    colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    series: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })).isRequired,
    options: PropTypes.object
  }).isRequired,
  subheader: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default AppConversionRates;
`;
  return data;
}
