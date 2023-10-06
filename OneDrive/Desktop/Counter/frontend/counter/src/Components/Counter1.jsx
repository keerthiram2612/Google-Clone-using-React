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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      {/*  Display the counter value */}
      < div className='counter'>
      <h1>Counter: {count}</h1>
      {/*  Add buttons to increment and decrement the counter */}
      <button onClick={increment}><i class="fa-solid fa-plus fa-2xl"></i></button>
      <button onClick={decrement}><i class="fa-solid fa-minus fa-2xl"></i></button>
      </div>
    </div>
  );
}

export default Counter;

