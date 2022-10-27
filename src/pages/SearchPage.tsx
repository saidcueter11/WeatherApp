import { SearchDescription } from '../components/SearchDescription'
import { SearchInput } from '../components/SearchInput'
import { SearchList } from '../components/SearchList'
import { CitiesArrayType, CitiesType } from '../types'
import { FormEvent } from 'react'
import { SearchItem } from '../components/SearchItem'

interface SearchPageType {
  citiesList: CitiesArrayType
  handleInput: ((e: FormEvent<HTMLInputElement>) => void)
  handleClick: (cityLan: number, cityLon: number, cityName: string) => void
}

export const SearchPage = ({ citiesList, handleClick, handleInput }: SearchPageType) => {
  return (
    <>
      <SearchDescription />
      <SearchInput onInput={handleInput} />
      {
        citiesList.length > 0 && (
          <SearchList citiesList={citiesList} render={(city: CitiesType) => (
            <SearchItem city={city} handleClick={handleClick} key={city.id} />
          )}
          />
        )
      }
    </>
  )
}
