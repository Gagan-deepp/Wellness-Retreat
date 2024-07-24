import Hero from '../Components/Hero'
import Filter from '../Components/Filter'
import Retreats from '../Components/Retreats'
import Search from '../Components/Search'
import { useEffect, useState } from 'react'
import useStore from '../zustand/Store'

const Main = () => {
  const setRetreats = useStore((state) => state.setRetreats)
  const [selectType, setSelectType] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [seacrh, setSearch] = useState("");
  const location = [{ value: "", label: "Filter By Location" }, { value: "Goa", label: "Goa" }, { value: "Rishikesh", label: "Rishikesh" }, { value: "Mumbai", label: "Mumbai" }, { value: "Kerala", label: "Kerala" }]
  const types = [{ value: "", label: "Filter By Type" }, { value: "Detox", label: "Detox" }, { value: "Mental Wellness", label: "Mental Wellness" },]


  useEffect(() => {

    //Function to handle filter
    const handleFilter = async () => {
      const res = await fetch(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?filter=${selectType.replace(" ", "%20")}`);
      const data = await res.json();
      console.log(data)
      setRetreats(data); // Setting global data using setRetreats function from store
    }

    if (selectDate != "" || selectType != "") {
      handleFilter()
    }
    // eslint-disable-next-line
  }, [selectDate, selectType])

  return (
    <div className='wrapper flex flex-col gap-7' >

      {/* Hero Section */}
      <Hero />

      {/* Filter and Search Buttons */}
      <div className='flex justify-between' >
        <div className='flex gap-4' >
          <Filter select={selectDate} setSelect={setSelectDate} options={location} />
          <Filter select={selectType} setSelect={setSelectType} options={types} />
        </div>
        <Search seacrh={seacrh} setSearch={setSearch} />
      </div>

      {/* Retreats */}
      <Retreats />

    </div>
  )
}

export default Main