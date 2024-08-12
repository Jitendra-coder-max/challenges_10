import React, { useState } from 'react'

const Clock = () => {

    const [time,setTime] = useState(0)
    const [validId, setValidId] = useState(null)


    const startWatch = () => {

        if(!validId){

       const id=     setInterval(() => {
setTime(prevTime => prevTime+1)

            },1000)
        setValidId(id)
        }

    }

    const stopWatch =() => {
clearInterval(validId)
setValidId(null)


    }

    const resetWatch = () => {
        clearInterval(validId)
        setValidId(null)

        setTime(0)

    }

    const hours = Math.floor( (time/3600));///
    const minutes = Math.floor((time%3600)/60) /// 
    const seconds = Math.floor((time%60))    // 
    
  return (
    <div>Clock{hours.toString().padStart(2,'0')}:{minutes.toString().padStart(2,'0')}:{seconds.toString().padStart(2,'0')}
<button onClick={startWatch}>start</button>
<button onClick={stopWatch}>stop</button>
<button onClick={resetWatch}>reset</button>

    </div>
  )
}

export default Clock