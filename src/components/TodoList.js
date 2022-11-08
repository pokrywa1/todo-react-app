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
          done: !item.done,
        };
      });

      return newArray;
    });
    console.log(props.todos);
  };

  const markButtonClass = props.done
    ? classes.done__button + ' ' + classes.mark__done
    : classes.done__button;
  return (
    <li className={classes.todo__object}>
      <div className={markButtonClass} onClick={doneHandler}></div>
      {!props.done ? props.name : <s>{props.name}</s>}
    </li>
  );
}

export default TodoList;
