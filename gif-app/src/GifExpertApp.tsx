import { useState } from "react"
import AddCategory from "./components/add-category"

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Pokemon'])

    const onAddCategory = (value: string) => {
        setcategories([...categories, value])
    }
    console.log(categories)
    return (
        <>
            <h1>Gif Experts</h1>
            <AddCategory
            onNewCategory = { (value: string) => onAddCategory(value)}
          ></AddCategory>
            <ol>
                { categories.map(
                    category => <li key={category}>{category}</li>
                )}
            </ol>
        </>
    )
}

export default GifExpertApp
