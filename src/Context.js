import React from "react";
import { useContext, useEffect, useState} from "react";
export const API_URL=`https://randomuser.me/api/?results=10`;

const AppContext = React.createContext();

const AppProvider =({children})=> {
    const [IsLoading, setIsLoading]=useState(true);
    const [user,setUser]=useState([]);
    const getUsers= async(url)=>{
        try{
            const res= await fetch(url);
            const data= await res.json();
            console.log(data);
            setUser(data.results);
            setIsLoading(false);
    
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=> {
        getUsers(API_URL);
    },[])
return <AppContext.Provider value={{IsLoading,user}} >{children}</AppContext.Provider>;
};
const useGlobalContext=()=>{
    return useContext(AppContext);
} 
export {AppContext,AppProvider,useGlobalContext};