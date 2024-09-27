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

  return (
    <Navbar maxWidth='full' onMenuOpenChange={setIsMenuOpen} className='py-2 px-6'>
        <NavbarContent>
            <NavbarMenuToggle
            aria-label={isMenuOpen?"Fechar menu":"Abrir menu"}
            className='sm:hidden'
            />
            <NavbarBrand className='flex items-center'>
                <Image src={'/logo.svg'} alt='logo' width={70} height={50}/>
                <h2 className='font-bold text-2xl text-primary ml-3'>StoryTales Rn®</h2>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify='center' className='hidden sm:flex'>
            {MenuList.map((item, index)=>(
                <NavbarItem className='text-xl tex-primary font-medium hover:underline mx-2'>
                    <Link href={item.path}>
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