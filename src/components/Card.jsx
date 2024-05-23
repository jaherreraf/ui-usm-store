import React from 'react'
import { useState } from 'react'
const Card = ()=>{  

    const [open, setOpen] = useState(false)
    return (
    <div className="flex flex-col w-96 max-h-full bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description"/>
        <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Card title
            </h3>
            <p className="mt-1 max-h-28 text-justify text-base font-medium text-gray-500 overflow-y-auto overflow-y-red-400 shadow-sm">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit, sunt sit saepe eaque, impedit ducimus, nihil esse nam quia ut vitae. Nesciunt beatae laboriosam aliquam fuga temporibus pariatur dolores.
            </p>
            <div className='mt-6 flex justify-around content-center'>
                <span className='font-bold text-lg'>Precio: <strong className='text-red-500 hover:text-red-400 hover:text-sm'>100</strong>$</span>
                <span className='font-bold text-lg'>Disponibilidad: <strong className='text-red-500 hover:text-red-400 hover:text-sm'>100</strong></span>
            </div>
            <div className='mt-4 flex flex-col items-center justify-content-center'>
            <button className='bg-red-400 text-white hover:bg-red-500  font-bold py-2 px-4 rounded'
            onClick={()=>{setOpen(true)}}>
                Agregar al carro de compra
            </button>
            <form className={`${open?'block':'hidden'} w-full max-w-xs `}>
                <div className='flex items-center border-b border-red-500 py-2'>
                    <input  type='number' placeholder='Ingrese Cantidad' aria-label='Ingrese Cantidad' name='amount'
                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                        min='1'
                    />
                    <button className='flex-shrink-0 bg-red-400 hover:bg-red-500 text-sm  text-white py-1 px-2 rounded' type="button"
                        onClick={()=>{setOpen(false)}}
                    >
                        Agregar
                    </button>
                    <button className='flex-shrink-0 border-transparent border-4 text-red-500 hover:text-teal-800 text-sm py-1 px-2 rounded' type="button"
                        onClick={()=>{setOpen(false)}}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
            </div>
        </div>

    </div>
    )
}

export default Card