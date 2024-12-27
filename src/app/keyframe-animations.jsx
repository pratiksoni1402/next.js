import React from 'react'
import { motion } from 'framer-motion'

export default function KeyFrameAnimations() {
  const boxVariant = {
    bounce: {
      x: [0, -50, 50, 70, 80, 40],
      y: [20, 50],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
        type: 'spring',
      },
    },
  }

  const pulseVariant = {
    pulse: {
      x: 200,
      opacity: [0, 0.5, 0.8, 0.2],
      scale: [1, 1.2, 1.4, 1.6, 1.8, 2, 2.5],
      transition: {
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  }

  const containerVariant = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const childVariant = {
    initial: { y: 0, opacity: 1 },
    animate: {
      y: [0, 20, -20, 0],
      opacity: [1, 0.5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  }

  return (
    <div className="keyframe h-screen bg-slate-800">
      <h1>Keyframe Animations</h1>
      <motion.div
        style={{ display: 'flex', gap: '10px' }}
        variants={containerVariant}
        initial="initail"
        animate="animate"
      >
        {[1, 2, 3].map((j) => (
          <motion.div
            key={j}
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'skyblue',
            }}
            variants={childVariant}
          />
        ))}
      </motion.div>
    </div>
  )
}
