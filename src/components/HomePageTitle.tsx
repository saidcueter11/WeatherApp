interface HomePageTitleProps {
  cityName: string
  cityDate: string
}

export const HomePageTitle = ({ cityName, cityDate }: HomePageTitleProps) => {
  return (
    <div className="col-span-3">
      <h1 className="text-2xl text-slate-100/90 font-bold text-center">{cityName}</h1>
      <p className="text-lg text-slate-100/90 font-bold text-center">{cityDate}</p>
    </div>
  )
}
