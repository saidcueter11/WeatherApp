export const LoadingHomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-3 items-center col-span-3">
        <h1 className="bg-dark-gray/30 animate-pulse w-52 rounded-lg h-8"></h1>
        <p className="bg-dark-gray/30 animate-pulse w-52 rounded-lg h-8"></p>
      </div>

      <div className="flex flex-col gap-3 items-center col-span-3">
        <p className="h-28 w-32 bg-dark-gray/30 animate-pulse rounded-lg"></p>
        <div className="self-center flex justify-evenly w-full">
          <div className="flex flex-col gap-3">
            <p className="bg-dark-gray/30 animate-pulse w-20 h-8 rounded-lg"></p>
            <p className="bg-dark-gray/30 animate-pulse w-20 h-8 rounded-lg"></p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="bg-dark-gray/30 animate-pulse w-20 h-8 rounded-lg"></p>
            <p className="bg-dark-gray/30 animate-pulse w-20 h-8 rounded-lg"></p>
          </div>
        </div>
      </div>

      <div className="flex justify-around w-full col-span-3 self-center">
        <div className="bg-dark-gray/30 rounded-lg p-3 w-24 h-20 animate-pulse"></div>
        <div className="bg-dark-gray/30 rounded-lg p-3 w-24 h-20 animate-pulse"></div>
        <div className="bg-dark-gray/30 rounded-lg p-3 w-24 h-20 animate-pulse"></div>
      </div>

      <div className='self-start col-span-3 grid gap-3'>
        <div className='flex justify-between items-center'>
          <p className='bg-dark-gray/30 animate-pulse w-20 h-8 rounded-lg'></p>
          <p className="bg-dark-gray/30 animate-pulse w-28 h-8 rounded-lg"></p>
        </div>

        <div className='flex overflow-x-scroll gap-1'>
          <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg animate-pulse'></div>
          <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg animate-pulse'></div>
          <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg animate-pulse'></div>
          <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg animate-pulse'></div>
          <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg animate-pulse'></div>
          <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg animate-pulse'></div>
          <div className='min-w-[100px] h-20 bg-dark-gray/30 rounded-lg animate-pulse'></div>
        </div>
      </div>
    </>
  )
}
