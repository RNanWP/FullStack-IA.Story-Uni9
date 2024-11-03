"use client"

import React, { useState } from 'react'
import StorySubjectInput from './_components/StorySubjectInput'
import StoryType from './_components/StoryType'
import AgeGroup from './_components/AgeGroup'
import ImageStyle from './_components/ImageStyle'
import { Button } from '@nextui-org/button'
import { chatSession } from '@/config/GeminiAi'

const CREATE_STORY_PROMPT=process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT
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
  const [loading, setLoading]=useState(false);

  /**
   * usado para adicionar dados ao formulário
   * @param data 
   */


  const onHandleUserSelection=(data:fieldData)=>{
    setFormData((prev:any)=>({
      ...prev,
      [String(data.fieldName)]:data.fieldValue
    }));
    console.log(formData)
  }

  const GenerateStory=async()=>{
    setLoading(true)
    const FINAL_PROMPT=CREATE_STORY_PROMPT
    ?.replace('{ageGroup}', formData?.ageGroup??'')
    .replace('{storyType}', formData?.storyType??'')
    .replace('{storySubject}', formData?.storySubject??'')
    .replace('{imageStyle}', formData?.imageStyle??'')
    // IA Gerador de Histórias
    try{
     const result=await chatSession.sendMessage(FINAL_PROMPT);
     console.log(result?.response.text());
     setLoading(false);
    }catch(e){
      console.log(e)
      setLoading(false);
    }
    // Salvo no Banco de Dados

  };

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
        <Button style={{ backgroundColor: '#3B82F6', color: '#ffffff' }}
        disabled={loading}
        className='p-10 text-2xl'
        onClick={GenerateStory}>
          Gerar História
          </Button>
      </div>
    </div>
  )
}

export default CreateStory