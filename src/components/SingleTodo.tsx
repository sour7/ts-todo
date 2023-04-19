import React, { useState, useRef, useEffect } from 'react';
import { Todo } from './models';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';
import './styles.css';
type Props = {
  item: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ item, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(item.todo);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, idx: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === idx ? { ...todos, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };

  const inpuRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inpuRef.current?.focus();
  }, [edit]);

  return (
    <form className="todo" onSubmit={(e) => handleEdit(e, item.id)}>
      {edit ? (
        <input
          ref={inpuRef}
          type="text"
          defaultValue={item.todo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="editinput"
        />
      ) : item.isDone ? (
        <s className="todotext">{item.todo}</s>
      ) : (
        <div className="todotext">{item.todo}</div>
      )}

      <div className="actionIcons">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !item.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(item.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(item.id)}>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
