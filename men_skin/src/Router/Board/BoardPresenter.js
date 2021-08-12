import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Base = styled.body`
  height: 1080px;
  display: flex;
  align-items: top;
  background: #252525;
`;

const Logo = styled.img`
  position: absolute;
  width: 205px;
  height: 198px;
  left: 858px;
  top: -1px;
`;

const Line = styled.div`
  position: absolute;
  width: 1824px;
  height: 2px;
  left: 39px;
  top: 198px;
  background: #FFFFFF;
`;

const TitleDiv = styled.div`
  position: absolute;
  width: 819px;
  height: 53px;
  left: 561px;
  top: 294px;
  font-family: Peddana;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 49px;
  text-align: center;
  margin-left:-10px;
  color: #FFFFFF;
`;

const DivText = styled.p`
  position: absolute;
  width: 988px;
  height: 48px;
  left: 561px;
  top: 397px;

  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: -0.02em;

  color: #FFFFFF;

`;

const Eyes = styled.img`
  position: absolute;
  width: 24px;
  height: 23px;
  left: 1200px;
  top: 500px;
`;

const EyesCount = styled.p`
position: absolute;
width: 25px;
height: 12px;
left: 1260px;
top: 495px;

font-family: Work Sans;
font-style: normal;
font-weight: bold;
font-size: 10px;
line-height: 12px;
/* identical to box height */

text-align: center;
letter-spacing: -0.02em;

color: #FFFFFF;
`;

const ThumbsUp = styled.img`
  position: absolute;
  width: 23px;
  height: 23px;
  left: 1200px;
  top: 540px;
`;

const ThumbsUpCount = styled.p`
position: absolute;
width: 25px;
height: 12px;
left: 1260px;
top: 540px;

font-family: Work Sans;
font-style: normal;
font-weight: bold;
font-size: 10px;
line-height: 12px;
/* identical to box height */

text-align: center;
letter-spacing: -0.02em;

color: #FFFFFF;
`;

const NumberBox = styled.div`
  position: absolute;
  width: 701px;
  height: 32.19px;
  left: 605px;
  top: 1040px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 12px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.02em;
  color: #FFFFFF;

`;

const Submit = styled.div`
  font-size: 20px;
  position: absolute;
  width: 200px;
  height: 36px;
  left:1500px;
  top: 1040px;
  background: #FFFFFF;
  float : center;
  border-radius: 20px;
`;

const Pencil = styled.img`
  height: 36px; 
  left: 1645px; 
  top: 1040px;
  position: absolute;
`;


function BoardPresenter() {
  return (<Base>
    <Link to="./">
      <Logo src="img/logo.png" />
    </Link>
    <Line />
    <TitleDiv>건성&nbsp; 지성&nbsp; 복합성&nbsp; 헤어/뷰티&nbsp; 스타일&nbsp; ↓↑&nbsp; 조회순 </TitleDiv>
    <div>
      <Link to="./content">
        <DivText>제발 화장품은 사서 바르세요!</DivText>
        <DivText style={{ width: 193, height: 43, left: 1185 }}>김불닭</DivText>
        <DivText style={{ width: 108, height: 12, left: 563, top: 390, fontSize: 13, lineHeight: 15 }}>2021.07.23 15:28</DivText>
        <DivText style={{ width: 582, height: 41, left: 563, top: 360, fontSize: 18, lineHeight: 21 }}>우리집 고양이 츄르를 좋아해 우리집 고양이 츄르를 좋아해 우리집 고양..</DivText>
        <Eyes img src="img/eye.png"></Eyes>
        <ThumbsUp img src="img/Thumbs_up.png"></ThumbsUp>
        <EyesCount>72</EyesCount>
        <ThumbsUpCount>15</ThumbsUpCount>
      </Link>
    </div >
    <Line style={{ top: 600, width: 800, left: 560 }} />
    <div style={{ top: 800 }}>
      <Link to="./content">
        <DivText style={{ top: 600 }}>제발 화장품은 사서 바르세요!</DivText>
        <DivText style={{ width: 193, height: 43, left: 1185, top: 600 }}>김불닭</DivText>
        <DivText style={{ width: 108, height: 12, left: 563, top: 590, fontSize: 13, lineHeight: 15 }}>2021.07.25 17:28</DivText>
        <DivText style={{ width: 582, height: 41, left: 563, top: 560, fontSize: 18, lineHeight: 21 }}>우리집 고양이 츄르를 좋아해 우리집 고양이 츄르를 좋아해 우리집 고양..</DivText>
        <Eyes style={{ top: 705 }} img src="img/eye.png"></Eyes>
        <ThumbsUp style={{ top: 745 }} img src="img/Thumbs_up.png"></ThumbsUp>
        <EyesCount style={{ top: 700 }}>172</EyesCount>
        <ThumbsUpCount style={{ top: 740 }}>65</ThumbsUpCount>
      </Link>
    </div>
    <Line style={{ top: 800, width: 800, left: 560 }} />
    <div>
      <Link to="./content">
        <DivText style={{ top: 805 }}>제발 화장품은 사서 바르세요!</DivText>
        <DivText style={{ width: 193, height: 43, left: 1185, top: 805 }}>김불닭</DivText>
        <DivText style={{ width: 108, height: 12, left: 563, top: 800, fontSize: 13, lineHeight: 15 }}>2021.07.23 15:28</DivText>
        <DivText style={{ width: 582, height: 41, left: 563, top: 770, fontSize: 18, lineHeight: 21 }}>우리집 고양이 츄르를 좋아해 우리집 고양이 츄르를 좋아해 우리집 고양..</DivText>
        <Eyes style={{ top: 910 }} img src="img/eye.png"></Eyes>
        <ThumbsUp style={{ top: 950 }} img src="img/Thumbs_up.png"></ThumbsUp>
        <EyesCount style={{ top: 905 }}>72</EyesCount>
        <ThumbsUpCount style={{ top: 950 }}>15</ThumbsUpCount>
      </Link>
    </div>
    <NumberBox> {'<'}&nbsp; 1&nbsp; 2&nbsp; 3&nbsp; 4&nbsp; 5&nbsp; 6&nbsp; 7&nbsp; 8&nbsp; 9&nbsp; 10&nbsp; {'>'} </NumberBox>
    <Link to="./Write">
      <Submit>&nbsp;&nbsp;&nbsp;&nbsp;글 작성하기</Submit>
      <Pencil src="img/pencil.png" style={{ height: 24, top: 1046 }}></Pencil>
    </Link>
  </Base>
  );
}

export default BoardPresenter;


