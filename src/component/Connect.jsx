import React from 'react'
import pic from "../assets/pic.jpg"

const Connect = () => {
  return (
    <div>
        <div class="container">
            <div className='row'>
                <div className='col-6'>
                    <h4 style={{color: "#FF5722"}}>Interested?</h4>
                    <h1 style={{color: "#FF5722"}}>Contact!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Venenatis sit ut viverra odio pellentesque.</p>
                </div>
                <div className='col-6'>
                  <img src={pic} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Connect