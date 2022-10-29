import React from 'react'
import { NavFooter } from './NavFooter'

interface AppContainerProps {
  children: React.ReactNode
  isDay?: number
}

export const AppContainer = ({ children, isDay }: AppContainerProps) => {
  const dayBg = 'bg-gradient-to-bl from-blue-300 via-blue-400 to-blue-600'
  const nightBg = 'bg-gradient-to-tr from-blue-800 via-violet-900 to-stone-700'

  return (
    <div className={`${!isDay ? nightBg : dayBg} min-h-screen px-6 flex flex-col items-center`}>
      {children}
      <NavFooter />
    </div>
  )
}
