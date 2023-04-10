import React,{useEffect,useState} from 'react'
import styled from "styled-components"
import Modal from './Modal';
import { updatePost,getPost,likePost,disLikePost,deletePost } from '../redux/appRedux/action';
import {useDispatch} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from '../styles/link.styled';

const PostList = ({posts}) => {

   const dispatch=useDispatch()
   const [showModal,setShowModal]=useState(false)
   const [newPost,setNewPost]=useState(posts.content)
   const [liked,setLiked]=useState(false)
  
  
   const dateObj = new Date(posts.updatedAt);

const year = dateObj.getFullYear(); 
const month = dateObj.getMonth() + 1; 
const day = dateObj.getDate(); 

const date=day+"-"+month+"-"+year

let hours = dateObj.getUTCHours();
const minutes = dateObj.getUTCMinutes(); 
const seconds = dateObj.getUTCSeconds(); 


const amOrPm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12; 

const time = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amOrPm}`;



const handleUpdate=()=>{
  if(posts.content!==newPost){
    const id=posts._id

    const payload={
      content:newPost
    }
    dispatch(updatePost(id,payload)).then((res)=>{
      if(res.status===200){
        toast.success(res.payload.mesg, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      else{
        toast.error(res.mesg, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    })
    .then(()=>{
       dispatch(getPost())
      setShowModal(false)
    })
  }
}
console.log(posts)

const handleDeletePost=(id)=>{
   dispatch(deletePost(id))
   .then((res)=>{
     if(res.status===200){
      toast.success(res.payload.mesg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
     }
     else{
      toast.error(res.mesg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
     }
   })
   .then(()=>{
    dispatch(getPost())
   })

}

const handleLikePost=(id)=>{
    setLiked(true)
    let  currentLikes=posts.likes;
         currentLikes=currentLikes+1;
    dispatch(likePost(id,currentLikes))
    .then(()=>{
      dispatch(getPost())
    })
}

const handleDislikePost=(id)=>{
  let  currentLikes=posts.likes;
  if(currentLikes>0 ){
    currentLikes=currentLikes-1;
    setLiked(false)
    dispatch(disLikePost(id,currentLikes))
    .then(()=>{
      dispatch(getPost())
    })
  }
}

  return (
     <>
      <Modal type="post" handleUpdate={handleUpdate} showModal={showModal} setShowModal={setShowModal} newPost={newPost} setNewPost={setNewPost} />

       <PostListWrapper>
      <div className="main-post-wrapper">
        <div className="post-container">
          {posts.content}
        </div>
        <div className='time-wrapper'>
        <p>Created-Time: {time} </p>
        <p>Created-Date: {date}</p>
        </div>
      
        <div className="like-wrapper">
         
        <p onClick={()=>handleLikePost(posts._id)}>{posts.likes} Like</p>
        <p onClick={()=>handleDislikePost(posts._id)}>Dislike</p>
        </div>

        <div className="btn-wrapper" >
          <NavLink to={`post/details/${posts._id}`}> <button className="user-btn" style={{backgroundColor:"rgb(8,174,234)"}} >View</button></NavLink>
      
          <button style={{backgroundColor:"rgb(8,174,234)"}}  className="user-btn"  onClick={()=>setShowModal(true)}>Update</button>
          <button className="user-btn" onClick={()=>handleDeletePost(posts._id)} style={{backgroundColor:"red"}}>Delete</button>
        </div>
      </div>
     </PostListWrapper>
     <ToastContainer/>
     </>
   
   
  )
}


const PostListWrapper=styled.div`
  
  .post-container{

    max-height:150px;
    overflow-y:scroll;
  }
  .btn-wrapper{
  display:flex;
  align-items:center;
  gap:15px;
  margin-top:10px;
  margin-bottom:20px;
 }
.user-btn{
  padding:9px 15px;
  border:none;
  outline:none;
  color:white;
  display:block;
  border-radius:5px;
  cursor:pointer;
 }
 .time-wrapper>p{
  font-size:12px;
  color:gray;
 }
  .main-post-wrapper{
    width:80%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin:auto;

    padding:20px;
    border-radius:8px;
    margin-bottom:35px;
    margin-top:50px;
  }

  .like-wrapper{
    display:flex;
    gap:20px;
  }
  .like-wrapper>p{
    font-size:15px;
    cursor:pointer;
  }
`
export default PostList