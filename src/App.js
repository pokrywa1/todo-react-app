import { Fragment, useState, useEffect } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import AddForm from './components/AddForm';

function App() {
  const [formIsShown, setFormIsShown] = useState(false);
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  useEffect(() => {
    const onlyDone = todos.filter(item => item.done);
    setDoneTodos(item => {
      return onlyDone;
    });
    console.log(doneTodos);
  }, [todos]);
  const closeModalHandler = () => {
    setFormIsShown(false);
  };
  return (
    <Fragment>
      {formIsShown && (
        <AddForm
          onClose={closeModalHandler}
          setTodos={setTodos}
          todos={todos}
        ></AddForm>
      )}
      <TodoContainer
        showForm={setFormIsShown}
        todos={todos}
        setTodos={setTodos}
        doneTodos={doneTodos}
      ></TodoContainer>
    </Fragment>
  );
}

export default App;
