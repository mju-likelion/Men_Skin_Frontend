import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Base = styled.body`
  height: 920px;
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
  left: 560px;
  top: 230px;
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
  height: 12px;
  left: 620px;
  top: 320px;

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
  left: 1220px;
  top: 440px;
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
  left: 1220px;
  top: 480px;
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
  top: 880px;
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
  top: 880px;
  background: #FFFFFF;
  float : center;
  border-radius: 20px;
`;

const Pencil = styled.img`
  height: 36px; 
  left: 1645px; 
  top: 820px;
  position: absolute;
`;


function BoardPresenter() {
  return (<Base>
    <Link to="./">
      <Logo src="img/logo.png" />
    </Link>
    <Line />
    <TitleDiv><div1>건성</div1>&nbsp; <div1>지성</div1>&nbsp; <div1>복합성</div1>&nbsp; <div1>헤어/뷰티</div1>&nbsp; <div1>스타일</div1>&nbsp; <div1>↓↑</div1>&nbsp; <div1>조회순</div1> </TitleDiv>
    <div>
      <Link to="./content">
        <DivText style={{ top: 300 }}>제발 화장품은 사서 바르세요!</DivText>
        <DivText style={{ width: 193, height: 43, left: 1185, top: 300 }}>김불닭</DivText>
        <DivText style={{ width: 108, height: 12, left: 620, top: 290, fontSize: 13, lineHeight: 15 }}>2021.07.23 15:28</DivText>
        <DivText style={{ width: 582, height: 41, left: 620, top: 250, fontSize: 18, lineHeight: 21 }}>우리집 고양이 츄르를 좋아해 우리집 고양이 츄르를 좋아해 우리집 고양..</DivText>
        <Eyes style={{ top: 410 }} img src="img/eye.png"></Eyes>
        <ThumbsUp style={{ top: 440 }} img src="img/Thumbs_up.png"></ThumbsUp>
        <EyesCount style={{ top: 405 }}>32</EyesCount>
        <ThumbsUpCount style={{ top: 435 }}>8</ThumbsUpCount>
      </Link>
    </div >
    <Line style={{ top: 490, width: 800, left: 570 }} />
    <div style={{ top: 780 }}>
      <Link to="./content">
        <DivText style={{ top: 480 }}>왈! 왈! 왈! 알! R! 왈! 왈!</DivText>
        <DivText style={{ width: 193, height: 43, left: 1185, top: 480 }}>박로제</DivText>
        <DivText style={{ width: 108, height: 12, left: 620, top: 470, fontSize: 13, lineHeight: 15 }}>2021.07.25 17:28</DivText>
        <DivText style={{ width: 582, height: 41, left: 620, top: 430, fontSize: 18, lineHeight: 21 }}>거 우리 점잖게 사족 보행을 합시다 이족 보행에 대해 저는 불만이 많다..</DivText>
        <Eyes style={{ top: 590 }} img src="img/eye.png"></Eyes>
        <ThumbsUp style={{ top: 620 }} img src="img/Thumbs_up.png"></ThumbsUp>
        <EyesCount style={{ top: 585 }}>172</EyesCount>
        <ThumbsUpCount style={{ top: 615 }}>65</ThumbsUpCount>
      </Link>
    </div>
    <Line style={{ top: 670, width: 800, left: 570 }} />
    <div>
      <Link to="./content">
        <DivText style={{ top: 660 }}>사과 식초 세안 해보신 분 계신가요?</DivText>
        <DivText style={{ width: 193, height: 43, left: 1185, top: 670 }}>이구슬</DivText>
        <DivText style={{ width: 108, height: 12, left: 620, top: 650, fontSize: 13, lineHeight: 15 }}>2021.07.23 15:28</DivText>
        <DivText style={{ width: 582, height: 41, left: 620, top: 610, fontSize: 18, lineHeight: 21 }}>아니 도대체 그런 노래에 왜 중독 되는거야 수같은 나를 느껴! 나를 느껴!..</DivText>
        <Eyes style={{ top: 770 }} img src="img/eye.png"></Eyes>
        <ThumbsUp style={{ top: 800 }} img src="img/Thumbs_up.png"></ThumbsUp>
        <EyesCount style={{ top: 765 }}>72</EyesCount>
        <ThumbsUpCount style={{ top: 795 }}>15</ThumbsUpCount>
      </Link>
    </div>
    <NumberBox> {'<'}&nbsp; 1&nbsp; 2&nbsp; 3&nbsp; 4&nbsp; 5&nbsp; 6&nbsp; 7&nbsp; 8&nbsp; 9&nbsp; 10&nbsp; {'>'} </NumberBox>
    <Link to="./Write">
      <Submit>&nbsp;&nbsp;&nbsp;&nbsp;글 작성하기</Submit>
      <Pencil src="img/pencil.png" style={{ height: 24, top: 885 }}></Pencil>
    </Link>
  </Base>
  );
}

export default BoardPresenter;


