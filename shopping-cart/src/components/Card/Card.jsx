import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeFromCart } from '../../app/cart-slice'
export function Card({items}){
        const dispatch = useDispatch()
        const cart = useSelector(state=>state.cart)
        function handleAddToCart(){
            dispatch(addToCart(items))
        }
        function handleRemoveFromCart(){
            dispatch(removeFromCart(items.id))
        }
    return(
        
        <div>
            <div className="group flex flex-col items-center border-2 border-gray-300 gap-3 p-4 h-90 mt-10 ml-5 rounded-xl">
                <div className="h-45">
                    <img src={items?.image} alt={items?.title} 
                    className="object-cover h-full w-full"
                    />
                </div>
                <div>
                    <h1 className="w-40 truncate mt-3 font-bold text-lg text-gray-700 ">{items?.title}</h1>
                </div>
                <div className="flex items center justify-center w-full mt-5">
                    <button 
                    onClick={ cart.some(item=>item.id === items.id)?handleRemoveFromCart:handleAddToCart}
                    className="bg-gray-900 text-white border-2 rounded-lg font-bold p-4">
                        {
                            cart.some(item=>item.id === items.id) ?'Remove from cart' : 'Add to Cart'
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}