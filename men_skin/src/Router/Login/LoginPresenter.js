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
const Line = styled.div`
position: absolute;
width: 9px;
height: 700px;
left: 825px;
top: 100px;
background: #FFFFFF;
`;
const Box = styled.div`
position: absolute;
width: 602px;
height: 559px;
left: 1072px;
top: 168px;

background: #FFFFFF;
border-radius: 65px;

`;
const InputDiv = styled.div`
    position: absolute;
    width: 472px;
    height: 41px;
    left: 1115px;
    top: 350px;
    opacity: 0.5;
`;
const MyInput = styled.input`
    font-size: 20px;
    display: flex;
    width: 472px;
    height: 50px;
    border: none;
    align: right;
    background: #C4C4C4;
    
    &:focus {
    outline: none;
    
    }

`;

const InputDiv_pass = styled.div`
    position: absolute;
    width: 472px;
    height: 41px;
    left: 1115px;
    top: 518px;

    opacity: 0.5;
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

color: #FFFFFF;
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

color: #7C7C7C;
`;

const Loginbutton = styled.div`
position: absolute;
width: 412px;
height: 50px;
left: 1157px;
top: 650px;

background: #B4B4B4;
border-radius: 33px;

font-size: 30px;
line-height: 29px;
text-align: center;
line-height: 50px;

color: #000000;

`;


const LoginPresenter = (props) => (
    
    <Section>
        <Link to="./">
            <BigLogo src="img/BigLogo.png"/>            
        </Link>
        <Line/>
        <Box/>
        <Login>LOG IN</Login>
        <Slash src="img/slash.png" alt="slash"/>
        <Link to="./Singup">
            <Singup>SING UP</Singup>
        </Link>
        
            <InputDiv>
            E-mail
            <MyInput 
                // id="user_id"
                // value={id}
                // onChange={props.SetId}
                placeholder="<UserID>@OOO.com"
                // required
              />
            </InputDiv>
            <InputDiv_pass>
            password
            <MyInput type="password"
                // id="pass_word"
                // value={pwd}
                // onChange={props.SetPw}
                placeholder="비밀번호를 입력해주세요"
                // required
            />
            </InputDiv_pass>
            <Loginbutton disabled={props.disabled}>로그인</Loginbutton>
            

            
            
        
        

    </Section>

   );
   
   export default LoginPresenter;
   