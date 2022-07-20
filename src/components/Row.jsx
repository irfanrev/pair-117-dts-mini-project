import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({ title, fetchURL, rowID }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <h2 className='font-bold text-white md:text-xl p-4'>{title}</h2>
            <div className="relative flex items-center m-2 group">
                <MdChevronLeft onClick={slideLeft} className='absolute left-0 bg-white rounded-full opacity-50 hover:opacity-100 z-10 hidden group-hover:block' size={40} />
                <div id={'slider'+rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide" >
                    {movies.map((item, id) => (
                        <Movie key={id} item={item} />
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} className='absolute right-0 bg-white rounded-full opacity-50 hover:opacity-100 z-10 hidden group-hover:block' size={40} />
            </div>
        </>
    )
}

export default Row