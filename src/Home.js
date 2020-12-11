import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"/>
            <div className="home__row">
                <Product
                    id="1"
                    title="Apple"
                    price={17}
                    rating={5}
                    image="https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg"
                />
                <Product
                    id="1"
                    title="Apple"
                    price={17}
                    rating={5}
                    image="https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg"
                />

            </div>
        </div>    
    )
}

export default Home
