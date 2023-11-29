import React from 'react'

export default function User() {
  console.log(process.env)
  return (
    <div className='learning'>
      <h1>Uer detail page</h1>
      <p>Testing</p>
    </div>
    
  )
}

export function generateMetadata({params}){
    return {    
        title: 'User',
        description: 'User page description'
    }
}