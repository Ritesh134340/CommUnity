import React, { useState } from "react";
import styled from "styled-components";
import {createPost,getPost} from "../redux/appRedux/action";
import {useSelector,useDispatch} from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PostForm = () => {
  const dispatch=useDispatch();
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    const newText = event.target.value;
    const wordArray = newText.split(/\s+/);
    const count = wordArray.length;
    if (count <= 300) {
      setContent(newText);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
      toast.error('Invalid email !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        return ;
    }
    if(!content){
      toast.error('Please provide content !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        return ;
    }
    const payload={
      email:email,
      content:content
    }
    dispatch(createPost(payload)).then((res)=>{
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
  };
  
  return (
    <>
     <div style={{
       
        width:"95%",
        margin:"auto",
        marginTop:"75px",
        overflow:"hidden",
        borderRadius:"5px",
        marginBottom:"100px"
      
     }}>
          <img src="https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbW11bml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="banner" style={{
            width:"100%",
            maxHeight:"250px",
            borderRadius:"5px",
          }} />
        </div>
      <MainContainer>
      
     
        <form className="post-form" onSubmit={handleSubmit}>
          
          <input
            className="post-input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          
          <input
           type="text"
            className="post-input"
            name="content"
            placeholder="Enter your content..."
            value={content}
            onChange={handleChange}
            required
          />
           <button className="post-btn" type="submit">Post</button>
        </form>
      </MainContainer>
      <ToastContainer/>
    </>
  );
};

const MainContainer = styled.div`
  width: 60%;
  margin: 100px auto 30px auto;
  border-radius: 5px;
  
 
  .post-form {
    display: flex;
    flex-direction: column;
  }

  .post-label {
    margin-bottom: 10px;
    font-size: 14px;
  }
  .post-input {
    margin-bottom: 30px;
    padding: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    border-bottom: 1px solid #ccc;

    &:focus {
      outline: none;
      border-bottom: 2px solid #08aeea;
    }
  }

  .post-btn {
    display:block;
    width:100px;  
    margin-top: 20px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #08aeea;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: rgb(0,159,189);
    }
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export default PostForm;
