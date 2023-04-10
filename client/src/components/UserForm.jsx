import React,{useState} from 'react'
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {createUser,getUser} from "../redux/authRedux/action"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserForm = () => {
  const dispatch=useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

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

    if(!name){
      toast.warn('Please enter name !', {
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
     name:name,
     email:email,
     bio:bio
    }

    dispatch(createUser(payload)).then((res)=>{
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
    }).then(()=>{
      dispatch(getUser())
    })
  };


  return (
    <>
    <h2 style={{marginTop:"100px",textAlign:"center",marginBottom:"45px",color:"gray"}}>Create New User</h2>
    <MainContainer>
    
    <form className="user-form" onSubmit={handleSubmit}>
      <label className="user-label" htmlFor="name">Name</label>
      <input 
        className="user-input"
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label className="user-label" htmlFor="email">Email</label>
      <input 
      className="user-input"
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

    

      <label className="user-label" htmlFor="bio">Bio</label>
      <input 
        className="user-input"
        type="text"
        id="bio"
        name="bio"
        placeholder="Enter a short bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
  
      />

      <button className="user-btn" type="submit">Send</button>
    </form>
         </MainContainer>
         <ToastContainer/>
    </>
  )
}


const MainContainer = styled.div`
  max-width: 330px;
  margin: 0px auto 30px auto;
  padding: 30px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom:50px;

  .user-form{
  display: flex;
  flex-direction: column;
  }

  .user-label{
  margin-bottom: 10px;
  font-size: 14px;
  
  }
  .user-input {
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 2px solid #08aeea;
  }
  }

  .user-btn{
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
    background-color: #05668d;
  }
  }

  @media (max-width: 600px) {
    padding: 20px;
  }
`;




export default UserForm