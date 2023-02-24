import { useState } from "react"
import AddCategory from "./components/add-category"

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Pokemon'])

    const onAddCategory = () => {
        setcategories([...categories, 'HunterXHunter'])
    }
    console.log(categories)
    return (
        <>
            <h1>Gif Experts</h1>
            <AddCategory setCategories= {setcategories}></AddCategory>
            <ol>
                { categories.map(
                    category => <li key={category}>{category}</li>
                )}
            </ol>
            <button onClick={onAddCategory}>Agregar</button>
        </>
    )
}

export default GifExpertApp
