import React, { useState } from 'react';
import './App.css';
import ToDo from "./components/ToDo/ToDo"
import FlexContainer from './components/ToDoContainer/flexContainer';
import todos from './components/DataToDo/DataToDos';
import FormToDo from './components/Form/FormToDo';
import Input from './components/Input/Input';
function App() {
  const [state, setState] = useState(todos);
  const [formData, setFormData] = useState({
    title: '',
    discription: "",
  });
  const [mode, setMode] = useState('create')
  const selectedFormUpdate = (todo) => {
    setFormData(todo);
    setMode('update')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'create') {
      setState([...state, { ...formData, id: Math.floor(Math.random() * 1000) }]);
    }
    else {
      setState(
        state.map(item => item.id === formData.id ? formData : item)
      );
      setMode('create')
    }
    setFormData({
      id: 0,
      title: "",
      discription: "",
    });
  };
  const handleDeleteToDo = id => {
    setState(state.filter(item => item.id !== id));
  }

  return (
    <div className='box-form'>
      <FormToDo
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <FlexContainer>
        {
          state.map(todo =>
            <ToDo
              key={todo.id}
              title={todo.title}
              description={todo.discription}
              onClick={() => handleDeleteToDo(todo.id)}
              onClickUpdate={() => selectedFormUpdate(todo)}
            />
          )
        }
      </FlexContainer>

    </div>
  );
}

export default App;
