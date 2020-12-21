import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Pizzaman from '../assests/Pizzaman.png';

export default function Checkout( {ingredients} ) {

    const history = useHistory();
    const [ success, setSuccess] = useState(false)
    return (
            <div style={{display:'flex' }}>
            <div>
                <div style={{paddingLeft: 90,paddingTop: 10}}>
                <h1>My Ingredients</h1>
                {Object.keys(ingredients).map((ingredient)=>{
                    return (
                        ingredients[ingredient] && (
                    <p>
                    {ingredient[0].toUpperCase()}
                    {ingredient.substr(1)}
                    </p>)
                ); 
            })}
            <button className="proceedToCheckout" style={{marginLeft: 10}} onClick={()=>setSuccess(true)}>Confirm</button>
            <button className="proceedToCheckout" style={{marginLeft: 10}} onClick={()=>history.push("/")}>Go Back</button>
            </div>
            </div>
            <div>
                {success &&(
                    <div style={{ textAlign: "center",paddingLeft: 40}}>
                        <img src={Pizzaman} alt="pizzaman" height="400px" />
                    <div style={{ fontFamily: "Open Sans Condensed",fontSize: 30 }}>
                        We Have Received your order, Thank you!
                    </div>
                    <div style={{ fontFamily: "Comfortaa" }}>
                        Order #{Math.round(Math.random() * 100000)}
                    </div>
                    <div style={{ fontFamily: "Indie Flower",fontSize: 20}}>
                        Will be ready in 20-30 mins
                </div>
                </div>
                )}
            </div>
        </div>
    );
}
