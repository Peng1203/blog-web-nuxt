import dayjs from 'dayjs';

export const formateDate = (val: string) => {
  return dayjs(val).format('YYYY-MM-DD');
};
