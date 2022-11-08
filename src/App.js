import { Fragment, useState } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import AddForm from './components/AddForm';

function App() {
  const [formIsShown, setFormIsShown] = useState(false);
  const closeModalHandler = () => {
    setFormIsShown(false);
  };
  return (
    <Fragment>
      {formIsShown && <AddForm onClose={closeModalHandler}></AddForm>}
      <TodoContainer showForm={setFormIsShown}></TodoContainer>
    </Fragment>
  );
}

export default App;
