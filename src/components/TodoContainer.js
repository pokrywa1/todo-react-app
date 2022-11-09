import React, { useState, useEffect } from 'react';
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

  const clearHandler = () => {
    const clearedTodos = props.todos.filter(item => !item.done);
    props.setTodos(clearedTodos);
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
                id={item.id}
                name={item.name}
                done={item.done}
                setTodos={props.setTodos}
                todos={props.todos}
              ></TodoList>
            );
          })}
        </ul>
      )}
      {isActive && (
        <ul className={classes.todo__container}>
          {props.doneTodos.map(item => {
            return (
              <TodoList
                key={item.id}
                id={item.id}
                name={item.name}
                done={item.done}
                setTodos={props.setTodos}
                doneTodos={props.doneTodos}
              ></TodoList>
            );
          })}
        </ul>
      )}

      {!isActive && (
        <button onClick={newTaskHandler} className={classes.add__button}>
          + New Task
        </button>
      )}
      {isActive && (
        <button
          disabled={!props.doneTodos.length > 0}
          onClick={clearHandler}
          className={classes.add__button}
        >
          Clear all
        </button>
      )}
    </main>
  );
}

export default TodoContainer;
