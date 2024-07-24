import React from 'react'

const Search = ({seacrh , setSeacrh}) => {
    return (
        <form className='flex flex-[0.5]' >
            <input type="text" value={seacrh} onChange={e => setSeacrh(e.target.value)} className='outline-none bg-blue p-2 placeholder:text-white text-white w-full rounded-md' placeholder='Search retreats by title' />
        </form>
    )
}

export default Search