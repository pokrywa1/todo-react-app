import { Fragment, useState } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import AddForm from './components/AddForm';

function App() {
  const [formIsShown, setFormIsShown] = useState(false);
  const [todos, setTodos] = useState([]);
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
      ></TodoContainer>
    </Fragment>
  );
}

export default App;
