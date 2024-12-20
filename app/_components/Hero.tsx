import { Button } from '@nextui-org/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 m-10 h-full'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h2 className='text-[60px] text-primary font-extrabold py-20'>Crie Histórias <br></br> Mágicas para crianças em Minutos</h2>
                <p className='text-3xl text-primary font-light'>Crie histórias divertidas e personalizadas que dão vida às aventuras do seu filho e despertam o seu passo para a leitura. Leva apenas alguns segundos!</p>
                <Link href={'/create-story'}>
                <Button 
                size='lg' 
                style={{ backgroundColor: '#3B82F6', color: '#ffffff' }} 
                className='mt-10 font-bold text-2xl p-8'>Criar História
                </Button>
                </Link>
            </div>
            <div className='relative flex justify-center md:justify-end'>
                <Image 
                  src={'/hero.png'} 
                  alt='hero' 
                  width={700} 
                  height={400}
                  className='object-contain translate-x-20'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero