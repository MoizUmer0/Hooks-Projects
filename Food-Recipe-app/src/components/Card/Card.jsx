import { Link } from "react-router-dom"
export default function Card({items}){
    return(
<div>
            <div className="p-9 bg-gray-300 border-gray-100 rounded-lg  shadow w-full max-w-sm m-20 ">
        <img 
        className="w-full h-48 object-cover rounded-xl"
        src={items?.image_url} alt="" />
        <h1 className="text-sm text-gray-900 font-medium mt-6   ">{items?.publisher}</h1>
        <p className="mt-2 text-xl ">{items?.title}</p>
        <Link 
        className="mt-4 text-sm p-4 px-8 rounded-lg  uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        to={`/details/${items?.id}`}>Recipie Details</Link>
       </div>
</div>
    )
}