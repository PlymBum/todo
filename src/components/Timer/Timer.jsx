/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useRef, useState } from 'react'

import './Timer.css'

function Timer({ second, updateTimer, id }) {
  const [timer, setTimer] = useState(second)
  const [isEnable, setIsEnable] = useState(false)
  const timerIsActive = false

  useEffect(() => {
    if (!isEnable) return

    const i = setInterval(() => {
      setTimer((s) => s + 1)
    }, 1000)
    return () => clearInterval(i)
  }, [isEnable])

  useEffect(() => updateTimer(id, timer), [timer])

  const toogleEnable = () => {
    setIsEnable((s) => !s)
  }

  const min = String(Math.floor(timer / 60)).padStart(2, '0')
  const sec = String(Math.floor(timer % 60)).padStart(2, '0')

  const { initMin, initSec } = timer
  return (
    <span>
      <span className="time">
        {min}:{sec}
      </span>

      <button
        type="button"
        aria-label="start/stop"
        className={isEnable ? 'icon icon-pause' : 'icon icon-play'}
        onClick={toogleEnable}
      />
    </span>
  )
}
export default Timer
