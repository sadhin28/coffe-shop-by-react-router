import { MdDeleteForever } from "react-icons/md";

const DashboardCard = ({datas,DeleteCard}) => {
     
     const {image,name,id,ingredients,description}=datas;
     
    return (
      <div className='flex'>
        <div className="text-5xl relative left-100 bottom-5 text-red-600 z-50">
                    <MdDeleteForever onClick={()=>DeleteCard(id)} />
            </div>
            <div className="card   hover:transform-border bg-base-100 w-96 shadow-sm">
                
                <figure>
                    <img
                        className='h-70 w-full'
                        src={image}
                        alt="Shoes" />
                        
                </figure>
                <div className="card-body flex-col">
                   <div className='flex flex-grow items-start'>
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
                    
                </div>
            </div>
        </div>
    );
};

export default DashboardCard;