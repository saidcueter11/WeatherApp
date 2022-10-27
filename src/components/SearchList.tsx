import React from 'react'
import { CitiesArrayType, CitiesType } from '../types'

interface SearchListType {
  citiesList: CitiesArrayType
  render: (city: CitiesType) => void
}

export const SearchList = ({ citiesList, render }: SearchListType) => {
  return (
    <div className='grid grid-cols-1 gap-2 overflow-y-auto h-[600px] w-full'>
      <>
        {citiesList.map(render)}
      </>
    </div>
  )
}
