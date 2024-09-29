"use client"

import React, { useState } from 'react';
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';

function Header() {

    const MenuList=[
        {
            name:'Inicio',
            path:'/'
        },
        {
            name:'Criar história',
            path:'/criar-história'
        },
        {
            name:'Explore a história',
            path:'/explore'
        },
        {
            name:'Contate-nos',
            path:'/contate-nos'
        }
    ]
    const [isMenuOpen, setIsMenuOpen]=useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <Navbar maxWidth='full' onMenuOpenChange={setIsMenuOpen} className='py-2 px-6'>
        <NavbarContent>
            <NavbarMenuToggle
            aria-label={isMenuOpen?"Fechar menu":"Abrir menu"}
            className='sm:hidden'
            />
            {/*- COMEÇO LOGO* -*/}
            <NavbarBrand className='flex items-center'>
                <Link href="https://rnanwp-meu-site.netlify.app/">
                    <Image 
                        src={'/logo.svg'} 
                        alt='logo' 
                        width={isLogoHovered ? 70 : 60} 
                        height={isLogoHovered ? 50 : 40} 
                        className={`transition-all duration-300 ${isLogoHovered ? 'scale-110' : ''}`} 
                        onMouseEnter={() => setIsLogoHovered(true)} 
                        onMouseLeave={() => setIsLogoHovered(false)}
                    />
                </Link>
                <h2 className='font-bold text-2xl text-primary ml-3'>StoryTales Rn®</h2>
            </NavbarBrand>
            {/*- FIM DA LOGO* -*/}
        </NavbarContent>
                                                
        {/*- BARRA DE NAVEGAÇÃO MAIOR* -*/}
        <NavbarContent justify='center' className='  sm:flex'>
            {MenuList.map((item, index)=>(
                <NavbarItem key={index} className='relative group inline-block'>
                    <Link 
                        href={item.path} 
                        className='text-xl text-primary font-medium px-4 py-2 relative z-10 hover:bg-[#a8a8a8] hover:py-4 hover:px-5 rounded-md transition-all duration-300'>
                    {item.name}
                    </Link>
                </NavbarItem>
            ))}
        </NavbarContent>
        {/*- FIM BARRA DE NAVEGAÇÃO MAIOR* -*/}
                                                
        {/*- Menu para telas menores -*/}
        <NavbarContent className='sm:hidden'>
                <NavbarMenu>
                    {MenuList.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <Link 
                                href={item.path} 
                                className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </NavbarContent>
                    
        {/*- COMEÇO DO BOTÃO -*/}
        <NavbarContent justify='end'>
            <Button color='primary' className='tet-2xl p-6'>Começar</Button>
        </NavbarContent>
        {/*- FIM DO BOTÃO -*/}
    </Navbar>
  );
}

export default Header;