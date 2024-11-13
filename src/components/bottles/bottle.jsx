export default function Bottle({bottle}) {
    // console.log(bottle);
    let {strDrink,strDrinkThumb,strInstructions} =bottle
    console.log(strDrink)

    return (

        
        <div style={{ backgroundColor:'#8080801f',margin:'10px',borderRadius:'10px',padding:'10px'}}>
           <h3>Name:{strDrink}</h3>
           <img src={strDrinkThumb} width="150px" alt="" />
           <p>{strInstructions}</p>
        </div>
    );
}
