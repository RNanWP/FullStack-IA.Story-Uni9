import { ClerkProvider } from '@clerk/nextjs'
import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import Header from './_components/Header'

function Provider({children}:{children: React.ReactNode}) {
  return (
    <ClerkProvider publishableKey={process.env.pk_test_dmFzdC1hbnRlYXRlci0zOS5jbGVyay5hY2NvdW50cy5kZXYk}>
    <NextUIProvider>
      {/*Header*/}
      <Header/>
      
      {children}
    </NextUIProvider>
    </ClerkProvider>
  )
}

export default Provider