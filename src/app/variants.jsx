import React from 'react'
import { motion } from 'framer-motion'

export default function Variants() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      x: 300,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const boxVariant = {
    hidden: (custom) => ({
      opacity: 0,
      x: custom * 50,
    }),
    visible: { opacity: 1, y: 0 },
    hover: { backgroundColor: 'green', scale: 1.8, x: 100 },
  }

  return (
    <div className="variants h-screen bg-slate-800">
      <h2 className="text-white text-6xl text-center">Variants</h2>
      <motion.div
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'teal',
        }}
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2 }}
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            style={{
              width: 50,
              height: 50,
              padding: '10px',
              backgroundColor: 'skyblue',
            }}
            variants={boxVariant}
            custom={1}
          />
        ))}
      </motion.div>
    </div>
  )
}
