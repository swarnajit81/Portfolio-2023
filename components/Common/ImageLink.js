import React from 'react'
import {motion} from 'framer-motion'

const ImageLink = ({index , elm}) => {
  return (
    <motion.img layoutId={`container-${index}`} transition={{duration: 1.25 , ease: [0.43, 0.13, 0.23, 0.96]}}  className='w-full h-full object-contain' src={elm?.img}  />
  )
}

export default ImageLink