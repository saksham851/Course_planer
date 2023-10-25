import React, { useState } from 'react'
import Card from './Card';
const Cards = (props) => {
    let courses=props.courses;
    let category=props.category;
    const[likedCourses,setLikedCourses]=useState([]);
    
    //returns you a list of all courses recieved from api response 
  function getCourses()
{
  if(category === "All")
  {
    let allCourses=[];
    Object.values(courses).forEach((courseCategory)=>{
        courseCategory.forEach((courseData)=>{
          allCourses.push(courseData);
        })
    })
    return allCourses;
  }
  else{
    //main sirf specify category array pass karunga
    return courses[category];
  }
}

  return (
    <div className='flex flex-wrap justify-center mb-4 gap-4'>
     {getCourses().map((course) => {
       return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
      })}
    </div>
  )
}

export default Cards
