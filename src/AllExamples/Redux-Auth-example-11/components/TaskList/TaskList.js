import { useSelector } from 'react-redux';

import { selectVisibleTasks } from '../../redux/tasks/selectors';
import { Task } from '../Task/Task';

import css from './TaskList.module.css';

export const TaskList = () => {
  const visibleTasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li key={task.id} className={css.listItem}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
