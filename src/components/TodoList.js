import React from 'react';
import classes from './TodoList.module.css';

function TodoList(props) {
  return (
    <li className={classes.todo__object}>
      <div className={classes.done__button}></div>
      {props.name}
    </li>
  );
}

export default TodoList;
