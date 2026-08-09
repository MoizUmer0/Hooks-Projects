import Card from "../Card/Card";
import UserContext from "../context/UserContext/userContext";
import { useContext } from "react";
export default function Favourite(){
     const {Favourite} = useContext(UserContext)
    return(
          <div>
            <div className="grid grid-cols-3 justify-evenly">
                {Favourite && Favourite.length> 0? Favourite.map((items)=>(<Card 
                key={items.id}
                items={items}
                />)):<p className="text-4xl text-center text-black font-bold">Nothing to Show .Please Add something to Favourites</p>}
            </div>
        </div>
    )
}

