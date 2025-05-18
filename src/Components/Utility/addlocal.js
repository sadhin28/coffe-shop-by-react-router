import {  toast } from 'react-toastify';
const getStoredReadList =()=>{
    const storedListr=localStorage.getItem('coffee-list')
    if(storedListr){
        const storedList = JSON.parse(storedListr);
        return storedList;
    }
    else{
        return [];
    }
}   

const addToStoredReadList=(id)=>{
    console.log(id)
    const storedList = getStoredReadList();
    if(storedList.includes(id)){

        toast.error(`This Coffee alrady exists in the Dashboard`)
    }
    else{
        storedList.push(id);
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('coffee-list',storedListstr)
        toast.success('Add To card The Coffee')
    }
}
export {addToStoredReadList,getStoredReadList}