import React, { Component } from 'react'

import './Timer.css'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    const { minute, second } = this.props
    this.state = {
      minute,
      second,
      timerIsActive: false,
      timerId: null,
    }
  }

  componentWillUnmount() {
    const { timerId } = this.state
    clearInterval(timerId)
  }

  updateTime = () => {
    const { second, minute } = this.state
    const { updateTimer, id } = this.props

    if (second === 59) {
      this.setState((state) => {
        const newMinutValue = state.minute === 59 ? 0 : state.minute + 1
        updateTimer(id, newMinutValue, 0)
        return {
          minute: newMinutValue,
          second: 0,
        }
      })
    } else {
      this.setState((state) => {
        const newSecondValue = state.second + 1
        updateTimer(id, minute, newSecondValue)
        return {
          second: newSecondValue,
        }
      })
    }
  }

  startStopTimer = () => {
    const { timerIsActive, timerId } = this.state
    if (!timerIsActive) {
      this.setState({
        timerIsActive: true,
        timerId: setInterval(this.updateTime, 1000),
      })
    } else {
      clearInterval(timerId)
      this.setState({
        timerIsActive: false,
        timerId: null,
      })
    }
  }

  render() {
    const { second, minute, timerIsActive } = this.state
    return (
      <span>
        <span className="time">
          {minute}:{second < 10 ? `0${second}` : second}
        </span>
        <button
          type="button"
          aria-label="start/stop"
          className={timerIsActive ? 'icon icon-pause' : 'icon icon-play'}
          onClick={this.startStopTimer}
        />
      </span>
    )
  }
}
