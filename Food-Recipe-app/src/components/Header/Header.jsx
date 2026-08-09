    import { useContext } from "react"
    import { NavLink } from "react-router-dom"
    import UserContext from "../context/UserContext/userContext"
  
    export default function Header(){
        const {search,setsearch,handleSubmit} = useContext(UserContext)
        return(
            <div className="bg-gray-300">
                    <div className="flex justify-between p-4">
                    <h1 className="font-bold text-2xl">FoodRecipe</h1>
                    <form onSubmit={handleSubmit} className="w-1/3">
                    <input 
                    className="bg-gray-900 text-white rounded-lg w-full p-2"
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e)=>setsearch(e.target.value)}
                    
                    />
                    </form>
                    <ul className="flex gap-10 font-bold text-1xl mt-2">
                        <li>
                            <NavLink to=''>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='favourite'>
                                Favourite
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }