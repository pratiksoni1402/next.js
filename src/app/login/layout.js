import React, { Children } from 'react'
import Link from 'next/link'
export default function layout({children}) {
    return (
        <>
            <div>
                <h1>This is Common page layout for teacher and student login</h1>
                <ul>
                    <li><Link href='/login/student-login' > Student Login</Link></li>
                    <li><Link href='/login/teacher-login'> Teacher Login</Link></li>
                    <li><Link href='/'></Link></li>
                </ul>
                {children}
                
            </div>
        </>
    )
}
