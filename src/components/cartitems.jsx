import { Link } from "react-router-dom"
import Nav from "./Nav"
import { useSelector, useDispatch } from "react-redux"
import { remove } from "../store/slice"
import { useState,useEffect } from "react"


function Cartitems() {
    const productCart = useSelector(state => state.cart)
    console.log(productCart)
    
    const dispatch = useDispatch()
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(productCart.reduce((acc, curr) => acc + curr.price,0));
      }, [productCart]);

return (
        <>
        <Nav />
    {
            (productCart.length > 0)?(
                <div className="section mt-2 row p-2">
                <main className="col-8 ms-3 ">
                    <div className="d-flex flex-wrap">
                        {
                            productCart.map((product) =>
                                <div className='card m-2 p-2 w-75  text-secondry' key={product.id}>
                                    <div className="d-flex justify-content-around align-items-center">
                                     <div className="w-25">
                                        <img src={product.image} alt="item" width={"150px"} height={"150px"}/>
                                    </div>
                                    <div className="w-50">
                                        <p>{product.title}</p>
                                        <p><span className="bi bi-star-fill"></span> {product.rating.rate}[{product.rating.count}]</p>
                                        <p>$ {product.price}</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-danger " onClick={()=>dispatch(remove(product.id))}>Remove</button>
                                    </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>

                </main>

                <aside className="row col-4">
                    <div className="card w-75 h-25 ms-3">
                        <h4 className="card-header">Your Cart Summary</h4>
                        <div className="card-body">
                        <p>Total items: {productCart.length}</p>
                        <p>Total Amount: {totalAmount}</p>
                        </div>
                        <div className="card-footer">
                        <button className="btn btn-warning w-100">Place Order</button>
                        </div>
                        </div>
                </aside>


            </div>
            ):(
                <div className="d-flex justify-content-center align-items-center text-center" style={{height:"80vh"}}>
                    <div>
                        <div className="cart-empty mb-2"><span className="bi bi-cart-x"></span></div>
                        <h4 className="text mt-2">Your Cart is Empty <span className="bi bi-emoji-frown"></span></h4>
                       <Link to="/"><button className="btn btn-primary w-100 mt-2">Shop Now</button></Link> 
                    </div>
                </div>
            )
        }
        </>
    )
}


export default Cartitems