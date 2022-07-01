import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello StackBlitz! {count}</h1>
      <button onClick={() => setCount(count + 1)}>click me!</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
