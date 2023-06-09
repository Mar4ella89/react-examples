import { useSelector } from 'react-redux';

import { getStatusFilter } from '../../redux/selectors';
import { statusFilters } from 'AllExamples/Redux-example-8/redux/constants';
import { Button } from '../Button/Button';

import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(getStatusFilter);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
