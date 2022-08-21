import React, { useState } from 'react'

export const DateNow = () => {
  const [dateNow, setDateNow] = useState((new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date())))
  return (
    <div className='DateNow'>{dateNow}</div>
  )
}
