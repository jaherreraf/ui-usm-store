import React from 'react'
import Footer from '../components/Footer'
const Login = () => {
  return (
    <div className='h-full  grid  grid-cols-1 items-center justify-items-center bg-gray-200'>
        <h1 className='uppercase text-4xl font-black mt-12 text-red-500 hover:text-red-400'>Iniciar Sección</h1>
            <form className='bg-white shadow-md p-12 w-96 h-96 rounded m-24'>
                <div className='mb-6'>
                    <label htmlFor='username' className='block text-gray-700 text-sm font-bold mb-2'>
                        Usuario o Correo electrónico
                    </label>
                    <input type='text' id='username' name='username'  placeholder='Usuario o Correo Electrónico' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-6'>
                    <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2' >
                        Contraseña
                    </label>
                    <input type='password' id='password' name='password' placeholder='******************' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
                </div>
                <div className='flex items-center justify-center md:col-span-2'>
                    <button type='button'  className='bg-red-400 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                        Iniciar Sección
                    </button>
                </div>
            </form>
        <Footer/>
    </div>
  )
}

export default Login