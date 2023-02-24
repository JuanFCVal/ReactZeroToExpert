import React, { FormEvent } from 'react'
import { useState } from 'react';

const AddCategory = () => {
    const [query, setQuery] = useState('')
    const handleSubmit = (event: FormEvent) => { 
        event.preventDefault()
        console.log(query)
    }
    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)}>
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