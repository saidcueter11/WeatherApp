import { ContainerProps } from '../types'

export const SearchPageContainer = ({ children }: ContainerProps) => {
  return (
    <div className='grid grid-cols-3 gap-6 items-center h-screen pt-12 pb-16'>
      {children}
    </div>
  )
}
