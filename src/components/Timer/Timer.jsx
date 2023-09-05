/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useRef, useState } from 'react'

import './Timer.css'

function Timer({ second, updateTimer, id, toogleEnable, isEnable, timerStartTime }) {
  const [timer, setTimer] = useState(second)
  const timerIsActive = false

  useEffect(() => {
    if (!isEnable) return
    const i = setInterval(() => {
      setTimer((s) => s + 1)
    }, 1000)
    return () => clearInterval(i)
  }, [isEnable])

  useEffect(() => {
    if (timerStartTime !== null) {
      const currentSecond = Math.floor((new Date() - timerStartTime) / 1000)
      setTimer((s) => currentSecond)
    }
  }, [])

  useEffect(() => updateTimer(id, timer), [timer])

  const min = String(Math.floor(timer / 60)).padStart(2, '0')
  const sec = String(Math.floor(timer % 60)).padStart(2, '0')

  return (
    <span>
      <span className="time">
        {min}:{sec}
      </span>

      <button
        type="button"
        aria-label="start/stop"
        className={isEnable ? 'icon icon-pause' : 'icon icon-play'}
        onClick={() => toogleEnable(id)}
      />
    </span>
  )
}
export default Timer
