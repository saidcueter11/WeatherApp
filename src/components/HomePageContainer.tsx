import { ContainerProps } from '../types'

export const HomePageContainer = ({ children }: ContainerProps) => {
  return (
    <div className='grid grid-rows-4 items-center justify-center min-h-screen w-full grid-cols-3'>
      {children}
    </div>
  )
}
