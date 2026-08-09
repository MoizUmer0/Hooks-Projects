    import { useEffect, useState } from "react"


    export default function RandomColor(){
        const [typeOfColor,setTypeOfColor] = useState('hex')
        const [color,setColor] = useState('#000000')

        function randomColorUtility(length){
            return Math.floor(Math.random()*length)
        }
        function handleCreateRandomhexColor(){
            const hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
            let hexColor="#"

            for(let i=0;i<6;i++){
                hexColor +=hex[randomColorUtility(hex.length)]
            }
            setColor(hexColor)
        }
        function handleCreateRandomrgbColor(){
           const r =randomColorUtility(256)
           const g =randomColorUtility(256)
           const b =randomColorUtility(256)

           setColor(`rgb(${r},${g},${b})`)
        }
        useEffect(()=>{
            if(typeOfColor==='rgb') handleCreateRandomrgbColor()
            else handleCreateRandomhexColor()
        },[typeOfColor])

        return(
            <div  style={{
                width:'100vw',
                height:'100vh',
                background: color
            }}>
                <div  className="flex justify-center gap-2">
                <button onClick={()=>setTypeOfColor('hex')} className=" bg-white ">Generate Hex color</button>
                <button onClick={()=>setTypeOfColor('rgb')} className=" bg-white "> Generate RGB color</button>
                <button onClick={typeOfColor==='hex' ?handleCreateRandomhexColor:handleCreateRandomrgbColor}   className=" bg-white ">Geberate Random color</button>
                </div>

                <div className="flex justify-center items-center text-3xl mt-10 font-bold text-white">
                    <h3>{typeOfColor==='rgb'?' RGB Color':'HEX Color'}</h3>
                    <h1>{color}</h1>
                </div>

            </div>
        )
    }