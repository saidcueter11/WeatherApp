import { FormEvent } from 'react'

interface InputSearchType {
  onInput: ((e: FormEvent<HTMLInputElement>) => void)
}

export const SearchInput = ({ onInput }: InputSearchType) => {
  return (
    <div className='flex relative items-center justify-center col-span-3 self-start'>
      <input type='text' onInput={(e) => onInput(e)} className='rounded-xl pl-11 py-2 bg-transparent backdrop-brightness-95 text-slate-100 drop-shadow-lg text-lg outline-none w-10/12' />
      <span className='absolute left-7 p-2'>
        <svg fill='#fff' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg>
      </span>
    </div>
  )
}
