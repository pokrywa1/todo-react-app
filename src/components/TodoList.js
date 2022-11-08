import React from 'react';
import classes from './TodoList.module.css';

function TodoList(props) {
  //change 'done' in state
  const doneHandler = () => {
    props.setTodos(oldArray => {
      const newArray = oldArray.map(item => {
        if (item.id !== props.id) return item;
        return {
          id: item.id,
          name: item.name,
          done: true,
        };
      });

      return newArray;
    });
    console.log(props.todos);
  };
  return (
    <li className={classes.todo__object}>
      <div className={classes.done__button} onClick={doneHandler}></div>
      {props.name}
    </li>
  );
}

export default TodoList;
