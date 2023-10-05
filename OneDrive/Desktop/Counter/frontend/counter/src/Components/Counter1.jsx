import React, { useState } from 'react';


function Counter() {
  // Define a state variable to hold the counter value
  const [count, setCount] = useState(0);

  //  Create functions to increment and decrement the counter
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {/*  Display the counter value */}
      <h1>Counter: {count}</h1>
      {/*  Add buttons to increment and decrement the counter */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
