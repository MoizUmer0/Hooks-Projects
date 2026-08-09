import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
export default function StarRating({noOfStars}){
    const [rating,setRating] =useState(0)
    const [hover,setHover] = useState(0)

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
        
    }
    function handleMouseEnter(getCurrentIndex){
        setRating(getCurrentIndex)
    }
    function handleMouseLeave(getCurrentIndex){
        setHover(0)
    }
    return(
        <div className='flex justify-center gap-1'>
            {
                [...Array(noOfStars)].map((_,index)=>{
                    index+=1
                    return (
                    <FaStar size={40}
                        key={index}
                        className={`cursor-pointer ${index <= (hover || rating )?"text-yellow-400":"text-gray-400"}`}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    />
                    ) 
                })
            }
        </div>
    )
}