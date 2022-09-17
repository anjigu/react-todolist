import { useState, useRef, useCallback } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './components/TodoInsert';



const App = () => {
  const[ selectedTodo, setSelectedTodo ] = useState(null);
  const [ insertToggle, setInsertToggle ] = useState(false);
  const [ todos, setTodos ] = useState([
    {
      id: 1,
      text: "블로깅 하기",
      checked: true
    },
    {
      id: 2,
      text: "react 복습하기",
      checked: false
    },
    {
      id: 3,
      text: "투두 리스트 완성하기",
      checked: true
    }
]);
const nextId = useRef(4);
const onInsertToggle = useCallback(() => {
  if (selectedTodo) {
    setSelectedTodo((selectedTodo) => null);
  }
  setInsertToggle((prev) => !prev);
}, [selectedTodo]);



const onInsertTodo = useCallback((text) => {
  const todo = {
    id: nextId.current,
    text,
    checked: false,
  };
  setTodos((todos) => todos.concat(todo)); //concat(): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
  nextId.current++; //nextId 1씩 더하기
}, []);
  

const onCheckToggle = (id) => {
  setTodos(todos => 
    todos.map(todo => 
      (todo.id === id ? {...todo, checked: !todo.checked} : todo)))
 };

const onChangeSelectedTodo = (todo) => {
  setSelectedTodo(todo)
};

const onRemove = (id) => {
  onInsertToggle();
  setTodos(todos => todos.filter(todo => todo.id !== id))
};

const onUpdate = (id,text) => {
  onInsertToggle();
  setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo))
};

  return (
  <Template>
    <TodoList 
    todos={todos} 
    onCheckToggle={onCheckToggle} 
    onInsertToggle={onInsertToggle}
    onChangeSelectedTodo={onChangeSelectedTodo}
    />
    <div className="add-todo-button" onClick={onInsertToggle}>
      <MdAddCircle />
    </div>
    {insertToggle && (
    <TodoInsert 
    selectedTodo={selectedTodo}
    onInsertToggle={onInsertToggle}
    onInsertTodo={onInsertTodo}
    onRemove={onRemove}
    onUpdate={onUpdate}
    /> 
    )}
  </Template>
  );
};

export default App;
