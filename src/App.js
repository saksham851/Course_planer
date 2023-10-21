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
    <div>
    <div>
      <Navbar/>
    </div>
    <div>
    <Filter filterData={filterData}/>
    </div> 
    <div>
      {
        loading ? (<Spinner/>) : (<Cards courses={courses}/>)
      }
    </div>
    </div>
  )
};

export default App;
