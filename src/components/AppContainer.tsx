import { ContainerProps } from '../types'
import { NavFooter } from './NavFooter'

export const AppContainer = ({ children }: ContainerProps) => {
  return (
    <div className='bg-dark-blue min-h-screen px-6 flex flex-col items-center'>
      {children}
      <NavFooter />
    </div>
  )
}
