import { useState } from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="container">
            <p>{count}</p>
            <div className="btnContainer">
                <button onClick={() => setCount(count+1)}>Increment</button>
                <button onClick={() => setCount(count-1)}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;