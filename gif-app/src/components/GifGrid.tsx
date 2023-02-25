import React, { FC, useEffect } from 'react'
import { getGifs } from '../services/gif_service'
interface IGifGridProps{
    category: string
}
const GifGrid:FC<IGifGridProps> = ( { category }) => {

useEffect(() => {

  getGifs(category)

}, [])


  return (
    <h2>{category}</h2>
  )
}

export default GifGrid