import { ContainerProps } from '../types'

export const SearchPageContainer = ({ children }: ContainerProps) => {
  return (
    <div className='flex flex-col items-center gap-4 pt-12'>
      {children}
    </div>
  )
}
