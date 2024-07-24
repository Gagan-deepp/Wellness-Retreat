import React, { useEffect, useState } from 'react'
import useStore from '../zustand/Store';

const Retreats = () => {
  const retreats = useStore((state) => state.retreats);
  const setRetreats = useStore((state) => state.setRetreats)

  const [page, setPage] = useState(1);
  const URL = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${page}&limit=3`;

  useEffect(() => {
    fetch(URL).then(res => res.json()).then(data => setRetreats(data)).catch(err => console.log(err));
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className='flex flex-col gap-4' >

      {/* Retreats */}
      <div className='grid grid-cols-1 gap-5 md:grid-cols-3' >
        {retreats?.map((retreat) => {
          const date = new Date(retreat?.date);
          const month = date.toLocaleString('default', { month: 'long' });

          const formatDate = `${month} ${date.getDate()}-${date.getDate() + retreat.duration} ${date.getFullYear()}`
          console.log(retreat)
          return <div className='bg-bg p-4 rounded-md flex flex-col gap-4' key={retreat?.id}  >
            <div className='w-1/2 h-24 rounded-md' >
              <img src={retreat?.image} alt="retreat_bg" className='w-full h-full object-cover rounded-md' />
            </div>

            <div>
              <h3 className='font-semibold text-base' > {retreat?.title} </h3>

              <div className='mt-2 text-xs flex flex-col gap-2'>
                <p className='' > {retreat?.description} </p>
                <p> Date : {formatDate} </p>
                <p> Location : {retreat.location} </p>
                <p> Price : {retreat.price} </p>
              </div>
            </div>

          </div>
        })}
      </div>

      {/* Pagination Button */}
      <div className='flex-center gap-4' >
        <button className={`bg-blue ${page === 1 ? "cursor-not-allowed" : "cursor-pointer"} text-white p-3 rounded-md font-semibold `} onClick={(e) => setPage(page - 1)} disabled={page === 1 ? true : false} > Previous </button>
        <button className='bg-blue cursor-pointer text-white p-3 rounded-md font-semibold' onClick={(e) => setPage(page + 1)} > Next </button>
      </div>
    </div>
  )
}

export default Retreats