// 'use client'
import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import Profile from '../../public/uploads/images/kitchen.jpg'
export default function Home() {
    console.log(process.env.DB_PASSWORD)

    
    return (
        <main className="">
            <Image src={Profile} alt='' />

        </main>
    )
}
