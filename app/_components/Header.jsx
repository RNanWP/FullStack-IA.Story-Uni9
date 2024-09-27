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
    <Navbar maxWidth='full' onMenuOpenChange={setIsMenuOpen} className='py-3 px-6'>
        <NavbarContent>
            <NavbarMenuToggle
            aria-label={isMenuOpen?"Fechar menu":"Abrir menu"}
            className='sm:hidden'
            />
            <NavbarBrand className='flex items-center'>
            <Link href="https://rnanwp-meu-site.netlify.app/">
            <div className={`transition-transform duration-300 ${isLogoHovered ? 'scale-110' : 'scale-100'}`}>
                <Image 
                src={'/logo.svg'} 
                alt='logo' 
                width={70} 
                height={50} 
                className="cursor-pointer transition-transform duration-300 ${isLogoHovered ? 'scale-110' : 'scale-100'}`}"
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
                />
                    </div>
                </Link>
                <h2 className='font-bold text-2xl text-primary ml-3'>StoryTales Rn®</h2>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify='center' className='hidden sm:flex '>
            {MenuList.map((item, index)=>(
                <NavbarItem className='relative group inline-block'>
                    <Link href={item.path} className='text-xl text-primary font-medium px-4 py-2 relative z-10 hover:bg-blue-300 hover:py-4 hover:px-5 rounded-md transition-all duration-300'>
                        {item.name}
                    </Link>
                </NavbarItem>
            ))
            }
        </NavbarContent>
        <NavbarContent justify='end'>
            <Button color='primary'>Começar</Button>
        </NavbarContent>
        <NavbarMenu>
            {MenuList.map((item, index)=>(
                <NavbarMenuItem>
                    <Link href={item.path}>
                    {item.name}
                    </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    </Navbar>
  )
}

export default Header;