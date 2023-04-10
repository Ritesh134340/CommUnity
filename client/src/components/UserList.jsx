import React, { useState } from "react";

import Modal from "./Modal";
import styled from "styled-components";
import { NavLink } from "../styles/link.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteUser, getUser, updateUser } from "../redux/authRedux/action";
import { useDispatch,useSelector } from "react-redux";

const UserList = ({ user }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const [newUserName, setNewUserName] = useState(user?.name);
  const [newUserBio, setNewUserBio] = useState(user?.bio);

  const handleUpdateUser = () => {
    const payload = {
      name: newUserName,
      bio: newUserBio,
    };
    dispatch(updateUser(user._id, payload))
      .then((res) => {
        if (res.status === 200) {
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
        } else {
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
      .then(() => {
        dispatch(getUser());
        setShowModal(false);
      });
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id))
      .then((res) => {
        if (res.status === 200) {
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
        } else {
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
      .then(() => {
        dispatch(getUser());
      });
  };

  console.log("user", user);
  return (
    <>
      <Modal
        type="user"
        handleUpdateUser={handleUpdateUser}
        showModal={showModal}
        setShowModal={setShowModal}
        newUserName={newUserName}
        setNewUserName={setNewUserName}
        newUserBio={newUserBio}
        setNewUserBio={setNewUserBio}
      />

   <UserListWrapper>
        <div>
          <p >Name : {user.name}</p>
          <p>Email : {user.email}</p>

          <div className="btn-wrapper">
            <NavLink to={`/user/details/${user._id}`}>
              <button style={{backgroundColor:"rgb(8,174,234)"}}className="user-btn" >View</button>
            </NavLink>

            <button className="user-btn" onClick={() => setShowModal(true)}style={{backgroundColor:"rgb(8,174,234)"}}>Update</button>
            <button className="user-btn"  onClick={() => handleDeleteUser(user._id)} style={{backgroundColor:"red"}}>Delete</button>
          </div>
        </div>
      </UserListWrapper>
      <ToastContainer />
    </>
  );
};

const UserListWrapper = styled.div`
  border:1px solid gray;
  border-radius:8px;
  margin:auto;
  padding:20px;
  margin-bottom:30px;
  width:80%;

 .user-btn{
  padding:9px 15px;
  border:none;
  outline:none;
  color:white;
  display:block;
  border-radius:5px;
  cursor:pointer;
 }

 .btn-wrapper{
  display:flex;
  align-items:center;
  gap:15px;
  margin-top:30px;
 }
`;

export default UserList;
