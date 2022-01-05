import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter()

    useEffect(() => {
        // console.log('use effect ran ')
        setTimeout( () => {
            //router.back() to go back to a page
            router.push('/')
        },3000)
    },[])

    return (
        <div className='not-found'>
            <h1>Oooops......</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
        </div>
    )
}


export default NotFound