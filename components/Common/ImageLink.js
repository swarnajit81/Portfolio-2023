import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import { AppContext } from '@context/AppContext'

const ImageLink = ({index , elm}) => {
  const {setCursorStyle} = useContext(AppContext)
  return (
    <motion.img onMouseEnter={() => setCursorStyle("hovered")} onMouseLeave={() => setCursorStyle("")} layoutId={`container-${index}`} transition={{duration: 1.25 , ease: [0.43, 0.13, 0.23, 0.96]}}  className='w-full h-full object-contain' src={elm?.img}  />
  )
}

export default ImageLink