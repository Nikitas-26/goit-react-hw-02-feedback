import React, { Component } from "react"

class Feedback  extends  Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    render(){
        return <>
        <h1>PLEASE LEAVE FEEDBACK</h1>
        <button type='button'>Good</button>
        <button type='button'>Neutral</button>
        <button type='button'>Bad</button>
        <h2>Statistics</h2>
        <p>Good - 0</p>
        <p>Neutral - 0</p>
        <p>Bad - 0</p>
        </>}
}
 
export default Feedback;