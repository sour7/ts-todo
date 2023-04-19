import React, { useState } from 'react';
import './App.css';
import InputFields from './components/InputFields';
import { Todo } from './components/models';
import TodoList from './components/TodoList';
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  };
  console.log('first', todos);

  return (
    <div className="App">
      <span className="heading">Task todo</span>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
