import React, { useState, useEffect } from 'react';
import Modal from './Store/Modal';
import classes from './AddForm.module.css';
function AddForm(props) {
  const [inputText, setInputText] = useState('');
  const [isPositive, setIsPositive] = useState(false);

  //check input value is Correct. Value must be longer than 0
  useEffect(() => {
    setIsPositive(() => {
      return inputText.length > 0;
    });
  }, [inputText]);

  const taskHandler = e => {
    setInputText(e.target.value);
  };
  const buttonHandler = e => {
    e.preventDefault();
    if (inputText.length === 0) return; //
    props.setTodos([
      ...props.todos,
      {
        id: Math.random() * 1000,
        name: inputText,
        done: false,
      },
    ]);
    console.log(props.todos);
    props.onClose();
  };
  return (
    <Modal onClose={props.onClose}>
      <h2 className={classes.title}>Add your plans and tasks</h2>
      <form onSubmit={buttonHandler} className={classes.task__form}>
        <input
          onChange={taskHandler}
          type="text"
          name="task"
          id="task"
          className={classes.placeholder}
          placeholder="add task"
        />

        <input
          disabled={!isPositive}
          type="button"
          className={classes.submit__button}
          value="accept"
          onClick={buttonHandler}
        />
      </form>
    </Modal>
  );
}

export default AddForm;
