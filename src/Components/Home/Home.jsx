
import { Link, useLoaderData } from "react-router-dom";
import Heading from "../Heading/Heading";
import Hero from "../Hero/Hero";
const Home = () => {
    const categorie = useLoaderData();
    
    return (
        <div>
            <Hero></Hero>
            <Heading title={'Browse Coffees By Category'} subTitle={'Choose Your Coffee'} ></Heading>
            <div>

                <div role="tablist" className="tabs tabs-lift justify-between ">
                    {
                        categorie.map(data=><P data={data.category}></P>)
                    }
                  
                </div>
            </div>
        </div>
    );
};

export default Home;