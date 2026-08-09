import { useContext, useEffect } from "react"
import UserContext from "../context/UserContext/userContext"
import { useParams } from "react-router-dom"

export default function Details(){
    const {RecipieDetails,setRecipieDetails,handleAddtoFavourite,Favourite} =useContext(UserContext)
    const {id}= useParams()
    console.log(id)

    useEffect(()=>{
        async function GetRecipieDetails(){
            const response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`)
            const data = await response.json()
            if(data?.data){
                setRecipieDetails(data?.data)
            }
        }
        GetRecipieDetails()
    },[])
    return(
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto"> 
            <div className="h-96 overflow-hidden rounded-xl group">
                <img 
                className="w-full h-AUTO object-contain block"
                src={RecipieDetails?.recipe?.image_url} alt="" />
            </div>
        </div>
        <div>
        <h1 className="text-sm text-gray-900 font-medium mt-6   ">{RecipieDetails?.recipe?.publisher}</h1>
        <p className="mt-2 text-xl ">{RecipieDetails?.recipe?.title}</p>
        <button onClick={()=>handleAddtoFavourite(RecipieDetails?.recipe)} 
        className="bg-black text-white p-3 mt-4 rounded-lg shadow-md font-medium mb-4">{
            Favourite.findIndex(item=>item.id === RecipieDetails?.recipe?.id)!==-1?'Remove from Favourite' :'Add to Favourites'
        }</button>
        <div>
            <span className="text-2xl font-semibold text-black">Ingredients:</span>
            <ul className="flex flex-col gap-3">
                {
                    RecipieDetails?.recipe?.ingredients.map(ingredients => <li>
                        <span className="text-2xl font-semibold text-black">{ingredients.quantity} {ingredients.unit}</span>
                        <span className="text-2xl font-semibold text-black">{ingredients.description}</span>
                    </li>)
                }
            </ul>
        </div>
        </div>

    </div>        
    )
}