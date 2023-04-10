import React,{useState,useEffect} from 'react'
import {useDispatch} from "react-redux";
import { getTotalPosts,getMostLikedPosts } from '../redux/appRedux/action';

const PostAnalytics = () => {
  const dispatch=useDispatch()
  const [totalPost,setTotalPost]=useState(0);
  const [mostLiked,setMostLiked]=useState([])

  useEffect(()=>{
   dispatch(getTotalPosts()).then((res)=>{
    setTotalPost(res.payload.total)
   })

   dispatch(getMostLikedPosts()).then((res)=>{
     setMostLiked(res.payload.topLiked)
  })
  },[])


  return (
    <div>
    <h3>User Analytices</h3>
    <div>
     <p>Total Posts : {totalPost}</p>
     <h3>Most Liked</h3>
     {
       mostLiked && mostLiked.map((ele)=>{
        return <div style={{border:"1px solid gray",borderRadius:"8px",padding:"10px"}}>
            <p>Post Id : {ele._id}</p>
           <p>Likes : {ele.likes}</p>
        </div>
       })
     }
    </div>
   </div>
  )
}

export default PostAnalytics