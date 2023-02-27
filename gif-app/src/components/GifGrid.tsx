import React, { FC, useEffect, useState } from 'react'
import { IGifItem } from '../interfaces/gifItem'
import { getGifs } from '../services/gif_service'
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem/GifItem';
interface IGifGridProps {
    category: string
}
const GifGrid: FC<IGifGridProps> = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
    return (
        <>    <h2>
            {category} </h2>
            <div className='card-grid'>
                {
                    isLoading && <p>Loading...</p>
                }
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