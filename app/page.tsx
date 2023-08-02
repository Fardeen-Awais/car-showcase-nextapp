import Image from 'next/image'
import { Hero, CustomFilter, SearchBar, CarCard } from './components'
import { fetchCar } from '@/utils'
export default async function Home() {
  const allcars = await fetchCar();
  const isDataEmpty = !Array.isArray(allcars) || allcars.length < 1 || !allcars;
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <div className='mt-12 padding-x padding-y max-w-7xl mx-auto' id='discover'>
          <div className='home__text-container'>
            <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>

          <div className='home__filters'>
            <SearchBar /> {/* Used for Seaches  */}

            <div className='home__filter-container'>
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </div>
          </div>

          {!isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {allcars?.map((car) => {
                  return <CarCard key={car.id} car={car} />
                })}
              </div>
            </section>
          ) :
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Ooops, no results</h2>
              <p>{allcars?.message}</p>
            </div>
          }

        </div>
      </main>
    </>
  )
}
