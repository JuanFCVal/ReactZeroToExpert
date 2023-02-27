import React, { FC } from 'react'
import { IGifItem } from '../../interfaces/gifItem'
interface IGifItemProps{
    gif: IGifItem
}
const GifItem: FC<IGifItemProps> = ({gif}) => {
  return (
    <div className='card'>
    <img src={gif.url} alt={gif.title}/>
    <p>{gif.title}</p>
    </div>
  )
}

export default GifItem