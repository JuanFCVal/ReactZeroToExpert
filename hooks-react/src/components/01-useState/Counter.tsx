import {useState} from 'react';
import { Onclick } from '../../../../gif-app/src/interfaces/gifs-response';

const Counter = () => {
const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
})
  return (
    <>
    <h2>Use State Hook</h2>
    <h3>Counter: {counter.counter1}</h3>
    <hr />
    <button className='btn' onClick={() => setCounter(
        {
            ...counter,
            counter1: counter.counter1 + 1
        }
    )}>+1</button>
    </>
  )
}

export default Counter