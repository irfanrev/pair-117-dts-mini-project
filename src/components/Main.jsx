import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    console.log(movies)


    return (
        <div className='w-full h-[600px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

                <div className='absolute w-full top-[22%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='mt-4'>
                        <button className='border bg-white text-black border-gray-300 py-3 text-xl px-6 mr-4 hover:bg-gray-300 duration-200'>Play</button>
                        <button className='border text-white border-gray-300 py-3 px-6 text-xl'>Watch Later</button>
                    </div>
                    <p className='text-gray-400 text-sm mt-3'>Released : {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] xl:max-w-[40%] lg:max-w-[50%] text-gray-200 pt-2'>{movie?.overview}</p>
                </div>

            </div>
        </div>
    )
}

export default Main