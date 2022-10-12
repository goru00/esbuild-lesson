import React, { useState } from "react";
import './index.css';

const App = () => {
    const [count, setCount] = useState(0);

    // sourceMap
    onBtnClick = () => {
        throw new Error();
    }

    return (
        <div>
            <h1>hello, goru00!</h1>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Counter</button>
            <button onClick={onBtnClick}>Exception</button>
        </div>
    )
}

export default App;