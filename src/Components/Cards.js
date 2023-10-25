import React, { useState } from 'react'
import Card from './Card';
const Cards = (props) => {
    let courses=props.courses;
    const[likedCourses,setLikedCourses]=useState([]);
    
    //returns you a list of all courses recieved from api response 
  function getCourses()
{
  let allCourses=[];
   Object.values(courses).forEach((courseCategory)=>{
       courseCategory.forEach((courseData)=>{
         allCourses.push(courseData);
       })
   })
   return allCourses;
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
