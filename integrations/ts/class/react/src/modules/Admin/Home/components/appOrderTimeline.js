
export const createAppOrderTimeline = () => {
  const data = `import { FC } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

import { fDateTime } from '../../../../utils/format-time';

// ----------------------------------------------------------------------

interface Order {
  id: string;
  type: 'order1' | 'order2' | 'order3' | 'order4';
  title: string;
  time: Date;
}

interface AnalyticsOrderTimelineProps {
  title: string;
  subheader?: string;
  list: Order[];
}

const AnalyticsOrderTimeline: FC<AnalyticsOrderTimelineProps> = ({ title, subheader, list, ...other }) => {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Timeline
        sx={{
          m: 0,
          p: 3,
          [\`& .\${timelineItemClasses.root}:before\`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {list.map((item, index) => (
          <OrderItem key={item.id} item={item} lastTimeline={index === list.length - 1} />
        ))}
      </Timeline>
    </Card>
  );
}

AnalyticsOrderTimeline.propTypes = {
  // @ts-ignore
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['order1', 'order2', 'order3', 'order4']).isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
  subheader: PropTypes.string,
  title: PropTypes.string.isRequired,
};

interface OrderItemProps {
  item: Order;
  lastTimeline: boolean;
}

const OrderItem: FC<OrderItemProps> = ({ item, lastTimeline }) => {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === 'order1' && 'primary') ||
            (type === 'order2' && 'success') ||
            (type === 'order3' && 'info') ||
            (type === 'order4' && 'warning') ||
            'error'
          }
        />
        {lastTimeline ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

OrderItem.propTypes = {
  // @ts-ignore
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['order1', 'order2', 'order3', 'order4']).isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  lastTimeline: PropTypes.bool.isRequired,
};

export default AnalyticsOrderTimeline;
`;
  return data;
}
