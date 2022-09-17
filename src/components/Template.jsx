import React from 'react';
import "./Template.css";

const Template = ({ children, todoLength }) => {
  return (
    <div className="Background">
    <div className="Template">
    <div className="title">Todo List</div>
    <div>{ children }</div>
    </div>
    </div>
  );
};

export default Template;