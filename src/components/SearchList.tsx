import React from 'react'
import { CitiesArrayType, CitiesType } from '../types'

interface SearchListType {
  citiesList: CitiesArrayType
  render: (city: CitiesType) => void
}

export const SearchList = ({ citiesList, render }: SearchListType) => {
  return (
    <div className='grid grid-cols-1 gap-2 overflow-y-auto h-[500px] w-full'>
      <>
        {citiesList.map(render)}
      </>
    </div>
  )
}
