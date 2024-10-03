
"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function StoryType() {
    const OptionList=[
        {
            label:'Livro de histórias',
            imageUrl:'/story.png',
            isFree:true
        },
        {
            label:'Contos para dormir',
            imageUrl:'/bedstory.png',
            isFree:true
        },
        {
            label:'Educativo',
            imageUrl:'/educational.png',
            isFree:true
        }
    ]

    const [selectedOption,setSelectOption]=useState<string>();

  return (
    <div>
        <label className='font-bold text-4xl text-primary'>2. Tipo de história</label>
        <div className='grid grid-cols-3 gap-5 mt-3
        '>
            {OptionList.map((item,index)=>(
            <div key={index} className={`relative grayscale hover:grayscale-0 cursor-pointer p-1
            ${selectedOption==item.label?'grayscale-0':'grayscale'}
            `} onClick={()=>setSelectOption(item.label)}>
                <h2 className='absolute bottom-4 text-2xl text-white text-center w-full'>{item.label}</h2>
                <Image src={item.imageUrl} alt={item.label}
                width={300}
                height={500}
                className='object-cover h-[260px] rounded-3xl'/>
            </div>
                ))}
        </div>
    </div>
  )
}

export default StoryType