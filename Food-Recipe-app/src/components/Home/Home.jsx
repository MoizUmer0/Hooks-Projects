import Card from "../Card/Card";
import UserContext from "../context/UserContext/userContext";
import { useContext } from "react";

export default function Home(){
    const {recipes,setrecipes} = useContext(UserContext)
    

    return (
        <div>
            <div className="grid grid-cols-3 justify-evenly">
                {recipes && recipes.length> 0? recipes.map((items)=>Card (items={items})):<p className="">Nothing to Show .Please search Something</p>}
            </div>
        </div>
    )
}