import React, { Component } from 'react'
import './Contact.css';

export default class Contact extends Component {
  render() {
    return <>
    
        

        <div className='myContactInfo d-flex flex-column gap-3 w-50 m-auto text-center'>
                
                <h2 className='contactH2'>CONATCT SECTION</h2>

                <input  className='mb-3 p-2 rounded-2 border-0 border-bottom' type="text" placeholder='Enter Your Name'/>
                <input className='mb-3 p-2 rounded-2 border-0 border-bottom' type="text" placeholder='Enter Your Age'/>
                <input className='mb-3 p-2 rounded-2 border-0 border-bottom' type="email" placeholder='Enter Your Mail'/>
                <input className='mb-3 p-2 rounded-2 border-0 border-bottom' type="password" placeholder='Enter Your Password'/>

                <button className=' btn btn-outline-success'> Send Message</button>

        </div>
    
    
    
    
    
    </>
  }
}
