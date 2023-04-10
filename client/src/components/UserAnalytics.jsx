import React,{useEffect,useState} from 'react'
import { getTotalUsers,getActiveUsers } from '../redux/authRedux/action';
import {useDispatch} from "react-redux";



const UserAnalytics = () => {
  const dispatch=useDispatch()
  const [totalUsers,setTotalUsers]=useState(0);
  const [activeUsers,setActiveUsers]=useState([])

useEffect(()=>{
 dispatch(getTotalUsers()).then((res)=>{
  setTotalUsers(res.payload.total)
 })
 dispatch(getActiveUsers()).then((res)=>{
   setActiveUsers(res.payload.active)
 })
},[])

 console.log("total",totalUsers)
 console.log("active",activeUsers)

  return (
    <div>
     <h3>No of Users</h3>
     <div>
      <p>Total Users : {totalUsers}</p>
      <h4>Active Users</h4>
      {
        activeUsers && activeUsers.map((ele)=>{
          return <div style={{border:"1px solid gray",borderRadius:"8px",padding:"10px"}}>

             <p>UserId : {ele._id}</p>
          </div>
        })
      }
     </div>
    </div>
  )
}

export default UserAnalytics