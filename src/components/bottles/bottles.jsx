import { useEffect, useState } from "react";
import Bottle from "./bottle";

export default function Bottles() {
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

    return (
        <div>
            <h3>Drinks here</h3>

            <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
           
        }}>

            {
                count.map((res, index) => (
                    <Bottle bottle={res} key={index} />
                ))
            }


            </div>

                    </div>
    );
}
