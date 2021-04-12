import React from 'react'

import './Home.css'
import Product from './Product.js'

function Home() {
    return (
        <div className="Home">
            <img 
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="img" />

            <div className="home__row">
                <Product 
                    id="12345"
                    title="Heimvision Sunrise Alarm Clock, Smart Wake up Light Work with Alexa, Sleep Aid Digital Alarm Clock with Sunset Simulation"
                    price={33.98}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61o-DHjEdyL._AC_SL1000_.jpg"
                />
                <Product 
                    id="12345345"
                    title="Carfidant Scratch and Swirl Remover - Ultimate Car Scratch Remover - Polish & Paint Restorer"
                    price={16.54}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/716%2BJDSRMWL._AC_SL1500_.jpg"
                />
            </div>
                
            <div className="home__row">
                <Product 
                    id="1236787645"
                    title="SURKER Beard Trimmer for Men Hair Clippers Body Mustache Nose Hair Groomer"
                    price={28.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61NrVWmPq%2BL._AC_SL1001_.jpg"
                />
                <Product 
                    id="12789345"
                    title="TaoTronics Tower Fan Oscillating Fan Powerful Floor Fan with Remote and Large LED Display"
                    price={63.77}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61-EBPWho9L._AC_SL1300_.jpg"
                />
                <Product 
                    id="12543345"
                    title="COSORI Air Fryer Max XL(100 Recipes) Electric Hot Oven Oilless Cooker LED Touch Digital Screen"
                    price={99.98}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71p5GSQ-BVL._AC_SL1500_.jpg"
                />
            </div>
            
            <div className="home__row">
                <Product 
                    id="178662345"
                    title="Laptop Cooling Pad, Lamicall Laptop Cooler : Portable Slim Laptop Cooling Stand Holder Riser with 5 Fans"
                    price={25.49}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/711skY0rhqL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
