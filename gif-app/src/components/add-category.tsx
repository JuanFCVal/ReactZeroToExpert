import React, { FormEvent, FunctionComponent } from 'react'
import { useState } from 'react';

interface IProps {
    setCategories: Function
}
const AddCategory: FunctionComponent<IProps> = (
    { setCategories }
) => {
    const [query, setQuery] = useState('')
    const handleSubmit = (event: FormEvent) => { 
        event.preventDefault()
        if(query.length <= 2) return
        setCategories((categories : any) => [...categories, query])
        setQuery('')
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