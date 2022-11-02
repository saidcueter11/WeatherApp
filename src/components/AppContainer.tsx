import React from 'react'
import { NavFooter } from './NavFooter'

interface AppContainerProps {
  children: React.ReactNode
  isDay?: number
}

export const AppContainer = ({ children, isDay }: AppContainerProps) => {
  console.log(isDay)
  const dayBg = 'bg-gradient-to-b from-blue-300 via-blue-400 to-blue-600'
  const nightBg = 'bg-gradient-to-b from-sky-700 via-sky-900 to-neutral-900'

  return (
    <main className={`${isDay ? dayBg : nightBg} min-h-screen px-6 flex flex-col items-center`}>
      {children}
      <NavFooter />
    </main>
  )
}
