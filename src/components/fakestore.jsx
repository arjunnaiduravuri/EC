import React from 'react'
import { useState,useEffect } from 'react'
import Nav from './Nav'
import Product from './product'


const Fakestore = () => {
    const [category,setCategorys] =useState([])
    const [product,setProducts] = useState([{}])
    console.log(category)
   
    function handlecategory(){
        fetch("https://fakestoreapi.com/products/categories")
        .then((res)=>res.json())
        .then((data)=>{
         data.unshift("All")
         setCategorys(data)
        })
    }
    function products(url){
        fetch(url)
        .then((responce)=>
            responce.json()
        )
        .then((data)=>{
            setProducts(data)
            console.log(data)
        })


    }

  useEffect(()=>{
        handlecategory()
        products("http://fakestoreapi.com/products")
    
    },[])
    function HandleOption(event){
        if (event.target.value=="All"){
            products("http://fakestoreapi.com/products")
        }
        else{
            products(`http://fakestoreapi.com/products/category/${event.target.value}`)

        }

    }

  return (
    <div>
        <Nav/>
        
        <section className='mt-2 row'>
            <aside className='col-2 ms-3'>
              <div>
                <label className='form-label'>select category</label>
                <select  className='form-select' onChange={HandleOption}>
                    {
                      category.map((item)=>
                      <option value={item} key={item}>{item.toUpperCase()}</option>
                    )
                    }
                </select>
              </div>
            </aside>
            <main className='row col-10 d-flex flex-wrap '>
                {
                    product.map((item)=>
                         <Product item={item}/>
                 )}
        </main>

        </section>
      
    </div>
  )
}

export default Fakestore
