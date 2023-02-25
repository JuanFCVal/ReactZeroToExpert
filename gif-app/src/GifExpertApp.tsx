import { useState } from "react"
import AddCategory from "./components/add-category"
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Pokemon'])

    const onAddCategory = (value: string) => {
        const category = categories.find(category => category === value)
        !category && setcategories([...categories, value])
    }
    return (
        <>
            <h1>Gif Experts</h1>
            <AddCategory
            onNewCategory = { (value: string) => onAddCategory(value)}
          ></AddCategory>

            {
                categories.map( (category) => (
                    <GifGrid  key={category} category={category}></GifGrid>
                ))
            }
        </>
    )
}

export default GifExpertApp
