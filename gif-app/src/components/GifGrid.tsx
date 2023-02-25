import React, { FC, useEffect, useState } from 'react'
import { IGifItem } from '../interfaces/gifItem'
import { getGifs } from '../services/gif_service'
import GifItem from './GifItem'
import useFetchGifs from '../hooks/useFetchGifs';
interface IGifGridProps {
    category: string
}
const GifGrid: FC<IGifGridProps> = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
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