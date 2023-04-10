import React ,{useState,useEffect} from 'react'
import Loading from "../components/Loading"
import UserForm from '../components/UserForm'
import UserList from '../components/UserList'
import {useSelector,useDispatch} from "react-redux"
import { getUser } from '../redux/authRedux/action'

const CreateUser = () => {
  const dispatch=useDispatch()
  const users=useSelector((state)=>state.AuthReducer.usersDocument)
  console.log(users,"from users page")
  const loading=useSelector((state)=>state.AuthReducer.loading)
  useEffect(() => {
     dispatch(getUser())
  }, [])
  


  return (
    loading ? <Loading/> :   <div style={{paddingBottom:"50px"}}>
        <UserForm/>
        {
          users && users.map((ele)=><UserList key={ele._id} user={ele}/>)
        }
     
    </div>
  )
}

export default CreateUser