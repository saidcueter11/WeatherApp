import React from 'react'
import { NavFooter } from './NavFooter'

interface AppContainerProps {
  children: React.ReactNode
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div className='bg-dark-blue min-h-screen flex flex-col items-center pt-12 gap-7 px-6'>
      {children}
      <NavFooter />
    </div>
  )
}
