import { createContext } from "react";
import { useState } from "react";
const UserContext =createContext()


export const UserContextProvider = (({children})=>{
    const [search,setsearch] = useState("")
    const [recipes,setrecipes] = useState([])
    const [RecipieDetails,setRecipieDetails] = useState("")
    const [Favourite,setfavourite] = useState([])


        async function handleSubmit(e) {
    try {        
        e.preventDefault()
        const response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${search}`)
        const data =  await response.json()
        if(data?.data?.recipes){
            setrecipes(data?.data?.recipes)
            setsearch('')
        }
    }
 catch (e) {
    console.log(e)
                setrecipes(data?.data?.recipes)
            setsearch('')
} }
    function handleAddtoFavourite(getCurrentItem){
        console.log(getCurrentItem)
        let cpyFavouriteList = [...Favourite];
        const index =cpyFavouriteList.findIndex(item=>item.id === getCurrentItem.id)
        if(index === -1){
            cpyFavouriteList.push(getCurrentItem)
        }
        else{
            cpyFavouriteList.splice(index)
        }
        setfavourite(cpyFavouriteList)
    }
    return(
        <UserContext.Provider value={{search,setsearch,handleSubmit,recipes,setrecipes,RecipieDetails,setRecipieDetails,handleAddtoFavourite,Favourite}}>
            {children}
        </UserContext.Provider>
    )
})
export default UserContext