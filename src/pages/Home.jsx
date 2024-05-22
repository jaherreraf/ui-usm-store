import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
    <section>
        <h2></h2>
      </section>
      <main className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center my-12 mx-2'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </main>
      <aside className='bg-black w-screen min-h-96 grid grid-cols-1 md:grid-cols-2 justify-between content-between relative' id='about-us'>
        <div className="text-white text-justify p-2 grid grid-cols-1 justify-center content-center md:ml-24">
          <h2 className="font-black text-4xl mb-4 hover:border-4">Su portal integral para las mejores soluciones tecnológicas</h2>
          <p className='font-bold text-white text-justify text-xl'>
              En Tienda Virtual USM, nos apasiona acercar la tecnología de vanguardia a nuestros clientes. Somos una empresa especializada en la venta online de productos electrónicos, informática y accesorios, comprometidos en ofrecer una experiencia de compra segura, confiable y satisfactoria.
          </p>
            <span className='uppercase text-red-400 hover:text-red-500 text-2xl'><strong>Métodos de pago seguros: Prueba nuestro método de pagó móvil</strong></span>
        </div>
        <img src='/public/aboutUs.png'
        alt="Tienda Virtual USM" className='w-96 h-96 md:absolute md:right-0' />
      </aside>
      <Footer/>
      </>
  )
}

export default Home