import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
  render() {
    return <>
    <div className="myHome text-center text-white d-flex flex-column gap-4 ">
        
        <img src="./images/avataaars.svg" alt="profile" className="homeImg w-25 m-auto" />
        <h2 className='homeH2'>START FRAMEWORK</h2>
        <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
            
        

        </>
  }
}
