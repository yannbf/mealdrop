type RestaurantCardProps = {
  id?: string
  name: string
  rating?: number
  specialty: string
  photoUrl: string
  isClosed?: boolean
  categories?: string[]
  isLoading?: boolean
  isNew?: boolean
  className?: string
}

export const RestaurantCard = ({
  isClosed = false,
  isNew = false,
  isLoading = false,
}: RestaurantCardProps) => {
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {isNew && <div>new</div>}
      {isClosed && <div>closed</div>}
      Restaurant card
    </div>
  )
}
