import { useState, useEffect } from 'react';



function Note() {
    const [tasks, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    return (
        <>
            <h1>Note APP</h1>
            <input type="text" />
            <button>ADD</button>
        </>
    )
}
export default Note;