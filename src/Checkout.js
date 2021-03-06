import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import CurrencyFormat from "react-currency-format"

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://selfpublishingadvice.org/wp-content/uploads/2019/05/How-to-Set-Up-an-Amazon-UK-Advertising-Account-1-1024x427.jpg" alt="" />
            
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is emty</h2>
                        <p>You have no items in your basket. To buy one or more
                            items, click "Add to basket" next to the item.
                        </p>
                    </div>

                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                        
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                    {/* <h1>Subtotal</h1> */}
                </div>
            )}

        </div>
    )
}

export default Checkout
