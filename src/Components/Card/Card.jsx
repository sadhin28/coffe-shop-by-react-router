
import { Link } from 'react-router-dom';

const Card = ({ data}) => {
 
    const {image,name,ingredients,description}=data
    
    return (
        <div>
            <div className="card flex hover:translate-2.5 hover:transform-border bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        className=''
                        src={image}
                        alt="Shoes" />
                        
                </figure>
                <div className="card-body">
                   <div className='flex items-start'>
                       <h2 className="card-title">
                        {name}
                        <div className='flex flex-wrap gap-2'>
                            {
                            ingredients.map(data=><small><div className="badge badge-secondary ">{data}</div></small>)
                        }
                        </div>
                    </h2>
                   </div>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link  className='badge btn badge-outline'>Add To Card</Link>
                      
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;