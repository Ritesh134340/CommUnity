import React,{useEffect} from 'react'
import PostForm from "../components/PostForm"
import PostList from "../components/PostList"
import { getPost } from '../redux/appRedux/action'
import styled from "styled-components"
import {useDispatch,useSelector} from "react-redux"
import Loading from "../components/Loading"
const Home = () => {
  const dispatch=useDispatch();
  const posts=useSelector((state)=>state.AppReducer.posts);
  const loading=useSelector((state)=>state.AppReducer.loading)

  useEffect(() => {
    dispatch(getPost())
 }, [])

  return (
    loading ? <Loading/> :<HomeWrapper>
        <PostForm/>
        {
          posts && posts.map((ele)=>
            <PostList key={ele._id} posts={ele}/>
          )
        }
       
    </HomeWrapper>
  )
}

 const HomeWrapper=styled.div`
  margin:auto;
 `

export default Home