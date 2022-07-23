import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-primary fw-bold'>About Us</h1>
            <p className='lead mb-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ad amet quos expedita eveniet, error nostrum asperiores minima magni molestiae aperiam similique voluptas maiores. Natus dolore iste autem fugiat explicabo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, temporibus dolores reprehenderit omnis similique sunt ad suscipit, unde nesciunt optio mollitia neque id quibusdam adipisci non doloremque illum aliquid perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae, pariatur eum ratione odio et fugit inventore, magnam placeat ipsum eligendi! Autem rerum perferendis commodi at dolorum, libero minima sed? 
            </p>

            <Link to='/contact'className='btn btn-outline-primary px-3'>
                Contact Us
            </Link>
          </div>

          <div className='col-md-6 d-flex justify-content-center '>
              <img className="rounded-5"src="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt="about-us" height="400px" width="550px"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About