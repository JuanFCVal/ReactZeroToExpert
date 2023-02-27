import React, { FormEvent, FunctionComponent } from 'react'
import { useState } from 'react';

interface IProps {
    onNewCategory: Function
}
const AddCategory: FunctionComponent<IProps> = (
    { onNewCategory }
) => {
    const [query, setQuery] = useState('')
    const handleSubmit = (event: FormEvent) => { 
        event.preventDefault()
        if(query.length <= 2) return
        onNewCategory(query)
        setQuery('')
    }
    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)} aria-label="form">
                <input
                    type="text"
                    placeholder='Categoria'
                    value={query}
                    onChange={
                        (e) => {
                            setQuery(e.target.value)
                        }
                    }
                >
                </input>
            </form>

        </>
    )
}

export default AddCategory