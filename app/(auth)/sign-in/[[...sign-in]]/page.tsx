import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden">
      {/* Imagem do lado esquerdo com ajuste de tamanho */}
      <div className="relative flex justify-center items-center overflow-hidden">
        <Image
          src="/login.png"
          alt="login"
          width={700}
          height={1000}
          className="object-contain max-h-full max-w-full scale-90 transform transition-transform duration-700 ease-in-out hover:scale-100 hover:shadow-lg"
        />
      </div>

      {/* Formulário de login */}
      <div className="flex justify-center items-center h-screen order-first md:order-last bg-gray-50 p-6">
        <SignIn />
      </div>
    </div>
  )
}
