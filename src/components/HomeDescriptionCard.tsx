interface HomeDescriptionCardProps {
  title: string
  description: string
}

export const HomeDescriptionCard = ({ title, description }: HomeDescriptionCardProps) => {
  return (
    <div className="bg-dark-gray/30 rounded-lg p-3 w-24">
      <p className="text-center text-slate-100/90 text-base font-semibold">{title}</p>
      <p className="text-center text-slate-100/90 text-base font-semibold">{description}</p>
    </div>
  )
}
