import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './navbar/Navbar';
import Layout from './layout/Layout';

const contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        // Reemplaza estos valores con tus credenciales de EmailJS
        emailjs
            .send(
                'service_xkpnqto',  // service_id: El identificador del servicio de correo (Ejemplo: 'gmail')
                'template_c7gsw62',  // template_id: El identificador de tu plantilla de correo
                templateParams,
                'WwdGXd_M8pdjs9vpC'  // public_key: Reemplaza con tu Public Key
            )
            .then(
                (response) => {
                    console.log('Success:', response);
                    alert('Message sent successfully!');
                    // Limpiar las cajas de texto
                    setName('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    console.log('Error:', error);
                    alert('Failed to send message');
                }
            );
    };

    return (
        <Layout>
        <div className="text-white bg-white lg:p-44 p-4" id="Contact">
            <h2 className="text-4xl text-[#1484da] font-bold mb-10 text-center">Contact</h2>
            <form onSubmit={handleSubmit} className="lg:w-[600px] md:w-[500px] mx-auto">
                <div className="relative mt-5">
                    <input
                        className="block px-2 pb-2.5 pt-4 w-full text-sm bg-transparent w-90 rounded-lg border-2 border-[#1484da]"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label className="absolute -translate-y-5 z-10 top-2 origin-[0] bg-[#1484da] mx-4 px-2 text-white text-[16px]">
                        Your Name
                    </label>
                </div>
                <div className="relative mt-5">
                    <input
                        className="block px-2 pb-2.5 pt-4 w-full text-sm bg-transparent w-90 rounded-lg border-2 border-[#1484da]"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label className="absolute -translate-y-5 z-10 top-2 origin-[0] bg-[#1484da] mx-4 px-2 text-white text-[16px]">
                        Your Email
                    </label>
                </div>
                <div className="relative mt-5">
                    <textarea
                        cols="30"
                        rows="10"
                        className="block px-2 pb-2.5 pt-4 w-full text-sm bg-transparent w-90 rounded-lg border-2 border-[#1484da]"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <label className="absolute -translate-y-5 z-10 top-2 origin-[0] bg-[#1484da] mx-4 px-2 text-white text-[16px]">
                        Your Message
                    </label>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-[20px] py-[6px] text-xl rounded mt-6 bg-[#1484da] mb-10 hover:border transition-all duration-700 ease-in-out hover:bg-transparent border-[#1484da]"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    </Layout>
    );
};

export default contact;