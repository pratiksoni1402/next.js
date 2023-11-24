import React from 'react'

export default function User() {
  return (
    <div>User</div>
  )
}

export function generateMetadata({params}){
    return {    
        title: 'User',
        description: 'User page description'
    }
}