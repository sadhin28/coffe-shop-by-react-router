
import { useState } from 'react';
import Heading from '../Heading/Heading';
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
    const [addCoffee,setaddCoffee]=useState([]);
    const allCoffee=useLoaderData();
    return (
        <div>
           <div className='mt-10'> <Heading
             title={"Welcome to Dashboard"}
             subTitle={"Manage Coffe that that you have prviously added as favorive,You can view or remove them from here"}></Heading>
            </div>
        </div>
    );
};

export default Dashboard;