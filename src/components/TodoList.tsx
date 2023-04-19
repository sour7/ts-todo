import React from 'react';
import { Todo } from './models';
import { FaEdit } from '@react-icons/all-files/fa/FaEdit';
import './styles.css';
import SingleTodo from './SingleTodo';
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos
        .sort((a, b) => b.id - a.id)
        .map((e: Todo) => (
          <SingleTodo key={e.id} item={e} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  );
};

export default TodoList;
