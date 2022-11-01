interface HomePageTitleProps {
  cityName: string
  cityDate: string
}

export const HomePageTitle = ({ cityName, cityDate }: HomePageTitleProps) => {
  return (
    <header className="col-span-3 flex flex-col gap-2">
      <h1 className="text-4xl text-slate-100 font-bold text-center drop-shadow-md">{cityName}</h1>
      <p className="text-lg text-slate-100 font-bold text-center drop-shadow-md">{cityDate}</p>
    </header>
  )
}
