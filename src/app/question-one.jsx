import React from 'react'
import { motion } from 'framer-motion'

export default function OpacityAnimation() {
  const boxVariant = {
    initial: { opacity: 0 },
    animation: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  }

  return (
    <div className="question h-screen bg-slate-800">
      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'cyan',
        }}
        variants={boxVariant}
        initial="initial"
        animate="animation"
      />
    </div>
  )
}
