import { Link } from 'wouter'

export const HomeHistoryWeather = () => {
  return (
    <div className='self-start col-span-3 grid gap-3'>
      <div className='flex justify-between items-center'>
        <p className='text-slate-100/90 text-2xl'>Today</p>
        <Link to="/forecast">
          <a className='text-lg text-slate-100'>View full report</a>
        </Link>
      </div>

      <div className='flex overflow-x-scroll gap-1'>
        <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg'></div>
        <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg'></div>
        <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg'></div>
        <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg'></div>
        <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg'></div>
        <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg'></div>
        <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg'></div>
      </div>
    </div>
  )
}
