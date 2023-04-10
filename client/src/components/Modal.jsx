import React from 'react'
import styled from "styled-components"
import {FaTimes} from "react-icons/fa"
const Modal = ({showModal="",setShowModal="",setNewPost="",newPost="",handleUpdate=()=>{},newUserName="",
handleUpdateUser=()=>{},setNewUserName="",type,setNewUserBio="",newUserBio=""}) => {


  return (

   (type==="user" ) ? ( <ModalWrapper show={showModal}>
      <div className="main-modal-div">
        <div className="cross-icon-wrapper"><FaTimes className="cross-icon" onClick={()=>setShowModal(false)}/></div>
        <div className="modal-content-wrapper">
          <input className="modal-input"  type="text" defaultValue={newUserName} onChange={(e)=>setNewUserName(e.target.value)} />

          <input className="modal-input"  type="text" defaultValue={newUserBio} onChange={(e)=>setNewUserBio(e.target.value)} />


          <button className="modal-btn"  onClick={()=>handleUpdateUser()}>Update</button>
        </div>
      </div>
    </ModalWrapper>) :( <ModalWrapper show={showModal}>
      <div className="main-modal-div">
        <div className="cross-icon-wrapper"><FaTimes className="cross-icon" onClick={()=>setShowModal(false)}/></div>
        <div className="modal-content-wrapper">
          <input className="modal-input" type="text" defaultValue={newPost} onChange={(e)=>setNewPost(e.target.value)} />
          <button className="modal-btn" onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </ModalWrapper>)

)
  
  
}

const ModalWrapper=styled.div`
  width:100vw;
  height:100vh;
  z-index:999;
  position:fixed;
  top:0;
  background-color:rgb(0,0,0);
  background-color:rgba(0,0,0,0.5);
  display:${(props)=>props.show ? "block" : "none"};
  .modal-input{
    height:35px;
    width:100%;
    display:block;
    margin-bottom:10px;
    border-radius:5px;
    padding-left:10px;
    box-sizing:border-box;
    font-size:17px;
  }
  .modal-btn{
    padding:8px 15px;
    outline:none;
    border:none:
    display:block;
    border-radius:5px;
    margin-top:15px;
    cursor:pointer;
  }
  .main-modal-div{
    background-color:white;
    width:50%;
    margin:auto;
    margin-top:80px;
    padding:20px;
    height:300px;
    border-radius:10px;
  }
  .cross-icon-wrapper{
    display:flex;
    margin-bottom:30px;
    align-items:center;
    justify-content:flex-end;
    
  }
  .cross-icon{
    font-size:25px;
    cursor:pointer;
  }
  .modal-content-wrapper{
    
  }

  
@media all and (max-width:1024px) and (min-width:769px){
  .main-modal-div{
    width:60%;
  }
}


@media all and (max-width:768px) and (min-width:481px){
  .main-modal-div{
    width:55%;
  }
}

@media all and (max-width:480px) and (min-width:279px){
  .main-modal-div{
    width:95%;
    box-sizing:border-box;
  }
}

`

export default Modal