import { useParams } from "react-router-dom";

const CoffeeCard = () => {
    const obj = useParams()
    console.log(obj)
    return (
        <div>
            <h1>Coffe Cards......{obj.category}</h1>
        </div>
    );
};

export default CoffeeCard;