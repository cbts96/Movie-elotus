import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
          <div className="max-h-96 md:h-screen">
            <img className="w-screen h-screen object-cover object-top" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
          </div>
          <div className="flex bg-gray-100 p-10">
            <div className="mb-auto mt-auto max-w-lg">
                <div className='mb-4'>
              <h1 className="text-3xl uppercase">Lê Xuân Thắng</h1>
              <p className="font-semibold mb-6">Web Developer</p>
              <p style={{color:"gray", fontFamily: "'Nunito', sans-serif", fontSize:"20px"}}>Thang is a web developer, he come from Tien Giang, and had one year experience in web environment at the company. <br/>
                He love computer and game from when he was a child. His goal is become the FullStack developer in the furture. <br />
                Thank you for reading my introdution. 
             </p>
             </div>
              <a href="https://lethang-cv.netlify.app/" className="bg-black rounded-md py-3 px-7 mt-6 text-white">Contact Me Via</a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About