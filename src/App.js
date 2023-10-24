import React, { useEffect, useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { toast } from "react-toastify";

const App = () => {
   const [courses,setCourses]=useState(null);
   const [loading,setLoading]=useState(true);
     
   // function for api call....
    async function fetchData(){
      setLoading(true);
      try {
        let response=await fetch(apiUrl);
        let output=await response.json();
        //save data into a variable 
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    
    useEffect(()=>{
      fetchData();
    },[])

  return (
    <div className="min-h-screen flex flex-col">
    <div>
      <Navbar/>
    </div>
    <div className="bg-bgDark2">
    <div>
    <Filter filterData={filterData}/>
    </div> 
    <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading ? (<Spinner/>) : (<Cards courses={courses}/>)
      }
    </div>
    </div>
    </div>
  
  );
};

export default App;
