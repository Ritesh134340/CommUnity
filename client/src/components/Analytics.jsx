import React,{useState} from "react";
import styled from "styled-components";
import { NavLink } from "../styles/link.styled";
import UserAnalytics from "./UserAnalytics";
import PostAnalytics from "./PostAnalytics";

const Analytics = () => {
  const [toggle,setToggle]=useState(false)
  const toggleAnalytics=()=>{
    setToggle(!toggle)
  }

  return (
    <AnalyticsWrapper>
      <div className="toggler-wrapper">
        <p onClick={toggleAnalytics}>User Analytics</p>

        <p onClick={toggleAnalytics}>Post Analytics</p>
      </div>

      <div>
       {!toggle && <UserAnalytics />}
       {toggle && <PostAnalytics />}
      </div>
    </AnalyticsWrapper>
  );
};

const AnalyticsWrapper = styled.div`
  margin:auto;
  margin-top: 80px;
  color: black;
  width:80%;
  .toggler-wrapper{
    display:flex;
    align-items:center;
    padding:8px 30px;
    margin-bottom:30px;
    justify-content:space-between;
  }
  .toggler-wrapper{
    cursor:pointer;
    border:1px solid  gray;
    border-radius:8px;
  }  

  @media all and (max-width:1024px) and (min-width:769px){
}


@media all and (max-width:768px) and (min-width:481px){
}

@media all and (max-width:480px) and (min-width:279px){
}

`;

export default Analytics;
