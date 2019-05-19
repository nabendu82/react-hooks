import React, { useState } from 'react';
import ResourseList from './ResourceList';
import './App.css';

const App = () => {
    const [resource, setResource] = useState('posts');

    return (
        <div className="main__container">
            <span className="buttons__container">
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </span>
            <ResourseList item={resource} />
        </div>
    )

}

export default App;
