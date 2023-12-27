import { useState } from 'react';

let updates = 0;

const Task = () => {
  const [state, setState] = useState(0);

  console.log('updated', updates++);

  // increased by 4
  const onClick1 = () => {
    setState(prev => prev + 1);
    setState(prev => prev + 1);
    setState(prev => prev + 1);
    setState(prev => prev + 1);
  };

  // only increases by 1 since they are batched
  const onClick2 = () => {
    setState(state + 1);
    setState(state + 1);
    setState(state + 1);
    setState(state + 1);
  };
  console.log(state);
  return <button onClick={onClick}>Trigger</button>;
};

// export default Task;

// -----------------------------------------

import { useState } from 'react';

const Counter = ({ name }) => {
  const [counter, setCount] = useState(0);

  return (
    <div>
      <p>{name}</p>

      <div>
        <button onClick={() => setCount(counter - 1)}>-</button>
        <span>{counter}</span>
        <button onClick={() => setCount(counter + 1)}>+</button>
      </div>
    </div>
  );
};

const Task1 = () => {
  const [user, setUser] = useState('John');

  return (
    <div>
      {user === 'John' ? (
        // adding key to components make them rerender on change
        <Counter key='John' name='John' />
      ) : (
        <Counter name='Myke' key='Myke' />
      )}
      <br />
      <button onClick={() => setUser(user === 'John' ? 'Myke' : 'John')}>
        Change User
      </button>
    </div>
  );
};

// export default Task1;
