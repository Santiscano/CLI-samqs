export const createComponentsTableNews = () => {
  const data = `import { FC } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import { fToNow } from '../../utils/format-time';

import Iconify from './Iconify';

interface NewsItemProps {
  news: {
    image: string;
    title: string;
    description: string;
    postedAt: Date;
  };
}

const NewsItem: FC<NewsItemProps> = ({ news }) => {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
      />

      <Box sx={{ flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {title}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} >
          {description}
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fToNow(postedAt)}
      </Typography>
    </Stack>
  );
}

NewsItem.propTypes = {
  news: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    postedAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

interface AppNewsUpdateProps {
  title: string;
  subheader?: string;
  list: {
    id: string;
    image: string;
    title: string;
    description: string;
    postedAt: Date;
  }[];
}

const AppNewsUpdate: FC<AppNewsUpdateProps> = ({ title, subheader, list, ...other }) => {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
        {list.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}

AppNewsUpdate.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  // @ts-ignore
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    postedAt: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
};

export default AppNewsUpdate;
`;
  return data;
}
