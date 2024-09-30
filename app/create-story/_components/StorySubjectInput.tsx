import { Textarea } from '@nextui-org/react'
import React from 'react'

function StorySubjectInput({userSelection}:any) {
  return (
    <div>
        <label className='font-bold text-4xl text-primary'>1. Assunto da história </label>
        <Textarea placeholder='Escreva o assunto da história que você deseja gerar' 
        size='lg'
        classNames={{
            input:'resize-y min-h-[230px] text-2xl p-5'
        }}
        className='mt-3 max-w-lg'
        onChange={(e)=>userSelection({
            fieldValue:e.target.value,
            fieldName:'storySubject'
        })}

        />
    </div>
  )
}

export default StorySubjectInput