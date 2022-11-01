import { ContainerProps } from '../types'

export const HomePageContainer = ({ children }: ContainerProps) => {
  return (
    <main className='grid grid-rows-4 items-center justify-center h-screen w-full grid-cols-3'>
      {children}
    </main>
  )
}
