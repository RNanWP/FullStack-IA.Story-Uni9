"use client"

import React, { useState } from 'react'
import StorySubjectInput from './_components/StorySubjectInput'
import StoryType from './_components/StoryType'
import AgeGroup from './_components/AgeGroup'
import ImageStyle from './_components/ImageStyle'
import { Button } from '@nextui-org/button'

export interface fieldData{
  fieldName:String,
  fieldValue:String
}

export interface formDataType{
  storySubject:string,
  storyType:string,
  imageStyle:string,
  ageGroup:string
}
function CreateStory() {

  const [formData,setFormData]=useState<formDataType>();

  /**
   * usado para adicionar dados ao formulário
   * @param data 
   */


  const onHandleUserSelection=(data:fieldData)=>{
    setFormData((prev:any)=>({
      ...prev,
      [data.fieldName]:data.fieldValue
    }));
    console.log(formData)
  }

  return (
    <div className='p-10 md:px-20 lg:px-40'>
      <h2 className='font-extrabold text-[70px] text-primary text-center'>Crie Sua História </h2>
      <p className='text-2xl text-primary text-center'>Desperte sua criatividade com a IA: crie histórias de maneira única! Permita que nossa inteligência artificial traga à vida sua imaginação, uma história de cada vez.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-14'>
      {/*Assunto da história */}
      <StorySubjectInput userSelection={onHandleUserSelection}/>
      {/*Tipo de história*/}
      <StoryType userSelection={onHandleUserSelection}/>
      {/*Faixa etária*/}
      <AgeGroup userSelection={onHandleUserSelection}/>
      {/*Estilo de imagem*/}
      <ImageStyle userSelection={onHandleUserSelection}/>
      </div>

      <div className='flex justify-end my-10'>
        <Button color='primary' className='p-10 text-2xl'>Gerar História</Button>
      </div>
    </div>
  )
}

export default CreateStory