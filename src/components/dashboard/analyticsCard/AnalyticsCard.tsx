import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import styles from './analyticsCard.module.css';

interface AnalyticsCardProps {
  item: {
    title: string;
    number: number;
    change: number;
    icon: any;
  };
}

const AnalyticsCard = ({ item }: AnalyticsCardProps) => {
  return (
    <Card className={styles.container}>
      <CardHeader>
        <CardTitle className={styles.title}>
          {item.icon}
          {item.title}
        </CardTitle>
        <CardDescription className={styles.detail}>
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{' '}
          {item.change > 0 ? 'more' : 'less'} than previous week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className={styles.content}>
          <div className={styles.texts}>
            <span className={styles.number}>{item.number}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
