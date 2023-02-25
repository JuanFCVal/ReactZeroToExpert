import React, { FC, useEffect, useState } from 'react'
import { IGifItem } from '../interfaces/gifItem'
import { getGifs } from '../services/gif_service'
import GifItem from './GifItem'
interface IGifGridProps {
    category: string
}
const GifGrid: FC<IGifGridProps> = ({ category }) => {
    const [images, setimages] = useState<IGifItem[]>([])
    const getGifsForComponent = async () => {
        const gifs = await getGifs(category)
        console.log(gifs)
        setimages(gifs)
    }
    useEffect(() => {
        getGifsForComponent()
    }, [])
    return (
        <>    <h2>
            {category} </h2>
            <div className='card-grid'>

                <br />
                {
                    images.map(
                        (gif: IGifItem) => (
                            <GifItem key={gif.id} gif={gif} />
                        )
                    )
                }
            </div>
        </>

    )
}

export default GifGrid