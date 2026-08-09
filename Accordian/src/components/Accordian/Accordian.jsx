import { useState } from "react"
import { use } from "react"
import data from "./data"

export default function Accordian(){
    const [seleted,setSelected] = useState("")
    const [enable,setenable] = useState(false)
    const [multi,setmulti] = useState([])

    function handleSingleSelection(getCurrentId){   
            setmulti("")

            setSelected(getCurrentId === seleted ?null:getCurrentId)
    }
    function handleMultiSelection(getCurrentId){
            let cpuMultiple =[...multi]
            const findIndexofId = cpuMultiple.indexOf(getCurrentId)
            if(findIndexofId === -1) cpuMultiple.push(getCurrentId)
            else cpuMultiple.splice(findIndexofId,1)
            setmulti(cpuMultiple)    
    }
    console.log(seleted,multi)
    return(
        <div className="min-h-screen flex flex-col justify-center items-center">
                    <button onClick={()=>setenable(!enable)}
                     className="bg-cyan-900 text-white font-bold p-3 rounded-lg mb-6">Enable Multi Seclection</button>
            <div className="w-[500px]">
                {
                    data && data.length ?(data.map(dataItem => <div className="item bg-cyan-900 mb-5 p-5">
                        <div onClick={enable?()=>handleMultiSelection(dataItem.id):()=>handleSingleSelection(dataItem.id)} className="text-2xl text-white font-bold flex justify-center items-center">
                            <h3>{dataItem.question}</h3>
                            {/* <span>+</span> */}
                        </div>
                        {
                            seleted === dataItem.id || multi.indexOf(dataItem.id) !== -1? <div className="text-white">{dataItem.answer}</div>:null
                        }
                    </div>)):(<div>No Data Found</div>)
                }
            </div>
        </div>
    )
}