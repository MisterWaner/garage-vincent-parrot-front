import CarCard from "../CarCard/CarCard"

const CarsGallery = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-normal">
        <CarCard />
        <CarCard />
    </div>
  )
}

export default CarsGallery