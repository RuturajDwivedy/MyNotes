import React from 'react'

function About() {


  return (
    <div className="container my-4">
      <div className='d-flex justify-content-center mb-4'>
      {/* <div className="pimg "> */}
      <img className="pimg" src="Ruturaj-min.jpg" alt="Ruturaj Dwivedy"></img>
      {/* </div> */}
      </div>
      <p>Hello, my name is Ruturaj Dwivedy and this is my first MERN Stack project.</p>
      <p>
        This is an exercise in creating an account, hashing a password, adding a little spice, and then logging in using a JWT token.
      </p>
    </div>
  )
}

export default About
