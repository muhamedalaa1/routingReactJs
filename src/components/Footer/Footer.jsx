import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return <>
    
    
    <div className='footerParent'>

        <div className="firstFooter container py-5">
            <div className="row">
                <div className="col-lg-4">
                    <div className="inner text-center py-5">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="inner text-center py-5">
                        <h3>AROUND THE WEB</h3>
                        <ul className='myList'>
                        <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                            <i class="fa-solid fa-globe"></i>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="inner text-center py-5">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>

            </div>
        </div>


        <div className='lastFooter py-5 container-fluid text-center'>

                <p>Copyright © Your Website 2021</p>

        </div>
    </div>
    
    
    
    
    </>
  }
}
