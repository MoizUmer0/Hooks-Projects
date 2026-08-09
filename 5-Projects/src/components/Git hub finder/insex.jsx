import { useState } from "react"

export function GitHubFinder(){
    const [search,setsearch] = useState("")
    const [data,setdata] = useState({})

    function handleClick(){
        fetch(`https://api.github.com/users/${search}`)
        .then(response =>response.json())
        .then(data=>{
            setdata(data)
        })
    }
    return(
        <div className="min-h-screen">
        <div className="flex justify-center items-center">
            <input 
            className="bg-gray-900 text-white w-1/3 p-2 rounded-lg"
            type="text" 
            placeholder="Enter the name"
            value={search}
            onChange={(e)=>setsearch(e.target.value)}
            />
            <button  onClick={handleClick} className="bg-black text-white rounded-lg p-2 m-4">Search</button>
            </div>
            <div className=" w-5/6  mx-auto border-2 border-amber-300 ">
                <div>
                    <img src={data.avatar_url} alt="" />
                </div>
                <div className="font-bold text2xl flex justify-center gap-4 mt-10"> 
                    <a href={data.html_url}>Visite your github Profile</a>
                    <p>User joined on {data.created_at}</p>
                </div>
                    <div className="flex flex-col items-center">
                    <ul className="font-bold text-2xl space-y-5">
                        <li>Public Repos{data.public_repos}</li>
                        <li>Followers {data.followers}</li>
                        <li>Following {data.following}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}