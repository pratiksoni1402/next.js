import React, { useState } from 'react'
import { motion } from 'framer-motion'

function LayoutAnimation() {
  const [items, setItems] = useState([1, 2, 3])

  const addItem = () => {
    setItems([...items, items.length + 1])
  }

  const removeItem = () => {
    setItems(items.slice(0, -1))
  }

  return (
    <div className="h-screen bg-slate-800 flex flex-col items-center space-y-4">
      <div>
        <button
          onClick={addItem}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Add Item
        </button>
        <button
          onClick={removeItem}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Remove Item
        </button>
      </div>
      <motion.div
        layout
        className="flex flex-wrap gap-4 p-4 bg-gray-700 rounded-lg"
      >
        {items.map((item) => (
          <motion.div
            key={item}
            layout
            className="bg-cyan-600 text-white w-20 h-20 flex items-center justify-center rounded"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default LayoutAnimation
