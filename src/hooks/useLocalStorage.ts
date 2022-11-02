import { useState } from 'react'

export function useLocalStorage<T> (itemName: string) {
  const localStorageItem = localStorage.getItem(itemName) ?? ''

  if (!localStorageItem) localStorage.setItem(itemName, '[]')

  const parsedItem: T[] = JSON.parse(localStorageItem)

  const [item, setItem] = useState<T[]>([])

  const saveItem = (newItem?: T) => {
    if (newItem) {
      parsedItem.push(newItem)
      const stringifiedItem = JSON.stringify(parsedItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(parsedItem)
    }
  }
  const returnValue: [T[], (newItem: T) => void] = [item, saveItem]

  return returnValue
}
