import React from 'react'
import Footer from '../components/Footer'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/16/solid'
const Product = () => {
  return (
    <div className='h-full  grid  grid-cols-1 items-center justify-items-center bg-gray-200'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg h-96'>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 my-2 bg-slate-50'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className='px-6 py-3'>
                            Imagen
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            título
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Descripcion
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Precio
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Cantidad
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            <span className='sr-only'>Acción</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                          <img src="data:image/png;base64,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"
                           alt="Imagen" className='rounded-lg w-32 h-32' />
                        </th>
                        <td className='px-6 py-4'>
                            Un producto
                        </td>
                        <td className='px-6 py-4'>
                           Una descripcion de un producto
                        </td>
                        <td className='px-6 py-4'>
                            120$
                        </td>
                        <td className='px-6 py-4'>
                            230
                        </td>
                        <td className='px-6 py-4 text-right'>
                        <button  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                          Editar
                        </button>
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

export default Product