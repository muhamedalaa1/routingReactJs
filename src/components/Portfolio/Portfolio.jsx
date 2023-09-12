import React, { Component } from 'react'
import './Portfolio.css'





export default class Portfolio extends Component {

  getDisplay(e){
    let cardImg = e.target.src;
    console.log(cardImg);
    document.querySelector('.documentLayer').classList.remove('d-none')
    document.querySelector('.documentLayer').innerHTML = `<img src="${cardImg}" alt="" class=' rounded-2 w-50'/>`;
  }

  getDisappear(e){

    console.log(e.target);

    
        console.log("disappear");
    
    document.querySelector('.documentLayer').classList.add('d-none')
    
    
        
    
    

    
  }

  render() {
    return <>
    <div className='container-fluid position-relative'>


        {/* grid */}
        <div className='myPort container '> 
            <div className='text-center '>
                <h2 className='portH2 fw-bolder'>PORTFOLIO COMPONENT</h2>
            </div>

            <div className="row g-3 py-5">
                    

                    <div onClick={this.getDisplay} className='col-lg-4 col-md-6'>
                        <div className=" inner position-relative overflow-hidden">
                            <img   src="images/poert1.png" alt="" className=' rounded-2 w-100'/>
                            {/* <div className="layer">
                                <img   src="images/poert1.png" alt="" className='d-none rounded-2 w-100'/>

                                <i class="fa-solid fa-plus"></i>
                            </div> */}
                        </div>
                    </div>
                    <div onClick={this.getDisplay} className='col-lg-4 col-md-6'>
                        <div className="inner position-relative overflow-hidden">
                            <img src="images/port2.png" alt="" className=' rounded-2 w-100'/>
                            {/* <div className="layer"><i class="fa-solid fa-plus"></i></div> */}
                        </div>
                    </div>
                    <div onClick={this.getDisplay} className='col-lg-4 col-md-6'>
                        <div className="inner position-relative overflow-hidden">
                            <img src="images/port3.png" alt="" className=' rounded-2 w-100'/>
                            {/* <div className="layer"><i class="fa-solid fa-plus"></i></div> */}
                        </div>
                    </div>
                    <div onClick={this.getDisplay} className='col-lg-4 col-md-6'>
                        <div className="inner position-relative overflow-hidden">
                            <img src="images/poert1.png" alt="" className=' rounded-2 w-100'/>
                            {/* <div className="layer"><i class="fa-solid fa-plus"></i></div> */}
                        </div>
                    </div>
                    <div onClick={this.getDisplay} className='col-lg-4 col-md-6'>
                        <div className="inner position-relative overflow-hidden">
                            <img src="images/port2.png" alt="" className=' rounded-2 w-100'/>
                            {/* <div className="layer"><i class="fa-solid fa-plus"></i></div> */}
                        </div>
                    </div>
                    <div onClick={this.getDisplay} className='col-lg-4 col-md-6'>
                        <div className="inner position-relative overflow-hidden">
                            <img src="images/port3.png" alt="" className=' rounded-2 w-100'/>
                            {/* <div className="layer"><i class="fa-solid fa-plus"></i></div> */}
                        </div>
                    </div>

            </div>
        
        
        
        </div>
        {/*end grid */}
        <div onClick={this.getDisappear} className='documentLayer d-none d-flex justify-content-center align-items-center'>
            
        </div>

    </div>
        
    
    
    </>
  }
}