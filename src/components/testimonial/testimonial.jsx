import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonios</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>Lo que piensan nuestros <span className=' text-blue-500'>Usuarios</span></h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://ecommerce-sk.vercel.app/img/kamal.png" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed"> <span className='block'>Mario J.
                                ⭐⭐⭐⭐⭐</span>  "Me encantó la calidad y la atención al cliente. Siempre estuvieron atentos a resolver mis dudas. ¡Mil gracias!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed"> <span className='block'>María G.
                                ⭐⭐⭐⭐⭐</span> "¡Excelente servicio! El producto llegó en perfecto estado y antes de lo esperado. Sin duda volveré a comprar aquí."</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 ink-500 mt-6 mb-4" />
                             
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed"><span className='block'> Javier M. ⭐⭐⭐</span> "El producto está bien, pero creo que el empaque podría mejorar. A pesar de eso, la experiencia de compra fue buena."</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial  