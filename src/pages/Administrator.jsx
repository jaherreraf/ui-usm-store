import React from 'react'
import Footer from '../components/Footer'
const Administrator = () => {
  return (
    <div className='h-full  grid  grid-cols-1 items-center justify-items-center bg-gray-200'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg h-96'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 my-2 bg-slate-50'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className='px-6 py-3'>
                            Usuario
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Nombre
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Apellido
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Cédula de identidad
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Correo electrónico
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Administrador
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            <span className='sr-only'>Acción</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        SuperUsuario
                        </th>
                        <td className='px-6 py-4'>
                            SuperNombre
                        </td>
                        <td className='px-6 py-4'>
                            SuperApellido
                        </td>
                        <td className='px-6 py-4'>
                            V-0
                        </td>
                        <td className='px-6 py-4'>
                            SuperCorreo@gmail.com
                        </td>
                        <td className='px-6 py-4'>
                            Administrador
                        </td>
                        <td className='px-6 py-4 text-right'>
                            <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2'>Editar</a>
                            <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>Eliminar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Footer/>
    </div>
  )
}

export default Administrator