import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Coffes = () => {
    const data =useLoaderData()
    return (
        <div className='mt-10 mb-10 grid  justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            data.map(data=><Card data={data}></Card>)
          }
        </div>
    );
};

export default Coffes;