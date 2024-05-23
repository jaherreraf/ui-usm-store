import React from 'react'
import Footer from '../components/Footer'

const NewProduct = () => {
  return (
      <div className='h-full  grid  grid-cols-1 items-center justify-items-center bg-gray-200'>
      <h1 className='uppercase text-4xl font-black mt-12 text-red-500 hover:text-red-400'>Nuevo Producto</h1>
          <form className='bg-white shadow-md p-12  rounded m-24 grid grid-cols-1 md:grid-cols-2 md:gap-6' id='checkin' name='checkin'>
            <div className='mb-4 grid items-center'>
                <label htmlFor='image' className='inline-block bg-red-400 capitalize p-2 m-6 text-lg  font-bold rounded-xl text-center hover:bg-red-500 hover:text-white '>Imagen</label>
                <input type='file' id='image' name='image' accept='image/*'
                            className='hidden'
                    />
            </div>
              <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='title'>
                    Título
                  </label>
                  <input type='text' id='title' name='title' placeholder='Título' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>
                      Descripción
                  </label>
                  <input type='email' id='email' name='email' placeholder='Correo Electrónico' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                      Nombre
                  </label>
                  <input type='text' id='name' name='name' placeholder='Nombre' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='lastname'>
                      Apellido
                  </label>
                  <input type='text' id='lastname' name='lastname' placeholder='Apellido' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <div className='mb-6'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                      Contraseña
                  </label>
                  <input type='text' id='password' name='password' placeholder='******************' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <div className='mb-6'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='confirm-password'>
                     Confirmar contraseña
                  </label>
                  <input type='text' id='confirm-password' name='confirm-password'  placeholder='******************' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <div className='flex item-center justify-center md:col-span-2'>
                  <button type='button' className='bg-red-400 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                      Nuevo Administrador
                  </button>
              </div>
          </form>
      <Footer/>
  </div>
  )
}

export default NewProduct;