import React, { useState } from 'react';
import classes from './TodoContainer.module.css';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsCalendarCheck } from 'react-icons/bs';
import TodoList from './TodoList';
function TodoContainer(props) {
  const [isActive, setActive] = useState(false);

  const changeTabHandler = () => {
    setActive(!isActive);
  };

  const newTaskHandler = e => {
    e.preventDefault();
    props.showForm(true);
  };
  return (
    <main className={classes.main__container}>
      <nav>
        <ul className={classes.nav__list}>
          <li
            className={isActive ? classes.unactive : ''}
            onClick={changeTabHandler}
          >
            <AiOutlineUnorderedList></AiOutlineUnorderedList>
          </li>
          <li
            className={!isActive ? classes.unactive : ''}
            onClick={changeTabHandler}
          >
            <BsCalendarCheck></BsCalendarCheck>
          </li>
        </ul>
      </nav>
      {!isActive && (
        <ul className={classes.todo__container}>
          {props.todos.map(item => {
            return (
              <TodoList
                key={item.id}
                name={item.name}
                done={item.done}
              ></TodoList>
            );
          })}
        </ul>
      )}
      <button onClick={newTaskHandler} className={classes.add__button}>
        + New Task
      </button>
    </main>
  );
}

export default TodoContainer;
