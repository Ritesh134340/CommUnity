import React,{useEffect,useState} from 'react'

import { getUserById } from '../redux/authRedux/action'
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import styled from "styled-components"
import Loading from "../components/Loading"
const UserDetails = () => {
 const [user, setUser] = useState({})
 const {id}=useParams()
 const dispatch=useDispatch()
 const loading=useSelector((state)=>state.AuthReducer.loading)

 useEffect(() => {
    dispatch(getUserById(id))
    .then((res)=>{
        setUser(res.payload.userData)
    })
 }, [id])
 return (
 loading ? <Loading/> : <UserDetailsWrapper>
  <div className="details-wrapper">
    <p>Id : {user._id}</p>
   <p>Name : {user.name}</p>
   <p>Email : {user.email}</p>
   <p>Bio : {user.bio}</p>
  </div>
   </UserDetailsWrapper>

)

}

 const UserDetailsWrapper=styled.div`
   margin-top:80px;
   font-size:17px;
   .details-wrapper{
    margin:auto;
    margin-left:25%;
    margin-top:150px;
    padding:20px;
    width:50%;
    box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;
   }

     
@media all and (max-width:1024px) and (min-width:769px){
  .details-wrapper{
    width:55%;
    margin-left:20%;
  }
}


@media all and (max-width:768px) and (min-width:481px){
  .details-wrapper{
    width:55%;
    margin-left:20%;
  }
}

@media all and (max-width:480px) and (min-width:279px){
  .details-wrapper{
    width:85%;
    margin-left:3%;
  }
}
 `

export default UserDetails;