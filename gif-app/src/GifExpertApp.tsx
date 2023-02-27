import { useState } from "react"
import AddCategory from "./components/AddCategory/add-category"
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setcategories] = useState<string[]>([])

    const onAddCategory = (value: string) => {
        const category = categories.find((category: string) => category === value)
        !category && setcategories([ value, ...categories])
    }
    return (
        <>
            <h1>Gif Experts</h1>
            <AddCategory
            onNewCategory = { (value: string) => onAddCategory(value)}
          ></AddCategory>
            {
                categories.map( (category: string) => (
                    <GifGrid  key={category} category={category}></GifGrid>
                ))
            }
        </>
    )
}

export default GifExpertApp
