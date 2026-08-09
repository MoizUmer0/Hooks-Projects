import { NavLink } from "react-router-dom";
import { Home } from "../Home/Home";
import { Cart } from "../Cart/Cart";

export function Navbar(){
    return(
        <>
        <div className=" bg-gray-300">
                <div className="flex justify-between p-4 text-2xl font-bold"> 
                <h1>Shoppping cart redux toolkit</h1>
                <ul className="flex  gap-14"> 
                    <li>
                        <NavLink to=''>
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='cart'>
                        Cart
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}