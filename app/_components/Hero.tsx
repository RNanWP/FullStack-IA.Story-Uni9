import { Button } from '@nextui-org/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 mt-10 h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h2 className='text-[70px] text-primary font-extrabold py-10'>Crie histórias mágicas para crianças em minutos</h2>
                <p className='text-2xl text-primary font-light'>Crie histórias divertidas e personalizadas que dão vida às aventuras do seu filho e despertam o seu passo para a leitura. Leva apenas alguns segundos</p>
                <Link href={'/create-story'}>
                <Button size='lg' color='primary' className='mt-5 font-bold tet-2xl p-8'>Criar História</Button>
                </Link>
            </div>
            <div>
                <Image src={'/hero.png'} alt='hero' width={700} height={400}/>
            </div>
        </div>
    </div>
  )
}

export default Hero