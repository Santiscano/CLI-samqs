export const createModuleAdmincharts = () => {
  const data = `import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import CardWidget from '../../../../components/common/CardWidget';
import LineAreaChart from '../../../../components/chart/LineChart';
import PieChart from '../../../../components/chart/PieChart';
import BarChart from '../../../../components/chart/BarChart';
import RadarChart from '../../../../components/chart/RadarChart';
import ColumnsChart from '../../../../components/chart/ColumnsChart';
import AppNewsUpdate from '../../../../components/common/TableNews';

const Charts = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>

        {/* cards widget */}
        <Grid xs={12} sm={6} md={3}>
          <CardWidget
            title="Weekly Sales"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <CardWidget
            title="New Users"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <CardWidget
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <CardWidget
            title="Bug Reports"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
        
        {/* card grapich */}
        <Grid xs={12} md={8}>
          <LineAreaChart
            title='Cart Line Chart'
            subheader='Example data format required (+43%)'
            pluralTitle='charts'
            // type=''
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                // *Casos de convinacion
                // {
                //   name: 'Team B',
                //   type: 'area',
                //   fill: 'gradient',
                //   data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                // },
                // {
                //   name: 'Team B',
                //   type: 'area',
                //   fill: 'solid',
                //   data: [8, 17, 4, 7, 29, 3, 12, 14, 15, 17, 13],
                // },
                // {
                //   name: 'Team A',
                //   type: 'column',
                //   fill: 'gradient',
                //   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                // },
                // {
                //   name: 'Team A',
                //   type: 'column',
                //   fill: 'solid',
                //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                // },
                // {
                //   name: 'Team C',
                //   type: 'line',
                //   fill: 'gradient',
                //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                // },
                // {
                //   name: 'Team A',
                //   type: 'line',
                //   fill: 'solid',
                //   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                // },
              ]
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <PieChart
            title="Cart Simple Pie Chart"
            subheader='Example data format required'
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Europe', value: 1443 },
                { label: 'Asia', value: 5435 },
                { label: 'Africa', value: 4443 },
                { label: 'Oceania', value: 2443 },
              ]
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <BarChart
            title='Bar line horizontal Chart'
            subheader='Example data format required'
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>

      <Grid xs={12} md={6} lg={4}>
        <RadarChart
          title="Current Subject"
          chart={{
            categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
            series: [
              { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
              { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
              { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
            ]
          }}
        />
      </Grid>

      <Grid xs={12} md={8}>
        <ColumnsChart
          title='Multi-Columns chart '
          subheader='Example data format required'
          pluralTitle='charts'
          chart={{
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            series: [
              {
                name: "data 1",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
              },
              {
                name: "data 2",
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
              },
              {
                name: "data 3",
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
              }
            ]
          }}
        />
      </Grid>

      <Grid xs={12} md={4}>
        <PieChart
          title="Cart Simple donut Chart"
          type='donut'
          chart={{
            series: [
              { label: 'America', value: 4344 },
              { label: 'Europe', value: 1443 },
              { label: 'Asia', value: 5435 },
              { label: 'Africa', value: 4443 },
              { label: 'Oceania', value: 2443 },
            ]
          }}
        />
      </Grid>

      {/* esta no esta responsive */}
      <Grid xs={12} lg={8}>
        <AppNewsUpdate
          title="News Update"
          list={[...Array(5)].map((_, index) => ({
            id: faker.string.uuid(),
            title: faker.person.jobTitle(),
            description: faker.commerce.productDescription(),
            image: \`/assets/images/covers/cover_\${index + 1}.jpg\`,
            postedAt: faker.date.recent(),
          }))} />
      </Grid>

      </Grid>
    </Container>
  )
}

export default Charts
`
  return data;
}
