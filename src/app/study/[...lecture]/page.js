'use client'
import React from 'react'
export default function Lecture({ params }) {
    return (
        <>
            <div>Lecture number is: {params.lecture[0]}</div>
            <div>Day of Lecture is:  {params.lecture[1]}</div>
            <div>Time of Lecture is {params.lecture[2]}</div>
        </>
    )
}
