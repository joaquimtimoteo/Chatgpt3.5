/*@__PURE__*/
import React, { useState } from 'react';
import Head from 'next/head';
import { FaFacebook, FaLinkedin, FaGoogle, FaEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const HomePage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py bg-gray-100'>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the Home Page" />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
          <div className='w-3/5 p-5'>
            <div className='text-left font-bold'>
              <span className='text-blue-500'>Chat</span>genius
            </div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-blue-500 mb-2'>Entrar na Conta</h2>
              <div className='border-2 w-10 border-blue-500 inline-block mb-2'></div>
              <div className='flex justify-center my-2'>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaFacebook className='text-sm' />
                </a>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaLinkedin className='text-sm' />
                </a>
                <a href="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaGoogle className='text-sm' />
                </a>
              </div>

              <p className='text-gray-400 my-3'>Ou entre com o seu Email</p>

              <div className='flex flex-col items-center '>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaEnvelope className='text-gray-400' />
                  <input type="email" name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center'>
                  <MdLockOutline className='text-gray-400' />
                  <input type="password" name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className='flex justify-between w-64 mb-5'>
                  <label className='flex items-center text-xs'>
                    <input type="checkbox" name='remember' className='mr-1' />Remember password
                  </label>
                  <a href="#" className='text-xs'>Forget password</a>
                </div>

                <a href="/" className='border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white'>
                  Entrar
                </a>
              </div>
              <p className='mt-5'>created by <span className='text-gr'>Joaquim Timoteo 👨🏽‍💻📲</span></p>
            </div>
          </div>

          <div className='w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-3xl font-bold mb-2'>hello, friend!</h2>
            <div className='border-2 w-10 border-white inline-block mb-2'></div>
            <p className='mb-2'> Conheça o ChatGenius: Registre-se agora e explore a inteligência 
              artificial para respostas rápidas e eficientes!</p>
            <a href="/chatgenius/app/home/page.tsx" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500'>
              Registrar
            </a>
          </div>

        </div>
      </main>
    </div>
  );
};

export default HomePage;
