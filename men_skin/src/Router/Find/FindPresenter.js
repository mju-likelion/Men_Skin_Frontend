import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.body`
  background-color: #252525;
  width: 1950px;
  height: 1080px;
  margin: 0;
  padding: 0;
  position:absolute; 
  top: 0px;
  left: 0px;
`;
const Logo = styled.img`
  position:absolute; 
  left: 858px;
`;

const Upload = styled.img`
  left: 175px;
  top: 246px;
  position:absolute; 
`;

const Line = styled.img`
  left: 960px;
  top: 246px;
  position:absolute;
  height: 650px;
`;

const Button1 = styled.div`
  position: absolute;
  width: 600px;
  height: 110px;
  left: 158px;
  top: 802px;

  background: #FFFFFF;
  border-radius: 50px;
`;

const Explanation = styled.img`
  left: 1124px;
  top: 183px;
  position: absolute;
`;

const Bright = styled.img`
  left: 1120px;
  top: 407px;
  position: absolute;
`;

const Darkes = styled.img`
  left: 1463px;
  top: 407px;
  position: absolute;
`;

const FindPresenter = () => (
   <Section>

     <Link to="/">
      <Logo className="Logo_image" alt="Logo_image" src="img/logo.png"  width="205" height="198" />
     </Link>
     <Upload src="img/Upload.png" />
     <Line src="img/Find_Line.png"/>
     <Button1/>
     <Explanation src="img/Explanation.png"/>
     <Bright src="img/Brightpart.png"/>
     <Darkes src="img/Darkestpart.png"/>
     
 
   </Section>
);

export default FindPresenter;
