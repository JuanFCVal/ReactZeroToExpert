import { useEffect } from 'react';

const Message = () => {
    const onMouseMove = ({x,y}: {x:any, y: any}) => {
        console.log(x,y)
    }
    useEffect(() => {
   
        window.addEventListener('mousemove',onMouseMove )
      console.log("Mounted")

      return () => {
        window.removeEventListener('mousemove',onMouseMove)
        console.log("UnMounted")

      }
    }, [])
    
  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  )
}

export default Message
