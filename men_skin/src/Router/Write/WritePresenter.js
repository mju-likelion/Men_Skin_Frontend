import React from "react";
import { Link } from 'react-router-dom';
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

const MainText = styled.p`
  position: absolute;
  width: 200px;
  height: 47px;
  left: 386px;
  top: 268px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #FFFFFF;

`;

const TitleInput = styled.input`
  font-size: 20px;
  width: 1036px;
  height: 51px;
  left: 520px;
  top: 800px;
  background: white;
  border-radius: 20px;
  align: right;

  
  &:focus {
  outline: none;
`;

const InputDiv = styled.input`
  font-size: 20px;
  width: 1036px;
  height: 51px;
  left: 520px;
  top: 800px;
  background: white;
  border-radius: 20px;
  text-align:center;

`;
const ContentDiv = styled.input`
  font-size: 20px;
  position: absolute;
  width: 1036px;
  height: 51px;
  left: 15px;
  top: 523px;
  background: white;
  border-radius: 30px;
  text-align:center;
`;

const Submit = styled.button`
  font-size: 20px;
  position: absolute;
  width: 320px;
  height: 58px;
  left: 838px;
  top: 990px;

  background: #FFFFFF;
  border-radius: 20px;
`;

function WritePresenter() {
  return (<Base>
    <Link to="./">
      <Logo src="img/logo.png" />
    </Link>
    <Line />
    <MainText>게시글 작성</MainText>
    <InputDiv placeholder="제목을 입력해주세요" style={{ marginLeft: 460, marginTop: 381, width: 1036 }}></InputDiv>
    <MainText style={{ width: 76, top: 360 }}>제목</MainText>
    <ContentDiv placeholder="제목을 입력해주세요" style={{ marginLeft: 460, width: 1036, height: 412 }} ></ContentDiv>
    <MainText style={{ width: 76, top: 495 }}>내용</MainText>
    <Submit>등록하기</Submit>
  </Base>
  );
}

export default WritePresenter;
