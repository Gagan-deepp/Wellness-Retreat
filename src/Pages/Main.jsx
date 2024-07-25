import Hero from '../Components/Hero'
import Filter from '../Components/Filter'
import Retreats from '../Components/Retreats'
import Search from '../Components/Search'
import { useEffect, useState } from 'react'
import useStore from '../zustand/Store'
import { location, types } from '../Constants/data'

const Main = () => {
  const URL = "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats"
  const setRetreats = useStore((state) => state.setRetreats)
  const [selectType, setSelectType] = useState("");
  const [selectLocation, setSelectLocation] = useState("");

  // Search Functions
  const handleSearch = async (value) => {
    try {
      let data;
      if (value === "") {
        const res = await fetch(`${URL}?page=1&limit=3`);
        data = await res.json();
      } else {
        const res = await fetch(`${URL}?search=${value.replaceAll(" ", "%20")}`);
        data = await res.json();
      }
      if (data !== "Not found") {
        setRetreats(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  //Function to handle filter
  useEffect(() => {

    //Function for handling type filter
    const handleFilterType = async () => {
      try {
        const res = await fetch(`${URL}?filter=${selectType.replaceAll(" ", "%20")}`);
        const data = await res.json();
        setRetreats(data); // Setting global data using setRetreats function from store
      } catch (error) {
        console.log(error)
      }
    }

    // Function for handling location filter
    const handleFilterLocation = async () => {
      try {
        const res = await fetch(`${URL}?location=${selectLocation}`);
        const data = await res.json();
        setRetreats(data);
      } catch (error) {
        console.log(error)
      }
    }

    if (selectType !== "") {
      handleFilterType()
    }
    if (selectLocation !== "") {
      handleFilterLocation()
    }
    // eslint-disable-next-line
  }, [selectLocation, selectType])

  return (
    <div className='wrapper flex flex-col gap-7' >

      {/* Hero Section */}
      <Hero />

      {/* Filter and Search Buttons */}
      <div className='flex justify-between flex-col gap-4 sm:flex-row' >
        <div className='flex gap-4 flex-col sm:flex-row' >
          <Filter select={selectLocation} setSelect={setSelectLocation} options={location} />
          <Filter select={selectType} setSelect={setSelectType} options={types} />
        </div>
        <Search handleSearch={handleSearch} />
      </div>

      {/* Retreats */}
      <Retreats />

    </div>
  )
}

export default Main