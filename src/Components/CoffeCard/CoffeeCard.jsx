import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";

const CoffeeCard = () => {

    const coffeecard = useLoaderData();
    
    console.log(coffeecard)
    const obj = useParams()
    console.log(obj)
    const coffee=   coffeecard.filter(data=> data.category === obj.category);
    console.log(coffee)
    return (
        <div>
            <h1 className="font-bold  text-center  mb-10 text-2xl">{obj.category}</h1>
           <div className="grid mb-10 gap-10 justify-items-center md:grid-cols-2 lg:grid-cols-3">
               {
              coffee.map(data=><Card data={data}></Card>)
              }
           </div>
        </div>
    );
};

export default CoffeeCard;