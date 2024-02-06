import { useState } from 'react'

const useForm = (initialForm : Record<string, any> = {}) => {
    const [formState, setFormState] = useState(initialForm)
    
    const onInputChange = ( { target} : {target: HTMLInputElement} ) => {
        const { name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    
    const onResetForm = () => {
        setFormState(
           initialForm
        )
    }
    
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}

export default useForm
