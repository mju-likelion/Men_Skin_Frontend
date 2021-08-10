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

const TopBar = styled.div`
  position: absolute;
  width: 1824px;
  height: 68px;
  left: 39px;
  top: 198px;
  background: rgba(255, 255, 255, 0.85);
`;


const ProductBase = styled.div`
  position: absolute;
  width: 1824px;
  height: 84.5%;
  left: 39px;
  right: 48px;
  top: 265px;
  background: rgba(255, 255, 255, 0.92);
  overflow-y: scroll;
`;


const ProductDetail = styled.div`
  width: 608px;
  height: 560px;
  background: #ffffff;
  float: left;
  width: 407px;
  height: 483px;
  margin-left: 160px;
  margin-top: 76px;

`;

const TextBox = styled.p`
  text-align: center;
  width: 300px;
  margin : 0 auto;
  font-family: Georgia;
  font-size: 18x;
  font-weight: 500;
  margin-top:350px;

`;

const ImgBox = styled.img`
  height: 330px;
  margin-left: 40px;
  margin-top: 30px;
  display: block;
  position:absolute;

`;

const Placing = styled.span`
  font-family: Georgia;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 65px;
  height: 68px;
  position: absolute;
  margin-left:10px; 
`;

const ProductBottom1 = styled.div`
  position: relative;
  width: 1807px;
  height: 25px;
  background:#252525;
  margin-top:1049px;
`;

const ProductBottom2 = styled.div`
  position: relative;
  width: 1807px;
  height: 76px;
  margin-top:2790px;
`;


function Page({ value, price, img }) {
  return (
    <div>
      <ProductDetail>
        <Link to="./" style={{ textDecoration: 'none', color: 'black' }}>
          <ImgBox src={img} />
          <TextBox><br /><br />{value}<br /><br />{price}</TextBox>
        </Link>
      </ProductDetail>
    </div >
  );
}

function TotalSkinPresenter() {
  return (<Base>
    <Link to="./">
      <Logo src="img/logo.png" />
    </Link>
    <TopBar>
      <Placing>
        <Link to="./" style={{ textDecoration: 'none', color: 'black' }}>Home </Link> {'>'} Sun Care
      </Placing>
    </TopBar>
    <ProductBase>
      <Page value="이니스프리 <포레스트 포맨 프레시 스킨케어 2종 세트>" price="24,030원" img="img/skin1.jpg" />
      <Page value="헤라 <헤라옴므 스폐셜 2종 기획세트 / 남성 스킨케어 기초>" price="43,180원" img="img/skin2.jpg" />
      <Page value="니베아 포맨 <스킨케어 3종 세트>" price="33,200원" img="img/skin3.jpg" />
      <Page value="헤라 <헤라옴므 베이직 스폐셜 2종 세트>" price="11,610원" img="img/skin4.jpg" />
      <Page value="레노마옴므 <리프레싱 대용량 남성 스킨케어세트(스킨 + 로션)>" price="41,000원" img="img/skin5.png" />
      <Page value="프리메라 <맨 오가니언스 2종 남성 스킨케어 기획세트>" price="51,000원" img="img/skin6.jpg" />
      <Page value="바르테라 <남성 스킨케어 3종>" price="17,000원" img="img/skin7.jpg" />
      <Page value="28레미디 <남자 아크네 스킨케어 세럼 3종세트>" price="75,000원" img="img/skin8.png" />
      <Page value="니베아 포맨 <스킨케어 2종 (스킨+로션)>" price="12,090원" img="img/skin9.jpg" />
      <Page value="SNP  <타임리스 블랙 옴므 스킨케어 2종 세트>" price="41,450원" img="img/skin10.jpg" />
      <Page value="아리아니 <카르텔 남성 스킨케어 2종세트 카르텔옴므>" price="12,070원" img="img/skin11.jpg" />
      <Page value="애터미 <남자기초 옴므 스킨 케어 3종 세트>" price="11,500원" img="img/skin12.jpg" />
      <Page value="니베아 포맨 <스킨케어 2종세트>" price="13,670원" img="img/skin13.jpg" />
      <Page value="꽃을든남자 <엠파워 스킨케어 2종 세트>" price="23,800원" img="img/skin14.png" />
      <Page value="비버리힐즈폴로클럽 <프라임옴므 스킨케어 2종세트>" price="21,990원" img="img/skin15.jpg" />
      <ProductBottom2 />
    </ProductBase>
    <ProductBottom1 />
  </Base>
  );
}

export default TotalSkinPresenter;