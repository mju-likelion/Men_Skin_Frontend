import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";


const Base = styled.body`
  width: 1920px;
  height: 1080px;
  display: flex;
  align-items: top;
  background: #252525;
  font-family: Work Sans;
  justify-content: center;
`;

const Logo = styled.img`
  position: absolute;
  width: 205px;
  height: 198px;
  left: 858px;
  top: -1px;
`;

const TopBar = styled.div`
  position: absolute;
  width: 1824px;
  height: 68px;
  left: 48px;
  top: 198px;
  background: rgba(255, 255, 255, 0.85);
`;

const TopText = styled.img`
  top: 198px;
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 65px;
  height: 68px;
  position: absolute;
  width: 912px; 
  left: 70px;
`;

const ProductBase = styled.div`
  position: absolute;
  width: 1824px;
  height: 100%;
  left: 48px;
  top: 265px;
  background: rgba(255, 255, 255, 0.92);
  overflow-y: scroll;

`;

const row = styled.div`
  background: white
  height: 50px
  width: 400px

`;

const a = styled.div`
  color: white

`;

const p = styled.div`
  margin-top: 1em
  text-align: center
  color: #aaa

`;

const ProductBottom1 = styled.div`
  position: absolute;
  width: 1824px;
  height: 50px;
  background:#252525;
  margin-top:2290px;
`;

const ProductBottom2 = styled.div`
  position: absolute;
  width: 1824px;
  height: 50px;
  margin-top:2240px;
`;

const ProductDetail = styled.div`
  width: 608px;
  height: 560px;
  background: #ffffff;
  float: left;
  width: 407px;
  height: 483px;
  margin-left: 91px;
  margin-top: 76px;

`;

const TextBox = styled.text`
  width: 608px;
  height: 560px;
  background: #ffffff;
  float: left;
  width: 407px;
  height: 483px;
  margin-left: 91px;
  margin-top: 76px;

`;

const ImgBox = styled.div`
  height: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  display: block;

`;

const Placing = styled.span`
  top: 198px;
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 65px;
  height: 68px;
  position: absolute;
`;


function Page({ value }) {
  return (
    <Base>
      <Link to="./">
        <Logo src="img/logo.png" />
      </Link>
      <TopBar>
        <Link to="./">
          <Placing>Home</Placing>
        </Link>
      </TopBar>
      <ProductBase>
      </ProductBase>
      <ProductBottom2 />
      <ProductBottom1 />
    </Base >
  );
}

function TotalPresenter() {
  return (
    <Page fav="Home" />
  );
}

export default TotalPresenter;
