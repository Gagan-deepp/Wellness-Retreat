import { useEffect, useState } from 'react';
import useDebounce from '../hooks/Debounce'

const Search = ({ handleSearch }) => {
    const [search, setSearch] = useState("")
    const debounceSearch = useDebounce({ value: search }); //DEboucing the search 

    useEffect(() => {
        handleSearch(debounceSearch)
    }, [debounceSearch, handleSearch])
    return (
        <div className='flex flex-1 sm:flex-[0.5]' >
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} className='outline-none bg-white border-grey border-2 sm:border-none sm:bg-blue p-2 sm:placeholder:text-white placeholder:text-blue text-blue sm:text-white w-full rounded-sm sm:rounded-md' placeholder='Search retreats by title' />
        </div>
    )
}

export default Search