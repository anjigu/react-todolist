import React,{ useState } from 'react';
import { useEffect } from 'react';
import { MdAddCircle } from "react-icons/md"
import { HiPencil } from "react-icons/hi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import "./TodoInsert.css";
 

const TodoInsert = ({ onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate }) => {
  const [ value, setValue ] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if(selectedTodo) {
      setValue(selectedTodo.text)
    }
  }, [selectedTodo]);

  return (
    <div>
    <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={selectedTodo 
        ? () => {onUpdate(selectedTodo.id, value)} 
        : onSubmit}>
        <input placeholder="할 일 또는 메모 입력" 
        value={value} onChange={onChange}>
        </input>
        {selectedTodo 
        ? (<div className="rewrite">
          <HiPencil onClick = {() => {onUpdate(selectedTodo.id, value)}}/>
          <AiOutlineMinusCircle onClick={() => {onRemove(selectedTodo.id)}}/>
        </div>) 
        : (<button type="submit">
          <MdAddCircle />
        </button>
        )}
        <div className="footer">made by fejigu</div>
      </form>
    </div>
  );
};

export default TodoInsert;