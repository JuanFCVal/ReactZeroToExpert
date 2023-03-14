import React, { useState } from 'react'

const useForm = (initialForm : Record<string, any>) => {
    const [formState, setFormState] = useState(initialForm)
    
    const onInputChange = ( { target} : {target: HTMLInputElement} ) => {
        const { name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    
    return {
        formState,
        onInputChange,
        ...formState
    }
}

export default useForm
