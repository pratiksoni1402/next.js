// 'use client'
import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import Profile from '../../public/uploads/images/kitchen.jpg'
export default function Home() {
    
    return (
        <main className="">
            <Image src={Profile} alt='' />

        </main>
    )
}
