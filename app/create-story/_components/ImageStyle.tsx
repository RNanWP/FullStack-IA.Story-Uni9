import Image from 'next/image';
import React, { useState } from 'react'
import { OptionField } from './StoryType';

function ImageStyle({userSelection}:any) {
    const OptionList=[
        {
            label:'Cartoon 3D',
            imageUrl:'/3D.png',
            isFree:true
        },
        {
            label:'Papel',
            imageUrl:'/paperCut.png',
            isFree:true
        },
        {
            label:'Aquarela',
            imageUrl:'/waterColor.png',
            isFree:true
        },
        {
            label:'Pixel',
            imageUrl:'/pixel.png',
            isFree:true
        }
    ]

    const [selectedOption,setSelectOption]=useState<string>();

    const onUserSelect=(item:OptionField)=>{
        setSelectOption(item.label);
        userSelection({
            fieldValue:item?.label,
            fieldName:'imageStyle'
        })
    }
  

  return (
    <div>
        <label className='font-bold text-4xl text-primary'>4. Estilo de imagem</label>
        <div className='grid grid-cols-3 gap-5 mt-3
        '>
            {OptionList.map((item,index)=>(
            <div 
                key={index} 
                className={`relative grayscale hover:grayscale-0 cursor-pointer p-1 transition-transform duration-200
                ${selectedOption==item.label?'grayscale-0 border-4 border-[#FFAB00] shadow-xl rounded-3xl':' grayscale'}
                `} onClick={()=>onUserSelect(item)}>
                    
                <h2 className='absolute bottom-4 text-2xl text-white text-center w-full'>{item.label}</h2>
                <Image 
                    src={item.imageUrl} 
                    alt={item.label}
                    width={300}
                    height={500}
                    className='object-cover h-[120px] rounded-3xl'/>
            </div>
                ))}
        </div>
    </div>
  )
}

export default ImageStyle