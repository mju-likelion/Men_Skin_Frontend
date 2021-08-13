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

const BigLogo = styled.img`
    position: absolute;
    width: 603px;
    height: 574px;
    left: 111px;
    top: 210px;
`;

const Login = styled.p`
position: absolute;
width: 118px;
height: 36px;
left: 850px;
top: 75px;

/* Header 1 */

font-family: Work Sans;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 40px;
letter-spacing: -0.02em;

color: #7C7C7C;
`;

const Slash = styled.img`
position: absolute;
left: 970px;
top: 110px;
`;

const Singup = styled.p`
position: absolute;
width: 142px;
height: 36px;
left: 1000px;
top: 75px;

/* Header 1 */

font-family: Work Sans;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 40px;
letter-spacing: -0.02em;

color: #FFFFFF;
`;

const Line = styled.div`

    position: absolute;
    width: 9px;
    height: 700px;
    left: 825px;
    top: 100px;
    background: #FFFFFF;
`;

const Select = styled.select`
width: 564px;
    height: 33px;
    background: #C4C4C4;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Box = styled.div`
position: absolute;
width: 602px;
height: 680px;
left: 1072px;
top: 168px;

background: #FFFFFF;
border-radius: 65px;

`;
const MyInput = styled.input`
    font-size: 14px;
    display: flex;
    width: 564px;
  height: 33px;
    border: none;
    align: right;
    background: #C4C4C4;
    
    &:focus {
    outline: none;
    
    }

`;
const SkinType = styled.div`
  position: absolute;
  width: 564px;
  height: 33px;
  left: 1082px;
  top: 550px;
  color: white;

`;

const Inputdiv_email = styled.div`
  position: absolute;
  width: 564px;
  height: 33px;
  left: 1090px;
  top: 250px;
`;

const Inputdiv_password = styled.div`
  position: absolute;
  width: 564px;
  height: 33px;
  left: 1090px;
  top: 350px;
`;
const Inputdiv_nickname = styled.div`
  position: absolute;
  width: 564px;
  height: 33px;
  left: 1090px;
  top: 450px;
`;
const Inputdiv_age = styled.div`
  position: absolute;
  width: 564px;
  height: 33px;
  left: 1090px;
  top: 650px;
`;

const Submit = styled.button`
  position: absolute;
  width: 300px;
  height: 50px;
  left: 1230px;
  top: 750px;


  background: #B4B4B4;
  border-radius: 33px;

  font-size: 25px;
  line-height: 29px;
  text-align: center;
`;


const SingupPresenter = (props) => (
  <Section>
    <Link to="./">
      <BigLogo src="img/BigLogo.png" />
    </Link>
    <Line />
    <Singup>SING UP</Singup>
    <Slash src="img/slash.png" alt="slash" />
    <Link to="./Login">
      <Login>LOG IN</Login>
    </Link>
    <Box />
    <Inputdiv_email>
      E-mail
      <MyInput
        // id="cr_user_id"
        // value={cr_id}
        // onChange={(e) => props.SetEmail(e)} 
        placeholder="<UserID>@OOO.com"
      // required
      />
    </Inputdiv_email>
    <Inputdiv_password>
      Pass word
      <MyInput
        // id="cr_pass_word"
        // value={cr_pwd}
        // onChange={(e) => props.SetPw(e)} 
        placeholder="사용하실 비밀번호를 입력해주세요"
      // required
      />
    </Inputdiv_password>
    <Inputdiv_nickname>
      Nickname
      <MyInput
        // id="nickname"
        // value={nne}
        // onChange={(e) => props.SetUsername(e)} 
        placeholder="사용하실 닉네임을 입력해주세요"
      // required
      />
    </Inputdiv_nickname>
    <SkinType className="Sing_up">
      sda
      <Select  >
        <option value="" hidden>
          피부타입을 설정하세요
        </option>
        <option value="1">건성</option>
        <option value="2">지성</option>
        <option value="3">중성</option>
        <option value="4">복합성</option>
      </Select>
    </SkinType>
    <Inputdiv_age>
    Age
    <MyInput
        // id="nickname"
        // value={nne}
        // onChange={(e) => props.SetAge(e)}
        placeholder="탄생년도를 적어주세요 ex)1998년2월24일 → 19980224"
      // required
      />
    </Inputdiv_age>
    <Submit >회원가입하기</Submit>

  </Section>

);

export default SingupPresenter;
