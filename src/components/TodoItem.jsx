import React from 'react';
import { AiFillCheckCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import "./TodoItem.css";

const TodoItem = ({ todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo }) => {
  const { id, text, checked } = todo;
  return  <div className="TodoItem">
    <div className={`content ${checked ? "checked" : ""}`}>
      { checked ? 
      <AiFillCheckCircle 
      onClick={()=>{onCheckToggle(id)}}
      /> 
      : <AiOutlineCheckCircle 
      onClick={()=>{onCheckToggle(id)}}
      />}
      <div className="text" 
      onClick={()=> {
        onChangeSelectedTodo(todo)
        onInsertToggle()}}>
        {text}
      </div>
    </div>
    </div>
};

export default TodoItem;