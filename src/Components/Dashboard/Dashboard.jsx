import { useLoaderData } from 'react-router-dom';
import Heading from '../Heading/Heading';
import { useEffect, useState } from 'react';
import { getStoredReadList } from '../Utility/addlocal';
import Card from '../Card/Card';
import DashboardCard from '../DashboardCard/DashboardCard';


const Dashboard = () => {
   const allcoffee = useLoaderData();
   const [addcoffee,setaddcoffee]=useState([])
   console.log(addcoffee)
   console.log(allcoffee)
   useEffect(()=>{
     const storedCoffee = getStoredReadList();
     const storedCoffeeint = storedCoffee.map(id=>parseInt(id));
     const coffeelist = allcoffee.filter(c=>storedCoffeeint.includes(c.id))
     setaddcoffee(coffeelist)
   },[])

   const DeleteCard=(id)=>{
       const removingCard =
     }
    return (
        <div>
           <div className='mt-10'> <Heading
             title={"Welcome to Dashboard"}
             subTitle={"Manage Coffe that that you have prviously added as favorive,You can view or remove them from here"}></Heading>
            </div>
            <div className='mt-10 mb-10 grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                  addcoffee.map(datas=><DashboardCard DeleteCard={DeleteCard} key={datas.id} datas={datas}></DashboardCard>)
                }
            </div>
        </div>
    );
};

export default Dashboard;