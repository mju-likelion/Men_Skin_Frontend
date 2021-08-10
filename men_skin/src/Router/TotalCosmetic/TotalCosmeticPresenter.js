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

function TotalCosmeticPresenter() {
  return (<Base>
    <Link to="./">
      <Logo src="img/logo.png" />
    </Link>
    <TopBar>
      <Placing>
        <Link to="./" style={{ textDecoration: 'none', color: 'black' }}>Home </Link> {'>'} Cosmetic
      </Placing>
    </TopBar>
    <ProductBase>
      <Page value="포르맨즈 <슈퍼 커버스틱 비비크림 파운데이션>" price="9,900원" img="img/cosmetic_1.jpg" />
      <Page value="오디너리 <파운데이션 & 프라이머>" price="32,000원" img="img/cosmetic_2.jpg" />
      <Page value="엔모먼트 <올인원 남자 비비크림>" price="28,900원" img="img/cosmetic_3.png" />
      <Page value="아이오페 <맨 에어 쿠션 16g>" price="15,450원" img="img/cosmetic_4.png" />
      <Page value="시오뉴 <남성 비비 크림>" price="16,800원" img="img/cosmetic_5.png" />
      <Page value="비레디 <레벨 업 파운데이션 포 히어로즈 30ml>" price="14,000원" img="img/cosmetic_6.jpg" />
      <Page value="바미어 <소프트웨어 맨즈밤 12g>" price="9,900원" img="img/cosmetic_7.jpg" />
      <Page value="오브제 <내추럴 커버 파운데이션>" price="36,800원" img="img/cosmetic_8.jpg" />
      <Page value="꽃을든남자 <에너지팩토리 스킨핏 맨즈밤 어두운피부용 50ml>" price="9,400원" img="img/cosmetic_9.png" />
      <Page value="그라펜 <매치업 파운데이션 40ml + 엣지 컷 퍼프>" price="49,800원" img="img/cosmetic_10.png" />
      <Page value="28 레미디 <쥬브나일 썬 비비 포맨>" price="25,000원" img="img/cosmetic_11.jpg" />
      <Page value="더비스타 <더클래스 옴므쿠션 남성파운데이션>" price="15,500" img="img/cosmetic_12.jpg" />
      <Page value="UFC <네츄럴 커버파운데이션>" price="15,120원" img="img/cosmetic_13.png" />
      <Page value="제이엠알피 <옴므 스타일 쿠션 남성용 파운데이션>" price="19,500원" img="img/cosmetic_14.png" />
      <Page value="헤지스맨 <히든 팁스 시카 비비 쿠션 14g>" price="34,200원" img="img/cosmetic_15.jpg" />
      <ProductBottom2 />
    </ProductBase>
    <ProductBottom1 />
  </Base>
  );
}

export default TotalCosmeticPresenter;