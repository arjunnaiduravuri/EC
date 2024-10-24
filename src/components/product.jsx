import { useDispatch,useSelector } from 'react-redux'
import { add,remove } from '../store/slice'
function Product({item}) {
    console.log("product",item)
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart); // Assuming your cart state structure has an array of items

    const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);


    function addtocart(){
        dispatch(add(item))

    }
    function removecart(){
        dispatch(remove(item.id))
    }

    return (
        <>
        
            <div className='card product m-2 p-2 w-25 bg-secon text-secondry' key={item.id}>
                <img src={item.image} alt="" className='image card-image-top ms-5' height="150px" width='150px' />
                <div className='card-header'>
                    <p className='card-title'>{item.title}</p>

                </div>
                <div className='card-body'>
                    <dl>
                        <dt>Price</dt>
                        <dd>${item.price}</dd>
                        <dt>Rating</dt>
                        {/* <dd><span className='bi bi-star-fill'>{item.rating.rate}</span></dd> */}
                    </dl>
                </div>
                <div className='card-footer'>
                   {
                    isItemInCart?(
                        <button className='btn  w-100 p-2 text-dark' onClick={removecart}>Remove From Cart <span className='bi bi-trash'></span> </button>

                    ):(
                        <button className='btn btn-primary w-100 p-2 text-white' onClick={addtocart}><span className='bi bi-cart4'></span> Add to Cart </button>
                     ) 
                   }
                </div>

            </div>
            
        </>
    )
}
export default Product