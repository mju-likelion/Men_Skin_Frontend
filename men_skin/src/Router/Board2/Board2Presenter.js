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


function Board2Presenter() {
  return (<Base>
    <Link to="./">
      <Logo src="img/logo.png" />
    </Link>
    <Line />
    <TitleDiv><div1>건성</div1>&nbsp; <div1>지성</div1>&nbsp; <div1>복합성</div1>&nbsp; <div1>헤어/뷰티</div1>&nbsp; <div1>스타일</div1>&nbsp; <div1>↓↑</div1>&nbsp; <div1>조회순</div1> </TitleDiv>
    <div>
      <Link to="./content">
        <DivText style={{ top: 300 }}>사과가 요즘 진짜로 맛있더라구요</DivText>
        <DivText style={{ width: 193, height: 43, left: 1185, top: 300 }}>최선장</DivText>
        <DivText style={{ width: 108, height: 12, left: 620, top: 290, fontSize: 13, lineHeight: 15 }}>2021.07.21 12:23</DivText>
        <DivText style={{ width: 582, height: 41, left: 620, top: 250, fontSize: 18, lineHeight: 21 }}>이 맛있는 사과 나만 먹어야지 히히</DivText>
        <Eyes style={{ top: 410 }} img src="img/eye.png"></Eyes>
        <ThumbsUp style={{ top: 440 }} img src="img/Thumbs_up.png"></ThumbsUp>
        <EyesCount style={{ top: 405 }}>61</EyesCount>
        <ThumbsUpCount style={{ top: 435 }}>28</ThumbsUpCount>
      </Link>
    </div >
    <Line style={{ top: 490, width: 800, left: 570 }} />
    <div style={{ top: 780 }}>
      <Link to="./content">
        <DivText style={{ top: 480 }}>제가 LA에 있었을 때가 생각나네요</DivText>
        <DivText style={{ width: 193, height: 43, left: 1185, top: 480 }}>박홈런</DivText>
        <DivText style={{ width: 108, height: 12, left: 620, top: 470, fontSize: 13, lineHeight: 15 }}>2021.07.21 12:17</DivText>
        <DivText style={{ width: 582, height: 41, left: 620, top: 430, fontSize: 18, lineHeight: 21 }}>엥 근데 제가요? 말입니다 La에서 좋은 기억들이 정말 많네요 사실 따지..</DivText>
        <Eyes style={{ top: 590 }} img src="img/eye.png"></Eyes>
        <ThumbsUp style={{ top: 620 }} img src="img/Thumbs_up.png"></ThumbsUp>
        <EyesCount style={{ top: 585 }}>43</EyesCount>
        <ThumbsUpCount style={{ top: 615 }}>2</ThumbsUpCount>
      </Link>
    </div>
    <Line style={{ top: 670, width: 800, left: 570 }} />
    <div>
      <Link to="./content">
        <DivText style={{ top: 660 }}>클렌징 오일 사용법이 궁금해요!</DivText>
        <DivText style={{ width: 193, height: 43, left: 1185, top: 670 }}>우남석</DivText>
        <DivText style={{ width: 108, height: 12, left: 620, top: 650, fontSize: 13, lineHeight: 15 }}>2021.07.20 19:45</DivText>
        <DivText style={{ width: 582, height: 41, left: 620, top: 610, fontSize: 18, lineHeight: 21 }}>클렌징 오일 클렌징 폼 들어는 많이 봤는데 사용법을 모르겠어요ㅜㅜ 계..</DivText>
        <Eyes style={{ top: 770 }} img src="img/eye.png"></Eyes>
        <ThumbsUp style={{ top: 800 }} img src="img/Thumbs_up.png"></ThumbsUp>
        <EyesCount style={{ top: 765 }}>213</EyesCount>
        <ThumbsUpCount style={{ top: 795 }}>64</ThumbsUpCount>
      </Link>
    </div>
    <NumberBox> {'<'}&nbsp; <Link to="./Board" style={{ textDecoration: 'none', color: 'white' }}>1</Link>&nbsp; 2&nbsp; 3&nbsp; 4&nbsp; 5&nbsp; 6&nbsp; 7&nbsp; 8&nbsp; 9&nbsp; 10&nbsp; {'>'} </NumberBox>
    <Link to="./Write">
      <Submit>&nbsp;&nbsp;&nbsp;&nbsp;글 작성하기</Submit>
      <Pencil src="img/pencil.png" style={{ height: 24, top: 885 }}></Pencil>
    </Link>
  </Base>
  );
}

export default Board2Presenter;


