import React from 'react'

const InputBox=({placeholder,value,onChange})=> {
  return (
    <input
        className='w-[404px] h-[76px] shadow-sm px-5 rounded-md border-none focus:outline-none'
        placeholder={placeholder} 
        type="text"
        value={value}
        onChange={onChange} 
    />
  )
}


export default InputBox

