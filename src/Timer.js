import React, { useEffect, useState } from 'react'

const Timer = () => {


    const [startTime, setStartTime] = useState(new Date())


    useEffect(() => {

      const timer =   setInterval(() => {
           
        setStartTime( new Date())
    
        })

        return () => clearInterval(timer)

    },[startTime])


    const format = (time) => {

   return time.toLocaleTimeString('en-US')
                
    }



  return (
    <div>Timer
        {/* {startTime.getHours()}: {startTime.getMinutes()}: {startTime.getSeconds()}: {startTime.getTimezoneOffset}: */}
        <h1>{format(startTime)}</h1>
    </div>
  )
}

export default Timer