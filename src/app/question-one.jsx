import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function OpacityAnimation() {
  const [visibility, setVisibility] = useState(true)
  const boxVariant = {
    initial: { opacity: 0 },
    animation: {
      opacity: [1, 0.5, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 2,
        ease: 'easeIn',
      },
    },
  }

  return (
    <div className="question h-screen bg-slate-800">
      <button onClick={() => setVisibility(!visibility)}>Hide</button>
      <AnimatePresence>
        {visibility && (
          <motion.div
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'cyan',
            }}
            variants={boxVariant}
            initial="initial"
            animate="animation"
            exit="exit"
          />
        )}
      </AnimatePresence>
    </div>
  )
}
