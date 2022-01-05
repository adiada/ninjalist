import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/vercel.svg" width={128} height={77}/>
                </div>          

            <Link href='/'><a>Home</a></Link>&nbsp;
            <Link href='/about'><a>About</a></Link>&nbsp;
            <Link href='/ninjas'><a>Ninja-Listing</a></Link>
        </nav>
    )
}

export default Navbar
