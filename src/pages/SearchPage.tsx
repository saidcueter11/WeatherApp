import { SearchDescription } from '../components/Search/SearchDescription'
import { SearchInput } from '../components/Search/SearchInput'
import { SearchList } from '../components/Search/SearchList'
import { CitiesArrayType, CitiesType } from '../types'
import { FormEvent } from 'react'
import { SearchItem } from '../components/Search/SearchItem'
import { SearchPageContainer } from '../components/Search/SearchPageContainer'

interface SearchPageType {
  citiesList: CitiesArrayType
  handleInput: ((e: FormEvent<HTMLInputElement>) => void)
  handleClick: (cityLan: number, cityLon: number, cityName: string) => void
}

export const SearchPage = ({ citiesList, handleClick, handleInput }: SearchPageType) => {
  return (
    <SearchPageContainer>
      <SearchDescription />
      <SearchInput onInput={handleInput} />

      {
        citiesList.length > 0
          ? (
            <SearchList citiesList={citiesList} render={(city: CitiesType) => (
              <SearchItem city={city} handleClick={handleClick} key={city.id} />
            )}
            />)
          : (<div className='grid grid-cols-1 gap-2 overflow-y-scroll h-full min-h-[450px] col-span-3 w-full grid-rows-fill-50'></div>)
      }

    </SearchPageContainer>
  )
}
