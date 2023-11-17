'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Home() {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name)
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Home Page</h1>
            <button onClick={() => alert('Hello')}>Click Me</button>
            <Link href='/login'>Login</Link>
            <Link href='/about'>About</Link>
            <button onClick={() => navigate('/login ')}>Go to login page</button>

        </main>
    )
}
