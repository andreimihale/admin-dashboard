import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import styles from './mostVisited.module.css';

export interface MostVisitedProps {
  headers: {
    title: string;
    align: 'left' | 'right' | 'center';
  }[];
  data: {
    values: string[];
    align: ('left' | 'right' | 'center')[];
  }[];
}
const MostVisited = ({ headers, data }: MostVisitedProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <Table className={styles.container}>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header.title} className={`text-${header.align}`}>
                {header.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {row.values.map((value, index) => (
                <TableCell key={index} className={`text-${row.align[index]}`}>
                  <Link href={`https://www.portofolio.linktech.dev${value}`}>
                    {value}
                  </Link>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MostVisited;
