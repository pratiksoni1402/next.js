
import Image from 'next/image'
import Profile from '../../public/uploads/images/kitchen.jpg'
export default function Home() {
    console.log(process.env.DB_PASSWORD)

    
    return (
        <main className="">
            <Image src={Profile} alt='' />
            <p>Creating API</p>

        </main>
    )
}
