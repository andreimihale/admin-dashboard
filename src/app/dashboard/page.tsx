import AnalyticsCard from '@/components/dashboard/analyticsCard/AnalyticsCard';
import AnalyticsChart, {
  DataItemProps,
} from '@/components/dashboard/analyticsChart/AnalyticsChart';
import styles from '@/components/dashboard/dashboard.module.css';
import MostVisited, {
  MostVisitedProps,
} from '@/components/dashboard/mostVisited/MostVisited';
import { Timer, User, UserPlus } from 'lucide-react';

const DashboardPage = () => {
  const cards = [
    {
      id: 1,
      title: 'Total Users',
      number: 10.928,
      change: 12,
      icon: <User />,
    },
    {
      id: 2,
      title: 'New Users',
      number: 8.236,
      change: -2,
      icon: <UserPlus />,
    },
    {
      id: 3,
      title: 'Average time',
      number: 6.642,
      change: 18,
      icon: <Timer />,
    },
  ];

  const mostVisitedData: MostVisitedProps = {
    headers: [
      { title: 'Page', align: 'left' },
      { title: 'Visitors', align: 'right' },
      { title: 'Unique Visitors', align: 'right' },
      { title: 'Average Time', align: 'right' },
    ],
    data: [
      {
        values: ['/', '2.356', '1.543', '1.553'],
        align: ['left', 'right', 'right', 'right'],
      },
      {
        values: ['/about', '1.553', '1.232', '1.034'],
        align: ['left', 'right', 'right', 'right'],
      },
      {
        values: ['/contact', '1.232', '1.034', '823'],
        align: ['left', 'right', 'right', 'right'],
      },
      {
        values: ['/blog', '1.034', '823', '1.232'],
        align: ['left', 'right', 'right', 'right'],
      },
    ],
  };
  interface ValueProps {
    name: string;
    organic: number;
    direct: number;
  }
  const data: DataItemProps<ValueProps>[] = [
    {
      title: 'Weekly Recap',
      fieldValue: 'weekly',
      values: [
        {
          name: 'Mon',
          organic: 4000,
          direct: 2400,
        },
        {
          name: 'Tue',
          organic: 3000,
          direct: 1398,
        },
        {
          name: 'Wed',
          organic: 2000,
          direct: 9800,
        },
        {
          name: 'Thu',
          organic: 2780,
          direct: 3908,
        },
        {
          name: 'Fri',
          organic: 1890,
          direct: 4800,
        },
        {
          name: 'Sat',
          organic: 2390,
          direct: 3800,
        },
        {
          name: 'Sun',
          organic: 3490,
          direct: 4300,
        },
      ],
    },
    {
      title: 'Monthly Recap',
      fieldValue: 'monthly',
      values: [
        {
          name: 'Jan',
          organic: 4000,
          direct: 2400,
        },
        {
          name: 'Feb',
          organic: 3000,
          direct: 1398,
        },
        {
          name: 'Mar',
          organic: 2000,
          direct: 900,
        },
        {
          name: 'Apr',
          organic: 2780,
          direct: 3908,
        },
        {
          name: 'May',
          organic: 1890,
          direct: 2354,
        },
        {
          name: 'Jun',
          organic: 2390,
          direct: 2345,
        },
        {
          name: 'Jul',
          organic: 3490,
          direct: 123,
        },
        {
          name: 'Aug',
          organic: 123,
          direct: 567,
        },
        {
          name: 'Sep',
          organic: 1455,
          direct: 2652,
        },
        {
          name: 'Oct',
          organic: 763,
          direct: 763,
        },
        {
          name: 'Nov',
          organic: 785,
          direct: 324,
        },
        {
          name: 'Dec',
          organic: 231,
          direct: 653,
        },
      ],
    },
    {
      title: 'Yearly Recap',
      fieldValue: 'yearly',
      values: [
        {
          name: '2016',
          organic: 4000,
          direct: 2400,
        },
        {
          name: '2017',
          organic: 3000,
          direct: 1398,
        },
        {
          name: '2018',
          organic: 2000,
          direct: 9800,
        },
        {
          name: '2019',
          organic: 2780,
          direct: 3908,
        },
        {
          name: '2020',
          organic: 1890,
          direct: 4800,
        },
        {
          name: '2021',
          organic: 2390,
          direct: 3800,
        },
      ],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {cards.map((card) => (
          <AnalyticsCard key={card.id} item={card} />
        ))}
      </div>
      <MostVisited
        headers={mostVisitedData.headers}
        data={mostVisitedData.data}
      />
      <AnalyticsChart data={data}>
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
          </linearGradient>
        </defs>
      </AnalyticsChart>
    </div>
  );
};

export default DashboardPage;
