import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const addTask = () => {
    if (title.trim() && description.trim()) {
      setTodos([...todos, { title, description, done: false }]);
      setTitle('');
      setDescription('');
    }
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <h1>TODO LIST APP</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button onClick={addTask}>ADD</button>
      </div>
      <div className="tasks-container">
        {todos.map((todo, index) => (
          <div className="task-box" key={index}>
            <div className="task-header">
              <button
                className={`status-btn ${todo.done ? 'done' : 'not-done'}`}
                onClick={() => toggleDone(index)}
              >
                {todo.done ? 'Done' : 'Not Done'}
              </button>
              <button className="remove-btn" onClick={() => removeTask(index)}>
                x
              </button>
              <div className="task-title">{todo.title}</div>
            </div>
            <div className="task-description">{todo.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
