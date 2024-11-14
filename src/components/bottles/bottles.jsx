import { useEffect, useState } from "react";
import Bottle from "./bottle";

export default function Bottles({bottle}) {
    const [count, setCount] = useState([]); 

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(res => res.json())
            .then(data => {
                // console.log(data.drinks)
                setCount(data.drinks || []); // Set count to data.drinks array, or an empty array if drinks is undefined
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

   
    let [cart,setCart]=useState([])
    
    


    function purchaseBtn(bottle){
        console.log('added purchase btn')
        // console.log(typeof bottle)
        // console.log(bottle)
        // setBottle(bottle);
        
        let addingCart=[...cart,setCart];
        setCart(addingCart);
        
    }
    
   

    return (
        <div>
            <h3>Drinks here</h3>
            <div style={{
                display:'flex',justifyContent:'flex-end'
            }}><button style={{backgroundColor:'orange'}}>Cart:{cart.length}</button></div>

            <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(4,1fr)',
           
        }}>

            {
                count.map((res, index) => (
                    <Bottle btn={purchaseBtn} bottle={res} key={index} />
                ))
            }


            </div>

                    </div>
    );
}
