import React from 'react';
import Router from "./Router";
import styled from "styled-components";

const Section = styled.body`
  background-color: #252525;
  width: 1920px;
  height: 2160px;
  margin: 0;
  padding: 0;
  position:absolute; 
  top: 0px;
  left: 0px;
`;
const Quick_menu = styled.div`
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
  top: 324px;
`; 

const Rank = styled.img`
  position: absolute;
  width: 137px;
  height: 117px;
  left: 1739px;
  top: 529px;

`; 

const Board = styled.img`
  position: absolute;
  width: 137px;
  height: 117px;
  left: 1738px;
  top: 730px;

`; 




function App() {
  return (
    <Section>

      <img className="Logo_image" alt="Logo_image" src="img/logo.png"  width="205" height="198"/>
      <div className="main_image">
        <img className="main_image" alt="main_image" src="img/main_image.jpg" height="615" width="1920" />
        <Quick_menu>Quick menu</Quick_menu>
        <Login className="LoginButton">LOGIN</Login>
        <Line alt="line" src="img/main_Line.png"  />
        <Sing_up className="LoginButton">SING UP</Sing_up>
        <Find_f className="Find_f" alt="find_foundation_Button" src="img/Find_foundation.png"/>
        <Rank className="Rank" alt="Rank_Button" src="img/cosmetics_rank.png"/>
        <Board className="Board" alt="Board _Button" src="img/notic_board.png"/>
        <Router/>
        

      </div>
  
    </Section>
  );
}

export default App;