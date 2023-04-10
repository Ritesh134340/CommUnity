import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "../styles/link.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <NavWrapper show={show}>
      <div className="nav-left">
        <NavLink to="/">
          <h2>CommUnity</h2>
        </NavLink>
      </div>

       <div className="nav-right">
        <div className="ham-icon-div">
          <FaBars className="ham-icon" onClick={() => setShow(!show)} />
          <FaTimes className="cross-icon" onClick={() => setShow(!show)} />
        </div>

        <div className="tabs-div">
         

          <NavLink to="/" onClick={() => setShow(false)}>
           Home
          </NavLink>

          <NavLink to="/create/user" onClick={() => setShow(false)}>
            Create User
          </NavLink>
          
      
          <NavLink to="/analytics" onClick={() => setShow(false)}>
            Analytics
          </NavLink>

         
        </div>
      </div>
   
    </NavWrapper>
    <ToastContainer />
    </>
  );
};

const NavWrapper = styled.div`

    display:flex;
    width:100%;
    position: fixed;
    top:0px;
    color:white;
    background-color:#009FBD;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px ;
    align-items:center;
    height:70px;
    justify-content:space-between;
    z-index:999;
    transition:all 500ms ease-in-out;
    .profile-image-nav-div{
        border:1px solid black;
        background-color:red;
        height:35px;
        width:35px;
        border-radius:50%;
    }
    .nav-left{
        margin-left:40px;
    }
   
    .ham-icon-div{
        display:none;
    }
    .tabs-div{
     
        display:flex;
        margin-right:50px;
        gap:40px;  
        align-items:center;
        justify-content: 
        space-evenly;
    }
    .profile-div{
        font-weight:bold;
        display:flex;
        align-items: center;
        gap:15px;
     
    }
    
  

    .log-btn{
        padding:8px 15px;
        background-color:black;
        color:white;
        cursor:pointer;
        outline:none;
        border-radius:8px;
        border:none;
        font-weight:bold;
    }
   
    
@media all and (max-width:1024px) and (min-width:769px){
  .tabs-div{
    margin-right:15px;
  }
 
}


@media all and (max-width:768px) and (min-width:481px){
  .tabs-div{
    margin-right:10px;
  }
  
}

@media all and (max-width:480px) and (min-width:279px){
   
  
  
    .nav-left{
        margin-left:18px;
    }
     .rav-right{
        position:relative;
     }
    .ham-icon-div{
        display:block;
        margin-right:13px;
        transition: all 600ms ease;
    }
    .ham-icon{
        font-weight:100;
        color:white;
        font-size:33px;
        display:${(props) => (!props.show ? "block" : "none")}
    }
    .cross-icon{
      transition: all 600ms ease;
        font-size:35px;
        display:${(props) => (props.show ? "block" : "none")}
    }
    .nav-user-name{
        color:white;
    }
    .tabs-div{
    
      position:absolute;
      box-sizing:border-box;
      flex-direction:column;
      top:0px;
      height:100vh;
      margin-right:0px;
      left:${(props) => (props.show ? "-18%" : "-130%")};
      top:${(props) => (props.show ? "0%" : "-150vh")};
      background-color :#00425A ;
      width:100vw;
      padding-top:50px;
      gap:30px;

      justify-content: flex-start;
      transition:all 500ms ease;
    }
    .profile-div{
        flex-direction:column;
        gap:0px;
    }
}
`;

export default Navbar;
