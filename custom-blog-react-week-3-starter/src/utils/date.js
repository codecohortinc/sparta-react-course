import { format } from 'date-fns';

/**
 * date 객체 또는 문자열이 주어지면, 사람이 읽기 쉬운 형태로 변환합니다.
 */
export const humanizeDate = (date) => {
  return format(new Date(date), 'MMMM do, yyyy');
};
