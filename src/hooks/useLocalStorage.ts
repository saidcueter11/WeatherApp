import { useState } from 'react'

export function useLocalStorage<T> (itemName: string) {
  const localStorageItem = localStorage.getItem(itemName) ?? itemName
  if (localStorageItem === itemName) localStorage.setItem(itemName, '[]')
  console.log({ localStorageItem })

  const parsedItem: T[] = JSON.parse(localStorageItem)
  const [item, setItem] = useState<T[]>(parsedItem)

  const manageItem = (newItem?: T) => {
    if (newItem) {
      if (parsedItem.some(item => JSON.stringify(item) === JSON.stringify(newItem))) {
        const newList = parsedItem.filter(item => JSON.stringify(item) !== JSON.stringify(newItem))
        const stringifiedItem = JSON.stringify(newList)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newList)
      } else {
        const newList = [...parsedItem, newItem]
        const stringifiedItem = JSON.stringify(newList)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newList)
      }
    }
  }

  const returnValue: [T[], (newItem: T) => void] = [item, manageItem]

  return returnValue
}
