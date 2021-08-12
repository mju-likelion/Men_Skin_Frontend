import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Section = styled.body`
  background-color: #252525;
  width: 1920px;
  height: 100%;
  margin: 0;
  padding: 0;
  position:absolute; 
  top: 0px;
  left: 0px;
`;
const Title = styled.p`
position: absolute;
width: 1920px;
height: 50px;
left: 0px;
top: 0px;

font-family: Georgia;
font-size: 72px;
line-height: 117px;
text-align: center;
color: white;
`;

const Content = styled.p`
position: absolute;
width: 1920px;
height: 37px;
left: 0px;
top: 148px;

font-family: Peddana;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 39px;
text-align: center;

color: #FFFFFF;
`;

const Scripts = styled.div`
position: absolute;
width: 1187px;
height: 1px;
left: 367px;
top: 210px;
text-align: center;

font-size: 36px;
line-height: 59px;
color: #FFFFFF;
background: #FFFFFF;

`;
const Goods = styled.span`
position: absolute;
width: 321px;
height: 313px;
border-radius: 100%;
text-align: center;
line-height: 700px;

font-family: Peddana;
font-style: normal;
font-weight: normal;
font-size: 36px;

color: #FFFFFF;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


`;
const Coodsimg = styled.img`
position: absolute;
margin-top: 20px
width: 126px;
height: 287px;
&:hover{
  -webkit-transform: scale(1.3);
  transform: scale(1.3);

  transition-duration: 3s;
}
`;

const S_script = styled.p`
position: absolute;
margin-top: 390px;
color: white
`;

const FindDetailPresenter = (props) => (
  <Section>
    
    <Title>Foundation recommended by men's skin</Title>
    <Content>고객님에게 맞는 파운데이션은 {props.numresult}호수 이며 자세한 사항은 아래와 같습니다.</Content>
    {/* 호수는 Find에서 추출되는 값에 따라 바뀔 예정임 */}
    <Scripts>피부에 알맞는 파운데이션을 사용하여 맑은 피부를 표현해 보세요<br />
      <Link to="/">
      <img className="Logo_image" alt="Logo_image" src="img/logo.png" width="205" height="198" /></Link>
    </Scripts>
    <div style={{ marginTop: 440 }}></div>

    <a href="https://c11.kr/r9s2" target="_blank">
      <Goods style={{ background: '#C4C4C4', marginLeft: 149, marginBottom: 0 }}>
        자외선 차단 기능</Goods>
      <Coodsimg style={{ marginLeft: 160 }} src="img/Fine_foundation1.png"></Coodsimg>
    </a>

    <a href="https://c11.kr/r9t0" target="_blank">
      <Goods style={{ background: 'white', marginLeft: 587 }}>노세범 기능</Goods>
      <Coodsimg style={{ marginLeft: 685 }} src="img/Fine_foundation2.png"></Coodsimg>
    </a>

    <a href="https://c11.kr/r9wm" target="_blank">
      <Goods style={{ background: '#C4C4C4', marginLeft: 1025 }}>장시간 지속 기능</Goods>
      <Coodsimg style={{ marginLeft: 1040 }} src="img/Fine_foundation3.png"></Coodsimg>
    </a>

    <a href="https://c11.kr/r9wk" target="_blank">
      <Goods style={{ background: 'white', marginLeft: 1463 }}>자연스러운 연출</Goods>
      <Coodsimg style={{ marginLeft: 1510 }} src="img/Fine_foundation4.png"></Coodsimg>
    </a>


    <S_script style={{ marginLeft: 170 }} >- 레벨업 파운데이션 포 히어로즈 <br /> - SPF50+ PA++++<br /> - 올리브영 기준 20,000원</S_script>
    <S_script style={{ marginLeft: 640 }} >- VT 시카 리퀴드 파운데이션 슬림 핏 <br /> - 보송하게 밀착하는 타입<br /> - 정식 홈페이지 기준 35,000원</S_script>
    <S_script style={{ marginLeft: 1080 }} >- 뗑 이돌 롱라스팅 파운데이션 <br /> - 묻어남 없이 하루종일 지속되는 초밀착<br /> - 정식 홈페이지 기준 72,000원</S_script>
    <S_script style={{ marginLeft: 1540 }} >- 블랙 더블쿠션 내츄럴 <br /> - 가볍고 자연스러운 커버력<br /> - 정식 홈페이지 기준 20,230원</S_script>


  </Section>


);

export default FindDetailPresenter;
