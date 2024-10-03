import Image from 'next/image';
import React, { useState } from 'react'

function AgeGroup() {
    const OptionList=[
        {
            label:'0-2 Anos',
            imageUrl:'/02Years.png',
            isFree:true
        },
        {
            label:'3-5 Anos',
            imageUrl:'/35Years.png',
            isFree:true
        },
        {
            label:'5-8 Anos',
            imageUrl:'/58Years.png',
            isFree:true
        }
    ]

    const [selectedOption,setSelectOption]=useState<string>();

  return (
    <div>
        <label className='font-bold text-4xl text-primary'>3. Faixa etária</label>
        <div className='grid grid-cols-3 gap-5 mt-3
        '>
            {OptionList.map((item,index)=>(
            <div 
                key={index} 
                className={`relative grayscale hover:grayscale-0 cursor-pointer p-1 transition-transform duration-200
                ${selectedOption==item.label?'grayscale-0 border-4 border-[#FFAB00] shadow-xl rounded-3xl':' grayscale'}
                `} onClick={()=>setSelectOption(item.label)}>
                    
                <h2 className='absolute bottom-4 text-2xl text-white text-center w-full'>{item.label}</h2>
                <Image 
                    src={item.imageUrl} 
                    alt={item.label}
                    width={300}
                    height={500}
                    className='object-cover h-[260px] rounded-3xl'/>
            </div>
                ))}
        </div>
    </div>
  )
}

export default AgeGroup