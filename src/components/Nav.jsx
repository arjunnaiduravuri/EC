import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => {
    const cartproducts = useSelector(state=>state.cart)

    
  return (
    <div>
        <nav className='container-fluid bg-info d-flex justify-content-between' style={{height:"60px"}}>
            <div><h2 className='ms-2'>E-Commerce</h2></div>
            
            
            <div className='icons me-5  mt-2'>
            
                <span className='bi bi-search p-2 btn'></span>
                <span className='bi bi-heart-fill p-2 btn'></span>
                <span className='bi bi-person p-2 btn'></span>
               <Link to="/cartitems"><button className='btn btn-light position-relative'>
                <span className='bi bi-cart p-2 '></span>
               <span className='badge rounded-circle bg-danger position-absolute'>{cartproducts.length}</span>
                </button></Link> 
            </div>
        </nav>
      
    </div>
  )
}

export default Nav
