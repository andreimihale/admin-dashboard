'use client';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import React from 'react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styles from './analyticsChart.module.css';

export interface DataItemProps<T> {
  title: string;
  fieldValue: string;
  values: T[];
}

const AnalyticsChart = <T,>({
  data,
  children,
}: {
  data: DataItemProps<T>[];
  children: React.ReactNode;
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(data[0]?.fieldValue || '');

  const values = data.map((item: { title: string; fieldValue: string }) => ({
    value: item.fieldValue,
    label: item.title.split(' ')[0],
  }));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          {values.find(
            (val: { value: string; label: string }) => val.value === value
          )?.label || values[0]?.label}{' '}
          Recap
        </h2>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              role='combobox'
              aria-expanded={open}
              className='w-[200px] justify-between bg-[#151c2c] hover:bg-[#151c2c]'
            >
              {value
                ? values.find(
                    (val: { value: string; label: string }) =>
                      val.value === value
                  )?.label
                : 'Select framework...'}
              <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[200px] p-0 bg-[#151c2c]'>
            <Command className='bg-[#151c2c]'>
              <CommandInput placeholder='Search framework...' className='h-9' />
              <CommandEmpty>No Filter found</CommandEmpty>
              <CommandGroup className='bg-[#151c2c]'>
                {values.map((val: { value: string; label: string }) => (
                  <CommandItem
                    key={val.value}
                    value={val.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      setOpen(false);
                    }}
                  >
                    {val.label.split(' ')[0]}
                    <CheckIcon
                      className={cn(
                        'ml-auto h-4 w-4',
                        value === val.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <ResponsiveContainer width='100%' height='90%'>
        <AreaChart
          width={500}
          height={400}
          data={
            data.filter(
              (val: { fieldValue: string; values: any }) =>
                val.fieldValue === value
            )[0].values
          }
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 20,
          }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip
            contentStyle={{
              background: '#151c2c',
              border: 'none',
              borderRadius: '0.75rem',
            }}
          />
          {children}
          <Area
            type='monotone'
            dataKey='organic'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#colorUv)'
          />
          <Area
            type='monotone'
            dataKey='direct'
            stroke='#82ca9d'
            fillOpacity={1}
            fill='url(#colorPv)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
