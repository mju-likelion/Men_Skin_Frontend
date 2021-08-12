import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
const Section = styled.body`
  background-color: #252525;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  position:absolute; 
  top: 0px;
  left: 0px;
`;
const Logo = styled.img`
position: absolute;
width: 205px;
height: 198px;
left: 858px;
top: 0px;
`;
const Line = styled.div`
position: absolute;
width: 1824px;
height: 2px;
left: 39px;
top: 198px;

background: #FFFFFF;
`;
const Category = styled.h3`
position: absolute;
width: 77px;
height: 52px;
left: 463px;
top: 242px;

font-family: Work Sans;
font-style: normal;
font-weight: 100;
font-size: 24px;
line-height: 28px;
letter-spacing: -0.02em;

color: #FFFFFF;
`;

const Title = styled.h2`
position: absolute;
width: 981px;
height: 48px;
left: 457px;
top: 306px;

font-family: Work Sans;
font-style: normal;
font-weight: bold;
font-size: 37px;
line-height: 43px;
letter-spacing: -0.02em;

color: #FFFFFF;
`;

const Name = styled.p`
position: absolute;
width: 121px;
height: 31px;
left: 457px;
top: 390px;

font-family: Work Sans;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
letter-spacing: -0.02em;

color: #FFFFFF;
`;

const Clock = styled.div`
position: absolute;

left: 457px;
top: 462px;

`;

const ClockP = styled.p`
position: absolute;
width: 178px;
height: 31px;
left: 518px;
top: 450px;

font-family: Work Sans;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
letter-spacing: -0.02em;

color: #FFFFFF;
`;


const LookUP = styled.div`
position: absolute;

left: 727px;
top: 462px;
`;

const LookUPP = styled.p`
position: absolute;
width: 178px;
height: 31px;
left: 790px;
top: 450px;

font-family: Work Sans;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
letter-spacing: -0.02em;

color: #FFFFFF;
`;

const Comment = styled.div`
position: absolute;

left: 886px;;
top: 462px;`;
const CommentP = styled.p`
position: absolute;
width: 178px;
height: 31px;
left: 950px;
top: 450px;

font-family: Work Sans;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
letter-spacing: -0.02em;

color: #FFFFFF;`;
const Coment_p = styled.p`
font-family: Work Sans;
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 28px;
letter-spacing: -0.02em;

color: #FFFFFF;

`;

const Content = styled.div`


width: 988px;
height: auto;
margin: 0 auto;

font-family: Work Sans;
font-style: normal;
font-weight: 300;
font-size: 24px;  
line-height: 28px;
letter-spacing: -0.02em;

color: #FFFFFF;


`;

const MyInput = styled.input`
    font-size: 20px;
    display: flex;
    width: 1010px;
    height: 105px;
    left: 450px;
    top: 797px;
    border: none;
    align: right;
    background: white;
    
    &:focus {
    outline: none;
    
    }

`;

const ContentPresenter = () => (
  <Section>
    <Link to="/">
      <Logo src="img/Logo.png" />
    </Link>
    <Line></Line>
    {/* DB값을 불러 카테고리 이름을 넣을 예정 */}
    <Category>건성</Category>

    {/* DB값을 불러 제목 을 넣을 예정 */}
    <Title>제발 화장품은 사서 바르세요!</Title>
    <Name>김불닭</Name>
    <Clock>
      <img src="img/clock.png" />
    </Clock>
    <ClockP>
      2021.07.23 15:28
    </ClockP>

    <LookUP>
      <img src="img/eye.png" />
    </LookUP>
    <LookUPP>
      13
    </LookUPP>

    <Comment>
      <img src="img/comment.png" />
    </Comment>
    <CommentP>
      24
    </CommentP>
    <div style={{ marginTop: 530, marginLeft: 600 }} />
    <Content>우리집 고양이 츄르를 좋아해 우리집 고양이 츄르를 좋아해 우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해우리집 고양이 츄르를 좋아해 그래서 우리집 고양이 돼지야 🐷</Content>

    <img style={{ marginLeft: 455 }} src="img/Coment_Line.png" />
    <Coment_p style={{ marginLeft: 455 }}>댓글 20</Coment_p>
    <div style={{ marginTop: 10, marginLeft: 455 }}>
      <MyInput
        // id="pass_word"
        // value={pwd}
        // onChange={onChangePwd}
        placeholder="댓글을 입력해주세요"
      // required
      />
    </div>
    <img style={{ marginLeft: 455, marginTop: 30 }} src="img/Coment_Line.png" />

    {/* 댓글의 id가 0이 될때까지 반복반복반복! */}
    <Coment_p style={{ marginLeft: 455 }}>김엽떡</Coment_p>
    <Coment_p style={{ marginLeft: 455, fontSize:18 }}>엽떡A세트에 치츠추가 해주세요!!</Coment_p>
    <img style={{ marginLeft: 455, marginBottom: 20 }} src="img/Coment_Line.png" />


    




  </Section>


);

export default ContentPresenter;
