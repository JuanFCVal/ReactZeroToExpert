import { useCounter } from '../../hooks/useCounter';

const CounterWIthCustomHook = () => {
    const number = 5;
    const { counter, addToCounter, minToCounter, resetCounter } = useCounter(15)
    return (
        <div>
            <hr />
            <h2>Custom Hook</h2>
            <h3>Counter with hook: {counter}</h3>
            <button className='btn btn-primary' onClick={() => addToCounter(number)}>+{number}</button>
            <button className="btn" onClick={resetCounter}>Reset</button>
            <button className='btn btn-primary' onClick={() => minToCounter(number)}>-{number}</button>
        </div>
  )
}


export default CounterWIthCustomHook
