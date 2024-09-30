"use client"

import React from 'react'
import StorySubjectInput from './_components/StorySubjectInput'
import StoryType from './_components/StoryType'

export interface fieldData{
  fieldName:String,
  fieldValue:String
}

function CreateStory() {

  const onHandleUserSelection=(data:fieldData)=>{
    console.log(data);

  }

  return (
    <div className='p-10 md:px-20 lg:px-40'>
      <h2 className='font-extrabold text-[70px] text-primary text-center'>Crie Sua História </h2>
      <p className='text-2xl text-primary text-center'>Desperte sua criatividade com a IA: crie histórias de maneira única! Permita que nossa inteligência artificial traga à vida sua imaginação, uma história de cada vez.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-1'>
      {/*Assunto da história */}
      <StorySubjectInput userSelection={onHandleUserSelection}/>
      {/*Tipo de história*/}
      <StoryType/>
      {/*Faixa etária*/}

      {/*Estilo de imagem*/}
      
      </div>
    </div>
  )
}

export default CreateStory