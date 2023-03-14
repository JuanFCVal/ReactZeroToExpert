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
    
    const onResetForm = () => {
        console.log('resetForm')
        setFormState(
           initialForm
        )
    }
    
    return {
        formState,
        onInputChange,
        onResetForm,
    }
}

export default useForm
