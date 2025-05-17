import { NavLink, Outlet } from "react-router-dom";
import {   useLoaderData } from "react-router-dom";
import Heading from "../Heading/Heading";
import Hero from "../Hero/Hero";
const Home = () => {
    const categorie = useLoaderData();
    
    return (
        <div>
            <Hero></Hero>
            <Heading title={'Browse Coffees By Category'} subTitle={'Choose Your Coffee'} ></Heading>
            <div>

                <div role="tablist" className="tabs mb-10 font-bold items-center md:text-2xl tabs-lift justify-around ">
                    {
                        categorie.map(data=><NavLink key={data.category} to={`/coffee/${data.category}`}>{data.category}</NavLink>)
                    }
                  
                </div>
            </div>
           
             <Outlet />
        </div>
    );
};

export default Home;