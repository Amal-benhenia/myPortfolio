import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I offer</h5>
    <h2>Services</h2>
    <div className='container services_container'>
    <article className='service'>
    <div className='service_head'>
    <h3>Fontend Development</h3>
    </div>
    <ul className='service_list'>
    <li>
    <BiCheck className='service_list_icon'/>
    <p>Responsive websites built for an optimal user experience</p>
    </li>
    
    <li>
    <BiCheck className='service_list_icon'/>
    <p>Integration of eCommerce platforms and payment gateways</p>
    </li>
    
    <li>
    <BiCheck className='service_list_icon'/>
    <p>Building small and medium web apps and coding interactive layouts </p>
    </li>
   
    <li>
    <BiCheck className='service_list_icon'/>
    <p>Fixing bugs and testing for usability </p>
    </li>
    
    <li>
    <BiCheck className='service_list_icon'/>
    <p>Interacting and make use of APIs </p>
    </li>
    </ul>
    </article>

    <article className='service'>
    <div className='service_head'>
    <h3>Backend Development</h3>
    </div>
    <ul className='service_list'>
    <li>
    <BiCheck className='service_list_icon'/>
    <p>Creating, maintaining, testing and debugging the entire backend</p>
    </li>
    
    <li>
    <BiCheck className='service_list_icon'/>
    <p>Database creation, integration and management </p>
    </li>
    
    <li>
    <BiCheck className='service_list_icon'/>
    <p>RestAPIs integration </p>
    </li>
   
    <li>
    <BiCheck className='service_list_icon'/>
    <p>User authentication and authorization </p>
    </li>
    </ul>
    </article>
    </div>
    </section>
  )
}

export default Services