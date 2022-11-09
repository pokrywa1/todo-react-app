import { Fragment, useState, useEffect } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import AddForm from './components/AddForm';

function App() {
  const [formIsShown, setFormIsShown] = useState(false);
  //getting data from local storage or set default empty array []
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    const data = JSON.parse(saved);
    console.log(data);
    return data || [];
  });
  const [doneTodos, setDoneTodos] = useState([]);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    const onlyDone = todos.filter(item => item.done);
    setDoneTodos(onlyDone);
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
