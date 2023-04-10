import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import { getPostById } from '../redux/appRedux/action';
import {useDispatch,useSelector} from "react-redux"
import styled from "styled-components"
import Loading from "../components/Loading"

const PostDetails = () => {

  const loading=useSelector((state)=>state.AppReducer.loading)
  const dispatch=useDispatch()
  const [posts, setPosts] = useState({})
  const [userData,setUserData]=useState({})

  const {id}=useParams()

  useEffect(() => {
    dispatch(getPostById(id))
    .then((res)=>{
     if(res.status===200){
      dispatch(getPostById(id))
      .then((res)=>{
        setPosts(res.payload.postData)
        setUserData(res.payload.userData)
      })
     }
    })
  }, [id])
  


  return (
   loading ? <Loading/> : <PostDetailsWrapper>
    <div className="main-container">
      <p>Id : {posts?._id}</p>
      <p>Content :  {posts?.content}</p>
     <p>Created : {posts?.createdAt?.split("T")[0]}</p>
     <p>Total Likes : {posts?.likes}</p>
      </div>
    </PostDetailsWrapper>
    
  )
}

const PostDetailsWrapper=styled.div`
  margin-top:120px;

  .main-container{
    margin:auto;
    width:50%;
    padding:20px;
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

    
@media all and (max-width:1024px) and (min-width:769px){
 .main-container{
  width:60%;
 }
}


@media all and (max-width:768px) and (min-width:481px){
  .main-container{
  width:60%;
 }
}

@media all and (max-width:480px) and (min-width:279px){
  .main-container{
  width:85%;
 }
}
`

export default PostDetails