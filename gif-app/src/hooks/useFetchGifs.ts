import { useEffect, useState } from "react"
import { IGifItem } from "../interfaces/gifItem"
import  { getGifs }  from "../services/gif_service"
 
export const useFetchGifs = (category: string) => {
    const [images, setimages] = useState<IGifItem[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const getGifsForComponent = async () => {
        const gifs = await getGifs(category)
        setimages(gifs)
        setIsLoading(false)
    }
    useEffect(() => {
        getGifsForComponent()
    }, [])
    return {
        images,
        isLoading
    }
}

