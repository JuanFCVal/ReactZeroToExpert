import {useState} from 'react';
export const useCounter = (initiaLValue = 10) => {
    const [counter, setCounter] = useState(initiaLValue)
    const addToCounter = (value = 1) => {
        setCounter(counter+value)
    }
    const minToCounter = (value = 1) => {
        setCounter(counter-value)
    }
    const resetCounter = () => {
        setCounter(0)
    }
    return {
        counter,
        addToCounter,
        minToCounter,
        resetCounter
    }
}