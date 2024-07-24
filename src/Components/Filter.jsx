import React from 'react'

const Filter = ({ options = [], setSelect, select}) => {
  return (
    <select value={select} onChange={e => setSelect(e.target.value)} className='bg-blue text-white p-2 rounded-md outline-none' >
      {options.map((items, index) => (
        <option key={index} value={items.value} className='bg-white text-black' >
          {items.label}
        </option>
      ))}
    </select>
  )
}

export default Filter