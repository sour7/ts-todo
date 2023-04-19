import React from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFields = ({ todo, setTodo, handleAdd }: Props) => {
  //   console.log(todo);
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="enter your task"
        className="inputBox"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="inputSubmit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFields;
