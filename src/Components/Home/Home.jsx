import { Outlet } from "react-router-dom";
import {  Link, useLoaderData } from "react-router-dom";
import Heading from "../Heading/Heading";
import Hero from "../Hero/Hero";
const Home = () => {
    const categorie = useLoaderData();
    
    return (
        <div>
            <Hero></Hero>
            <Heading title={'Browse Coffees By Category'} subTitle={'Choose Your Coffee'} ></Heading>
            <div>

                <div role="tablist" className="tabs mb-10  tabs-lift justify-around ">
                    {
                        categorie.map(data=><Link key={data.category} to='/card'>{data.category}</Link>)
                    }
                  
                </div>
            </div>
           
             <Outlet />
        </div>
    );
};

export default Home;