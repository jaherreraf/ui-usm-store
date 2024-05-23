import {useState} from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    const [user, setUser] = useState(1)
    const [edit, setEdit] = useState(false)
    const [open, setOpen] = useState(false)
    return (
        <header className='grid grid-cols-1 md:grid-cols-2 md:content-center p-8 bg-red-400 hover:bg-red-500'>
            <h1 className=' text-2xl font-black md:text-5xl'><Link to="/">Tienda Virtual USM</Link></h1>
            <nav className='flex justify-center content-center gap-6'>
                <span className={user==0?'block text-2xl font-bold text-white hover:text-underline-2xl':'hidden'}><Link to="/login">Iniciar Sección</Link></span>
                <span className={user==0?'block text-2xl font-bold text-white':'hidden'}><Link to="/checkin">Registrarse</Link></span>
            </nav>
            <div className={`${user==1?'z-50 absolute right-0':'right-[-1000px] '} bg-red-400 hover:bg-red-500 transition duration-1000 ease-in-out text-white`}>
                {user==1 && (<button className={`${open?'absolute':'block'} rounded-full`} onClick={()=>{setOpen(!open)}}>
                    {open? <i className='font-bold text-2xl ml-4'>&times;</i> : <span className='font-bold text-2xl mr-4'> Ver perfil</span>}
                </button>)}
                <div className={open?'flex  justify-between  content-center border-b-4 p-11':'hidden'}>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEWbmpn///+gn56Yl5b7+/uVlJP5+fmcm5qvrq329vbw8PCmpaShoJ/NzMzs7Ozv7+/Z2dni4uLIx8fAv7+4t7a+vb3m5ubW1tarqqrY19fLysqSkJCzsbG/vr1BQr8/AAAI4ElEQVR4nO2d2barIAyG2YLzPFRtT/v+r3mko62zSbCy+t+dc9Htt4AkhBDYn+5iW38AuX6E+9ePcP/6Ee5fP8L960e4f/0I968fIZqEsNyXLEuo+sMqCIUbl0mYF45v2JxzZvi1c8iqNPIsBX+dnNCK0vBQGyaXbE81/zCZX2TH0qX+AGLCqLo4xhtbW83/+0WY0kJSElrJpTaG6J6UEjIm/Ao6QlGdAzaBd4c0/Lwk+w4ywtCfA/dSERF9CA2hOBrmMkDG/x1o5ioFoUjPs2bnJ6MRUtgcAsIoM9YASsZzgh8I4BMmzko+iRhkHvb3YBNaWbAeUMrBtqrIhPEZhCeH0T/ifhIuYVnDBvAq44T6TaiEyVoT8y5+wLSpmIRHHEDGzALR3iASVliAEhHP++MRVjYWn0Q8o01UNMIEE1COItbuGIswBbrBjniO9GVIhJGPDNgIyWngELqASG1QBo7rRyEUOQFgE92gBHAohJVBANggFhgGFYOwJFiEN8QQ4esQCMWBCLBZigjzFIEwIQNk3PkGQkGzCO+I1RcQktjRFyI4rQEm9JYm1RYSgkMbMCGdmbkpgOZRoYQl5Sq8CjqIUMKcGpDXwEEEEkYYiZkJAd0+kDAk52P8DEtpwAi9Ven7hTKSDQkTcjvDpMMAbfdBhCJTMISMwWwNiDCm2Ph2xUHTFESYqpik0GkKIRShkiFsXCJkJwwhdAs1hIxDtokQQm/hUf1qmZA9FIQwpd1WvMSLjQhDVYTMB+wSAYTiomgZNoMICNwAhCRp4H6Z6SaEUaAKEGRqAISEObZPQXIZAEJF/v5KCDCmAELaJNs7Yb0JIXUOqi1/E0JVMZuUsQmhiv39U5sQqnOHzUL8EZIQ6j9LVRJuY2nUBd5beQv9Pb7KqO28CWGlkPCyCSH9wdqLEHA6A9kBKzh3ussE5IQhWQx1gakJKDcFZaKUEW6UiVKZTdyI0FNlakDVX6Csvqq4jQNSbbCTmZMiQh9yzg07XVMDCLt/ASJUUYnBgAczuzjl9rc75VZUqQC7JAQjjFVYUxtWgQmsGMroAbkDK/sCEpYKjoEz2CdCK/cKckDonQQoIXnBCeiEG4OQPOMWQMv1wYQlLSE/QD8QXslOuw+2wbdJ4YQx7sXDd5lAQ4pCSFl0wn34zScEQsKaDNDGEI+QzmOYOUKbDJTbeUQpKV5j3OhGIXRpjvQDhDmKdUs2cggAbYzbh2g3nVOC+ihYAftTWLfVj9jzFOeK7B9ixwFkrwirfG4LjVBkmIg8QOv9gdcXAxMRERCzt4nAS2k439m95U+ESMENZnsa5C5KFcrN/Atqvy/kTlipA12M3D7h9qXD7mYWFzBE7mM3pUPvSOeGkGZKJn6DSIqugqtnKjdC/L67JJ0hq1V5Ym6j2tCHaLp7etnM5qzt8XNQNksdUXVoLXN/CWPDVxH1v6brsluenJmMnAdFRTFBryLslCyiqjDMSUhuOhllO2jabtdu1AzkCCTnpp8nHml/duqO5cJqRjIwzU7Ta9mznMvRo24/r6avflRlZ/8tNx44hzBV0XQehTBOZpgJKy6TKsyyPM9OYZVGM1ael3xFNlHElWMXcxgXyksK26mirXsMiTKsG0vCmROWmHPOKkPpa7hZhyWQEUZYZvXdhHBe5yiTSipO8tbvZrAzUgjhe9zCm7gkT+COzU1yp7094QzWdX89oZd3Yk/OAj9LIbNKpJnf97P5+nW+ltA69edkmo8LDitH0k0OARuI9IzT2mW+jtBKgpE9IDfNOku9BU/JCMtLs9ocC/HMIFnHuIZQlMXkuxzctJ28SmNvImYRrhenVe7Y3ain85PFKrO6gtCb2VhehmW+c8mqJC0jz3VbYyrfDfKiMk2q7OL4fJLu/oOruu4vJhTpeUmSQj6gYwe+UxSHazQjdWoCm0NROH5g88E3aHplnpfbsaWEjQVd9XZFn9b8znKrupAwpTgKXaalyY5lhCfK2pm5spc1iV5C6IIT2jgynSX+dj6hSPH65gPFjQUGZzahGy7NDxKKs/mP7swl9PJvWIIv2bNt6kzCEvy6CrrOMzcc8whTqo7dAHF/ntuYRZh80RJ8ibNZN0vnEKrr6bVQ5pyqqWlCcdoaZESnaa8xSWh9RRwzJHt6YzxFaGXfDNggZlOIE4TiywEl4sREnSD8ekCJCCFUcHELQeOIo4Rf6ybeNe40xggVtvaAafSNiBFCJRdEcTTW8nuY8Btj0SGNxaiDhJHKVl5gjVw0HSJU1gUZScNl4UOEau6hI4oP+YwBwmQffqKtoS49/YTRv62/d4X+9S/FXkJrR2b0Je73BuF9hDQPxdGL91516yMkeiiOXkZfbNNDqKhjCYF6X93pEro7naNSPO96xS5hsvVngtR1GR1CihdF1Yl3e9l8Eop8f76+re7V4U/CdM8jKNW5/v1BKHY9R6X4Z3++D8Kd5C3G9JnTeCdU1kWPUoY3QqiyNTCZPtq5vhFS3MjeQO/3+N8Id7avH9J7W6I2YaLHEDaDmPQTWiqfcyAVP1i9hJqsQqn2SnwRWjveU3yq/RbdizDSwRc+ZERdQkV9LBWJv04Vn4SxTkPYDGLcIdQgIm3rFZ0+CC1VL/2p0jO1+CDcYZJ7XM8U+INQ6ZMqKvR8MOJO6OkG+HpR8E6o8DUOVXo0cr8T1lt/D4HqNqGih33VykhbhPuom1mq7EWo7AkApeJn90mY6ubub7oVaFwJw++vXlujW1tCSbi3uou5utVnSMJSR18hVZd3wqOOvkLKON4I9dr7tnXdBzeEnqbLUC5E70oY6ekrpOR5KVP2WswmSiWh0HBf8RAPRUOoqzeUkh6R/Xm7LZ+ZFq+9hjDSM2S7yY4aQu1yUG2ZSUOosaG5pjKY0ifSlYsf/pjYVcX6UnFHMKFvRCPlC+bqPITNILqs1NmUNsa0ZFo7C+ku2G6ub60Tr5i229+beMa0KPQaFr8wjXcWUrxgWqa7X+Jntn1bJFo5TNdc6UM10ztoa8I2pk8xW78CpvMOX8pmvqG3/P/69pS2JKrBFAAAAABJRU5ErkJggg==' alt="usuario"
                        className='max-w-40 max-h-40 rounded-full' />
                    <div className='flex flex-col gap-12 ml-4'>
                        <h2 className='text-2xl font-bold text-center uppercase'>Bienvenido Usuario</h2>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Cerrar Sección</button>
                    </div>
                </div>
                <div className={open?'flex flex-col items-center justify-content-center gap-2 p-4 border-b-4':'hidden'}>
                    <span className='text-lg font-semibold hover:font-bold hover:border-b-2 hover:text-xl transition duration-300 ease-in-out'><Link to='/new-product'>Nuevo Producto</Link></span>
                    <span className='text-lg font-semibold hover:font-bold hover:border-b-2 hover:text-xl transition duration-300 ease-in-out'><Link to='/product'>Ver Producto <small>(editar o eliminar productos)</small></Link></span>
                    <span className='text-lg font-semibold hover:font-bold hover:border-b-2 hover:text-xl transition duration-300 ease-in-out'><Link to='/new-administrator'>Nuevo Usuario</Link></span>
                    <span className='text-lg font-semibold hover:font-bold hover:border-b-2 hover:text-xl transition duration-300 ease-in-out'><Link to='/administrator'>Ver Usuario <small>(editar o eliminar usuario)</small></Link></span>
                </div>
                <div className={open?'flex flex-col items-center justify-content-center gap-2 p-4 border-b-4':'hidden'}>
                    <h2 className='text-2xl font-bold'>Pago Móvil. <small>(Datos de nuestra cuenta)</small></h2>
                    <span className='text-lg font-semibold hover:font-bold hover:text-xl transition duration-300 ease-in-out'><a href="">V-28303325</a></span>
                    <span className='text-lg font-semibold hover:font-bold hover:text-xl transition duration-300 ease-in-out'><a href="">0414-1628880</a></span>
                    <span className='text-lg font-semibold hover:font-bold hover:text-xl transition duration-300 ease-in-out'><a href="">Banco de Venezuela</a></span>                          
                </div>
                <div className={open?'flex flex-col items-center justify-content-center gap-4 p-4 border-b-4':'hidden'}>
                    <h2 className='text-2xl font-bold'>Productos en el Carro</h2>   
                    {/* Producto 1 */}
                    <div className='flex flex-col items-center justify-content-center border-2 min-h-36 min-w-42 rounded-xl p-2'>
                        <h3 className='text-lg font-semibold hover:font-bold hover:text-xl transition duration-300 ease-in-out'>Título del producto</h3>
                        <div className='flex justify-between content-center'>
                            <img src="data:image/png;base64,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" 
                            alt='Titulo' className='max-w-36 max-h-36'/>
                            <span className='text-xm font-medium hover:font-semibold hover:text-lg transition duration-300 ease-in-out'>Cantidad de producto: 2</span>
                        </div>
                        <div className='inline-flex m-2'>
                            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
                                onClick={()=>{setEdit(true)}}>
                                Editar Cantidad
                            </button>
                            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'>
                                Eliminar del Carro
                            </button>
                        </div>
                        <form className={edit?'w-full max-w-sm':'hidden'}>
                            <h4 className='font-semibold text-lg'>Inserte la cantidad</h4>
                            <div className='flex items-center border-b border-grey-700 py-2'>
                                <input type='number'  name='reference-number' placeholder='Cantidad de producto' aria-label='Cantidad de producto' className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'/>
                                <button className='flex-shrink-0 bg-blue-400 hover:bg-blue-500 text-sm  text-white py-1 px-2 rounded' type='button'
                                    onClick={()=>{setEdit(false)}}>
                                        Aceptar
                                </button>
                                <button className='flex-shrink-0 border-transparent border-4 text-white hover:text-teal-800 text-sm py-1 px-2 rounded' type='button'
                                    onClick={()=>{setEdit(false)}}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                        <form className='w-full max-w-sm'>
                            <h4 className='font-semibold text-lg'>Número de referencia de pago móvil</h4>
                            <div className='flex items-center border-b border-grey-700 py-2'>
                                <input type='number'  name='reference-number' placeholder='Número de Referencia' aria-label='Número de referencia de pago móvil' className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'/>
                                <button className='flex-shrink-0 bg-blue-400 hover:bg-blue-500 text-sm  text-white py-1 px-2 rounded' type='button'>
                                    Envíar
                                </button>
                                <button className='flex-shrink-0 border-transparent border-4 text-white hover:text-teal-800 text-sm py-1 px-2 rounded' type='button'>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;