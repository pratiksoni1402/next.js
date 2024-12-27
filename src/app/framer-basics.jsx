'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './globals.css'

export default function FramerBasics() {
  const [visibility, setVisibility] = useState(true)
  return (
    <div className="basics">
      <section className=" h-screen bg-slate-800">
        <h2 className="text-white text-6xl text-center">Basics</h2>

        <button
          onClick={() => setVisibility(!visibility)}
          className="text-white"
        >
          Toggle
        </button>
        <AnimatePresence>
          {visibility && (
            <motion.div
              style={{
                width: 100,
                height: 100,
                backgroundColor: 'skyblue',
              }}
              sc
              whileHover={{ scale: 2, backgroundColor: 'red' }}
              whileTap={{ scale: 0.5 }}
              initial={{ x: 500, y: -100, opacity: 0 }}
              animate={{ x: 500, y: 300, opacity: 1, scale: 3.2 }}
              exit={{ opacity: 0, y: -100, scale: 1 }}
              transition={{
                duration: 2,
                type: 'spring',
                stiffness: 100,
                ease: 'easeInOut',
              }}
            />
          )}
        </AnimatePresence>
      </section>

      <section className=" h-screen bg-slate-800">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            alignItems: 'center',
          }}
        >
          <motion.div
            style={{
              width: 200,
              height: 300,
              backgroundColor: 'skyblue',
              borderRadius: '10px',
              boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
            }}
            whileHover={{
              scale: 1.05, // Slightly grows
              y: -10, // Moves up
              opacity: 0.9, // Slight fade
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        </div>
      </section>
    </div>
  )
}
