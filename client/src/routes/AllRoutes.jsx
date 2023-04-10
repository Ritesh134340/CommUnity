import React from 'react'
import {Route,Routes} from "react-router-dom";
import Analytics from '../components/Analytics'
import UserDetails from "../pages/UserDetails"

import Home from '../pages/Home';
import CreateUser from '../pages/CreateUser';
import PostDetails from '../pages/PostDetails';


const AllRoutes = () => {
   
  return (
     <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/create/user" element={<CreateUser/>} />
      
        <Route path="/analytics" element={<Analytics/>} />

        <Route path="/post/details/:id" element={<PostDetails/>} />

        <Route path="/user/details/:id" element={<UserDetails/>} />

     </Routes>
  )
}

export default AllRoutes