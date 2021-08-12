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

const FindDetailPresenter = (props) => (
    <Section>
        <Title>Foundation recommended by men's skin</Title>
        <Content>당신의 피부톤에 맞는 파운데이션은 {props.numresult}호 이며 자세한 사항은 아래와 같습니다.</Content>
        {/* 호수는 Find에서 추출되는 값에 따라 바뀔 예정임 */}
        {props.Template}
        {console.log(props)}
        <div>{props.numresult}</div>
        <Scripts>피부에 알맞는 파운데이션을 사용하여 맑은 피부를 표현해 보세요</Scripts>
    </Section>

   );
   
   export default FindDetailPresenter;
   