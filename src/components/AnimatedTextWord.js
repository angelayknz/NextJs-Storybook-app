import React from 'react'
import { motion } from 'framer-motion'

const AnimatedTextWord = ({ text }) => {
  const words = text.split(' ')

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.06 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', fontSize: '1.2rem' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{
            marginRight: '10px',
            marginLeft: '5px',
            background: 'linear-gradient(to left, #89fffd, #ef32d9)',
          }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedTextWord
