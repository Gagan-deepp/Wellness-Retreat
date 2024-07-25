import { useState, useEffect } from 'react'

const useDebounce = ({ value, delay = 500 }) => {

    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => {
            setDebounceValue(value);
        }, delay)

        return () => {
            clearTimeout(handle);
        }
    }, [value, delay])

    return debounceValue
}

export default useDebounce
