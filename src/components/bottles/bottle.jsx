import { useState } from "react";

export default function Bottle({bottle,btn}) {
    // console.log(bottle);
    let {strDrink,strDrinkThumb,strInstructions} =bottle
    // console.log(btn)

    return (

        
        <div style={{ backgroundColor:'#8080801f',margin:'10px',borderRadius:'10px',padding:'10px',textAlign:'left'}}>
           <img src={strDrinkThumb} width="100%" alt="" />
           <h3>Name:{strDrink}</h3>
           <p >{strInstructions.slice(0,50)}...</p>
           <button onClick={()=>btn(bottle)}>Purchase</button>
        </div>
    );
}
