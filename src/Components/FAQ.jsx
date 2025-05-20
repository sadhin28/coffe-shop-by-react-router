import { useEffect, useState } from "react";
import DataFaq from "./DataFaq";

const FAQ = () => {
    const [faq,setfaq]=useState([])
    console.log(faq)
    useEffect(()=>{
        fetch('faq.json')
        .then(res=>res.json())
        .then(data=>setfaq(data))
    },[])
    return (
        <div>
            <h1 className="text-center font-bold text-2xl ">FAQ </h1>
            <div className="mt-5 grid gap-2">
                {
                    faq.map(faq=><DataFaq faq={faq}></DataFaq>)
                }
            </div>
        </div>
    );
};

export default FAQ;