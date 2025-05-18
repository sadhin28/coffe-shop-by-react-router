
import { useEffect, useState } from 'react';
import Heading from '../Heading/Heading';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList } from '../Utility/addlocal';
import Card from '../Card/Card';

const Dashboard = () => {
    const [addCoffee,setaddCoffee]=useState([]);
    const allCoffee=useLoaderData();
    console.log(addCoffee)
    useEffect(()=>{
        const storeCoffee=getStoredReadList();
        const storeCoffeList 
    },[])
    return (
        <div>
           <div className='mt-10'> <Heading
             title={"Welcome to Dashboard"}
             subTitle={"Manage Coffe that that you have prviously added as favorive,You can view or remove them from here"}></Heading>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Dashboard;