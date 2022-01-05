import React from 'react'

export const getStaticPaths = async () => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        const paths = data.map( (ninja) => {
            return {
                params : { 
                    id : ninja.id.toString()
                    }
            }
        })

        return {
            paths: paths,
            fallback : false
        }

    } catch(e) {
        console.log('error :',e.message)
        return e.message
    }
}

export const getStaticProps = async (context) => {

    try{
        const id = context.params.id
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        const data = await res.json() 

        return {
            props : {
                ninja : data
            }
        }


    } catch (e){
        console.log('error :',e.message)
        return e.message
    }
}


const Details = ({ninja}) => {
    return (
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
    )
}

export default Details