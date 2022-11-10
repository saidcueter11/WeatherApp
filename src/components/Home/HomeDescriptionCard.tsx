interface HomeDescriptionCardProps {
  title: string
  description: string
}

export const HomeDescriptionCard = ({ title, description }: HomeDescriptionCardProps) => {
  return (
    <div className="rounded-lg p-3 w-32 backdrop-brightness-95">
      <p className="text-center text-slate-100/90 text-base font-semibold drop-shadow-lg">{title}</p>
      <p className="text-center text-slate-100/90 text-base font-semibold drop-shadow-lg">{description}</p>
    </div>
  )
}
