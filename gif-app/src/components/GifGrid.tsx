import React, { FC } from 'react'
interface IGifGridProps{
    category: string
}
const GifGrid:FC<IGifGridProps> = ( { category }) => {
  return (
    <h2>{category}</h2>
  )
}

export default GifGrid