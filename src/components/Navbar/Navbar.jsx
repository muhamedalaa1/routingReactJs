import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {

  getActive(e){

    console.log(e.target);
    
    let myActiveLink = e.target
    

    let allNodes = document.querySelectorAll('.removeAct');
    for(let i = 0 ; i < allNodes.length; i++ ){

      allNodes[i].classList.remove('active')

    }

    myActiveLink.classList.add('active');



    

  }


  render() {
    return <>
    
    <div className=" navbarContainer py-4 fixed-top">
        <nav className="container navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand text-white fw-bolder" to="home">START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link onClick={this.getActive} className="removeAct nav-link   text-white fw-bold" aria-current="page" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.getActive} className="removeAct nav-link  text-white fw-bold" to="Portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.getActive} className="removeAct nav-link text-white fw-bold" to="Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  }
}
