import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Heading from "../Heading/Heading";
import Hero from "../Hero/Hero";
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Heading title={'Browse Coffees By Category'} subTitle={'Choose Your Coffee'} ></Heading>
            <div>
              
                <Tabs>
                    <TabList>
                        <Tab>Browse Coffee</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
              
            </div>
        </div>
    );
};

export default Home;