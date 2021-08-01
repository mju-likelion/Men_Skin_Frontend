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

const SingupPresenter = () => (
    <Section>
    <Link to="./">
        <BigLogo src="img/BigLogo.png"/>
    </Link>
    </Section>


   );
   
   export default SingupPresenter;
   