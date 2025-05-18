const getStoredReadList =()=>{
    const storedListr=localStorage.getItem('read-list')
    if(storedListr){
        const storedList = JSON.parse(storedListr);
        return storedList;
    }
    else{
        return [];
    }
}   

const addToStoredReadList=(id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){

        alert(`This Book alrady exists in the read List`)
    }
    else{
        storedList.push(id);
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListstr)
        alert('Listed The Book')
    }
}
export {addToStoredReadList,getStoredReadList}