import { useState, useEffect } from 'react';
import './App.css';

function Note() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState(''); 

  // Load TODOs from local storage on app startup
//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem('todos'));
//     if (storedTodos) {
//       setTodos(storedTodos);
//     }
//   }, []);

  // Update local storage whenever TODOs change
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);


  useEffect(() => {
    const savedMode = localStorage.getItem('todos');
    if (savedMode !== null) {
      setTodos(JSON.parse(savedMode));
    }
  }, []);


  const handleReset = () => {
    // Reset todos to an empty array
    setTodos([]);
    localStorage.removeItem('todos'); // Remove the todos from localStorage
  };


  // const handleReset=()=>{
  //   // useEffect(() => {
  //   //   // Retrieve the dark mode state from localStorage when the component mounts
  //   //   let savedMode = localStorage.getItem('todos');
  //   //   if (savedMode !== null) {
  //   //   let dMode=[];
  //   //     setTodos(JSON.parse(dMode));
  //   //   }
  //   // }, []);
  // }

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      let MyUpdatedTask = [...todos,task];
      setTodos(MyUpdatedTask);
      localStorage.setItem('todos',JSON.stringify(MyUpdatedTask));
      setTask('');
    }
  };

  // const handleRemoveTodo = (index) => {
  //   const newTodos = todos.filter((_, i) => i !== index);
  //   setTodos(newTodos);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>NoteWrap</h1>
        <div className="todo-input">
          <input
            type="text"
            placeholder="Add a new task here"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </header>
    <ul>
     {
      todos.map((todo,index)=>(
        <li key={index}>
          {todo}
        </li>
      ))
     }
     </ul>
    </div>
  );
}

// function Note({bio}){
//     // let name = "Rakesh Sadhukhan"
//     return (
//         <>
//             <h1>My Name is {bio.title}</h1>
//             <h1> DESC = {bio.body}</h1>
//             <h1>Time =  {bio.time}</h1>
//         </>
//     )
// }

export default Note;