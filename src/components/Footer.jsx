import React from 'react'

const Footer = () => {
  return (
    <footer className='p-2 bg-red-400 hover:bg-red-500 w-full flex flex-col items-center justify-content-center'>
        <div className='flex flex-col items-center justify-content-center md:flex-row md:justify-between md:content-center md:gap-6'>
            <div className='flex flex-col items-center justify-content-center mb-4 md:mb-0'>
                <img src="/public/logo_transparent.png" alt="Tienda Virtual USM" 
                    className='w-60 h-60 hover:max-w-64 hover:max-h-64'
                />
                <h4 className='font-bold text-lg'>Un universo de producto a un clic de distancia!</h4>
            </div>
            <dl className='flex flex-col'>
                <dt className='uppercase font-semibold text-lg mb-5'>
                    <span className='hover:border-b-2 border-black'>Redes Sociales</span>
                </dt>
                <dd className='flex justify-between content-center gap-10 mb-4 md:mb-5'>
                    <img src="/public/instagram.svg" alt="Instagram" 
                        className='w-12 h-12 hover:w-14 hover:h-14'
                    />
                    <img src="/public/facebook.svg" alt="Facebook" 
                        className='w-12 h-12 hover:w-14 hover:h-14'
                    />
                     <img src="/public/whatsapp.svg" alt="Whatsapp" 
                        className='w-12 h-12 hover:w-14 hover:h-14'
                    />
                    <img src="/public/x-twitter.svg" alt="X" 
                        className='w-12 h-12 hover:w-14 hover:h-14'
                    />
                    <img src="/public/linkedin.svg" alt="Linkedin" 
                        className='w-12 h-12 hover:w-14 hover:h-14'
                    />
                </dd>
                <dt className='uppercase font-semibold text-lg mb-4 md:mb-5'>
                    <span className='hover:border-b-2 border-black'>Información</span>
                </dt>
                <dd className='flex flex-col justify-content-center ml-10'>
                    <span className='font-semibold text-lg'>&#128222; 0414-1628880</span>
                    <span className='font-semibold text-lg'>&#9993; jaherreraf4@gmail.com</span>
                    <span className='font-semibold text-lg'>&#128681; Universidad Santa María, Campus La Florencia,Distrito Capital , Venezuela</span>
                </dd>
            </dl>
        </div>
        <div className='border-t-2 w-screen text-center'>
            <strong><small>2024 | @Copyright | Tienda virtual USM . Todos los derechos reservados</small></strong>
        </div>
    </footer>
  )
}

export default Footer