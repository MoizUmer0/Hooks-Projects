import { useState } from "react";

export function Auto(){
        const [search,setsearch] = useState("")
        const [suggestion,setsuggestion] =useState([])


    function handleClick(search){
            setsearch(search)
        if(search.trim()===""){
             setsuggestion([])
            return
            }
        fetch(`https://dummyjson.com/users?q=${search}`)
        .then(res => res.json())
        .then((suggestion)=>{
        const filtered = suggestion.users.filter(user =>
            user.firstName.toLowerCase().startsWith(search.toLowerCase())
            )     
            console.log(filtered)
            setsuggestion(filtered)
        });
    }
    return(
        <div className="flex justify-center">
            <div className="relative w-80">
                <input 
                 className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                 type="text"
                 placeholder="Enter name"
                 value={search}
                 onChange={(e)=>handleClick(e.target.value)}
                
                />
                <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md">
                {suggestion.map((items,index)=>{
                    return(
                <div 
                     key={index}
                     onClick={()=>{
                        setsearch(items.firstName)
                        setsuggestion([])
                     }
                     }
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                     >
                        {items.firstName}
               </div>
                    )
                })}
            </div>
            </div>

        </div>
    )
}