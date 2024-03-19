import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';
import "./style.css";
import { setFilter } from '../../Redux/Actions/actions';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state);

  const handleFilter = (filterValue) => {
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      

      <div className='tasks'>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;