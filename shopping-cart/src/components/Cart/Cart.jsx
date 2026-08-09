import { useSelector } from "react-redux"
import { Card } from "../Card/Card"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Cart() {
    const [total, settotal] = useState(0)
    const cart = useSelector(state => state.cart)

    useEffect(() => {
        settotal(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])
    console.log(total)
    return (
        <div className="min-h-[80vh] max-w-6xl mx-auto p-3">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    cart && cart.length ? (
                        cart.map(items => <Card
                            key={items.id}
                            items={items}
                        />))
                        : (
                            <div className="min-h-[80vh] flex flex-col justify-center items-center col-span-full">
                                <h1 className="text-gray-800 font-bold text-xl mb-2">Your cart is empty</h1>
                                <Link to='/'>
                                    <button
                                        className="bg-gray-900 text-white border-2 rounded-lg font-bold p-4"
                                    >
                                        SHOP NOW
                                    </button>
                                </Link>

                            </div>
                        )
                }

            </div>
             {
            cart.length > 0 && (
                <div className="mt-10 border-2 border-gray-300 rounded-xl p-6">
                    <h2 className="text-2xl font-bold">
                        Cart Summary
                    </h2>

                    <p className="mt-3">
                        Total Items: {cart.length}
                    </p>

                    <p className="mt-2 font-bold">
                        Total Price: ${total.toFixed(2)}
                    </p>

                    <button className="mt-5 bg-gray-900 text-white rounded-lg font-bold p-3">
                        Checkout
                    </button>
                </div>
            )
        }

        </div>
    )
}