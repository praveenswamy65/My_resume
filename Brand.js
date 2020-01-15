import React from 'react'
import styled from "styled-components";
import Img from "react-image";
import logo from "../../assets/Profile.jpg";
import {animateScroll as scroll} from "react-scroll";

const Brand = (props) => {
  return (
    <Img src={logo} alt="Profile Pic"
         onClick={() => scroll.scrollToTop()}
    style={{ width: 200, height: 200, borderRadius: 200 / 2}}
    />
  )
}

export default Brand

const Image = styled.img`
box-shadow: 10px 5px 5px #2d3436;
`;