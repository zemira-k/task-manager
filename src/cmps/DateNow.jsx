import React,{useState} from 'react'

export const DateNow = () => {
    const [dateNow, setDateNow] = useState("22.4") 
  return (
    <div className='DateNow'>{dateNow}</div>
  )
}
