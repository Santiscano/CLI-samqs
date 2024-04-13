
export const createChart = () => {
  const data = `import { memo } from 'react';
import ApexChart from 'react-apexcharts';

import { alpha, styled } from '@mui/material/styles';
import { CSSObject } from '@mui/system';

import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

interface ChartProps {
  className?: string;
  options: ApexCharts.ApexOptions;
  // @ts-ignore
  series: ApexCharts.Series;
  type?: string;
  width?: string | number;
  height?: string | number;
}

const Chart = styled(ApexChart)<{ theme: Theme }>(
  ({ theme }): CSSObject => ({
    '& .apexcharts-canvas': {
      // Tooltip
      '& .apexcharts-tooltip': {
        backgroundColor: alpha(theme.palette.background.default, 0.72),
        color: theme.palette.text.primary,
        // @ts-ignore
        boxShadow: theme.shadows[25],
        borderRadius: theme.shape.borderRadius * 1.25,
        '&.apexcharts-theme-light': {
          borderColor: 'transparent',
          backgroundColor: alpha(theme.palette.background.default, 0.72),
        },
      },
      '& .apexcharts-xaxistooltip': {
        backgroundColor: alpha(theme.palette.background.default, 0.72),
        borderColor: 'transparent',
        color: theme.palette.text.primary,
        // @ts-ignore
        boxShadow: theme.shadows[25],
        borderRadius: theme.shape.borderRadius * 1.25,
        '&:before': {
          borderBottomColor: alpha(theme.palette.grey[500], 0.24),
        },
        '&:after': {
          borderBottomColor: alpha(theme.palette.background.default, 0.8),
        },
      },
      '& .apexcharts-tooltip-title': {
        textAlign: 'center',
        fontWeight: theme.typography.fontWeightBold,
        backgroundColor: alpha(theme.palette.grey[500], 0.08),
        color: theme.palette.text[theme.palette.mode === 'light' ? 'secondary' : 'primary'],
      },

      // LEGEND
      '& .apexcharts-legend': {
        padding: 0,
      },
      '& .apexcharts-legend-series': {
        display: 'inline-flex !important',
        alignItems: 'center',
      },
      '& .apexcharts-legend-marker': {
        marginRight: 8,
      },
      '& .apexcharts-legend-text': {
        lineHeight: '18px',
        textTransform: 'capitalize',
      },
    },
  })
);

export default memo(Chart);
`;
  return data;
}
