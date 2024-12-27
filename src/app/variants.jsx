import React from 'react'
import { motion } from 'framer-motion'

export default function Variants() {
  const boxVariant = {
    hidden: { opacity: 0, y: 50 },
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
        variants={boxVariant}
        initial="hidden"
        whileHover="hover"
        animate="visible"
        transition={{ duration: 2 }}
      />
    </div>
  )
}
