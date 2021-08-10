import React from "react";
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";




const Section = styled.body`
  background-color: #252525;
  width: 1920px;
  height: 1080px;
  margin: 0;
  padding: 0;
  position:absolute; 
  top: 0px;
  left: 0px;
`;
const Quick_Menu = styled.div`
  position: absolute;
  width: 135px;
  height: 802px;
  left: 1740px;
  top: 100px;

  background: rgba(112, 112, 112, 0.7);
  border-radius: 77px;


  font-family: Georgia;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 75px;
  text-align: center;

  color: #FFFFFF;
`;
const Login = styled.div`
  position: absolute;
  width: 118px;
  height: 36px;
  left: 1597px;
  top: 36px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: -0.02em;

  color: #FFFFFF;
`;
const Line = styled.img`
position: absolute;
width: 2px;
height: 44px;
left: 1720px;
top: 35px;
`;
const Sing_up = styled.div`
  position: absolute;
  width: 142px;
  height: 33px;
  left: 1745px;
  top: 36px;


  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: -0.02em;

  color: #FFFFFF;
`;
const Find_f = styled.img`
  position: absolute;
  width: 137px;
  height: 117px;
  left: 1738px;
  top: 250px;
`;
const Rank = styled.img`
  position: absolute;
  width: 137px;
  height: 117px;
  left: 1739px;
  top: 460px;
`;

const Board = styled.img`
  position: absolute;
  width: 137px;
  height: 117px;
  left: 1738px;
  top: 670px;
`;

const ContainerProduct = styled.div`
  position: relative;
  width: 915px;
  height: 490px;
  overflow: hidden;
  margin: 0 auto;
`;

const ContainerBody = styled.div`
  width: 100%;
  height: 1230px;
  margin: 0;
  padding: 0;
  background: #252525;
`;

const TextBox = styled.p`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Georgia;
  font-size: 28px;
`;

const ImgBox = styled.img`
  width: 915px;                          
  height: 490px;
  object-fit: cover;
  opacity: 0.6;
`;

const Effect = styled.figure`
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &:hover{
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
`;

const HomePresenter = () => (
  <Section>
    <img className="Logo_image" alt="Logo_image" src="img/logo.png" width="205" height="198" />
    <div className="main_image" />
    <img className="main_image" alt="main_image" src="img/main_image.jpg" height="615" width="1920"></img>
    <Quick_Menu>Quick menu</Quick_Menu>
    <Link to="./Login">
      <Login className="LoginButton">LOGIN</Login>
    </Link>
    <Line alt="line" src="img/main_Line.png" />
    <Link to="./Singup">
      <Sing_up className="LoginButton">SING UP</Sing_up>
    </Link>

    <Link to="./Find">
      <Find_f className="Find_f" alt="find_foundation_Button" src="img/Find_foundation.png" />
    </Link>
    <Rank className="Rank" alt="Rank_Button" src="img/cosmetics_rank.png" />
    <Board className="Board" alt="Board _Button" src="img/notic_board.png" />

    <Rank className="Rank" alt="Rank_Button" src="img/cosmetics_rank.png" />

    <ContainerBody>
      <ContainerProduct className="container_product"
        style={{
          float: "left",
          left: "29px",
          top: "183px",
          background: "#c4c4c4"
        }}>
        <Link to="./TotalSkin">
          <Effect className="Effect" style={{ width: "100%" }}>
            <ImgBox className="ImgBox" src="img/skin_care.jpg" />
          </Effect>
        </Link>
        <TextBox className="TextBox">skin care</TextBox>
      </ContainerProduct>

      <ContainerProduct className="container_product"
        style={{
          float: "right",
          right: "29px",
          top: "183px",
          background: "#252525"
        }}>
        <Link to="./TotalSun">
          <Effect className="Effect" style={{ width: "100%" }}>
            <ImgBox className="ImgBox" src="img/suncare.jpg" />
          </Effect>
        </Link>
        <TextBox className="TextBox" style={{ color: "white" }}>sun care</TextBox>
      </ContainerProduct>

      <ContainerProduct className="container_product"
        style={{
          float: "left",
          left: "29px",
          top: "216px",
          background: "#252525"
        }}>
        <Link to="./TotalPerfume">
          <Effect className="Effect" style={{ width: "100%" }}>
            <ImgBox className="ImgBox" src="img/perfume.jpg" />
          </Effect>
        </Link>
        <TextBox className="TextBox" style={{ color: "white" }}>perfume</TextBox>
      </ContainerProduct>

      <ContainerProduct className="container_product"
        style={{
          float: "right",
          right: "29px",
          top: "216px",
          background: "#c4c4c4"
        }}>
        <Link to="./TotalCosmetic">
          <Effect className="Effect" style={{ width: "100%" }}>
            <ImgBox className="ImgBox" src="img/cosmetic.jpg" />
          </Effect>
        </Link>
        <TextBox className="TextBox">cosmetic</TextBox>
      </ContainerProduct>

    </ContainerBody>
  </Section >
);

export default HomePresenter;
