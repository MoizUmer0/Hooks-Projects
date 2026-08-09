import { use, useEffect, useState } from "react"
import { Circles } from "react-loader-spinner";
import { Card } from "../Card/Card";


export function Home(){
    const [Product,setProduct] = useState([])
    const [loading,setloading] = useState(false)
    
    async function fetchListOfProducts(){
        try {   setloading(true)
                const response = await fetch(`https://fakestoreapi.com/products`)
                const data = await response.json()
                console.log(data)
                if(data){
                    setloading(false)
                    setProduct(data)
                }
        } catch (e) {
            console.log(e)
            setloading(false)
        }
    }

    useEffect(()=>{
            fetchListOfProducts()
    },[])
    return(
       <div>{
           ( loading ? <div className="min-h-screen w-full flex justify-center items-center">
                    <Circles
                        height={'120'}
                        width={'120'}
                        color="rgb(127,29,29)"
                        visible={true}
                    />
            </div>:
            <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3">
                {
                    Product && Product.length ? 
                    Product.map(items => <Card 
                    key={items.id}
                        items={items}
                    />)
                    
                    :null
                }

            </div>
)
        }</div>
    )
}