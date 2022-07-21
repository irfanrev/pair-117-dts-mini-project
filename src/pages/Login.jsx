import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {user, logIn} = UserAuth()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
           await logIn(email, password);
              navigate('/')
        } catch (error){
            console.log('error');
            setError(error.message)
        }
    }

  return (
    <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block w-full h-full absolute object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/947d9d58-b644-43b9-9cbc-d4b8367b86c1/ID-id-20220718-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
                <div className='bg-black/60 top-0 left-0 fixed w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] bg-black/60 text-white mx-auto'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <div className='text-3xl font-bold'>Sign In</div>
                            {error ? <p className='bg-red-400 p-3 my-2'>{error}</p> : null}
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4' action="">
                                <input onChange={(e) => setEmail(e.target.value)} className='p-3 bg-gray-700 rounded my-2' type="email" name="" id="" placeholder='Email' />
                                <input onChange={(e) => setPassword(e.target.value)} className='p-3 bg-gray-700 rounded my-2' type="password" name="" id="" placeholder='Password' autoComplete='current-password' />
                                <button className='bg-red-500 py-3 px-6 rounded mt-4'>Sign In</button>
                            </form>
                            <p className='py-8'>
                                <span className='text-gray-600'>
                                    New to Netflix?
                                </span>
                                <Link to='/Signup'> Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Login