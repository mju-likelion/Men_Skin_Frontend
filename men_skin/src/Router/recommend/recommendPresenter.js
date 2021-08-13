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
  padding-left: 40px;
  padding-top: 30px;
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
  margin-top:4470px;
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

function Page1({ value, price, img }) {
  return (
    <div>
      <ProductDetail>
        <Link to="./" style={{ textDecoration: 'none', color: 'black' }}>
          <ImgBox src={img} style={{marginLeft:27}}/>
          <TextBox><br /><br />{value}<br /><br />{price}</TextBox>
        </Link>
      </ProductDetail>
    </div >
  );
}

function recommendPresenter() {
  return (<Base>
    <Link to="./">
      <Logo src="img/logo.png" />
    </Link>
    <TopBar>
      <Placing>
        <Link to="./" style={{ textDecoration: 'none', color: 'black' }}>Home </Link> {'>'} Men's Pick
      </Placing>
    </TopBar>
    <ProductBase>
      <Page value="닥터지 <그린 마일드 업 선 플러스 35ml >" price="13,900원" img="img/sun1.png" />
      <Page value="라운드랩 <자작나무 수분 선크림 50ml>" price="17,500원" img="img/sun2.png" />
      <Page value="AHC <세이프온 라이트 선세럼 40ml>" price="20,800원" img="img/sun3.png" />
      <Page1 value="포맨트 <시그니처 퍼퓸>" price="39,000원" img="img/perfume_1.png" />
      <Page1 value="더블유드레스룸 &nbsp;&nbsp;<드레스 퍼퓸 - 70ml>" price="4,900원" img="img/perfume_2.png" />
      <Page1 value="에이 노멀 <노멀 퍼퓸>" price="8,900원" img="img/perfume_3.png" />
      <Page value="포르맨즈 <슈퍼 커버스틱 비비크림 파운데이션>" price="9,900원" img="img/cosmetic_1.jpg" />
      <Page value="오디너리 <파운데이션 & 프라이머>" price="32,000원" img="img/cosmetic_2.jpg" />
      <Page value="엔모먼트 <올인원 남자 비비크림>" price="28,900원" img="img/cosmetic_3.png" />
      <Page value="닥터지 <그린 마일드 업 선 플러스 35ml >" price="13,900원" img="img/sun1.png" />
      <Page value="라운드랩 <자작나무 수분 선크림 50ml>" price="17,500원" img="img/sun2.png" />
      <Page value="AHC <세이프온 라이트 선세럼 40ml>" price="20,800원" img="img/sun3.png" />

      <Page value="톤28 <자외선 차단거리 유기농 논나노 순한 무기자차 선크림 45g>" price="38,200원" img="img/sun13.png" />
      <Page value="바나나보트 <선크림 118ml(SPF100)>" price="20,930원" img="img/sun14.png" />
      <Page value="듀이셀 <필터링 크림 40ml>" price="28,000원" img="img/sun15.png" />
      <Page1 value="더블유드레스룸 <드레스 퍼퓸 - 150ml>" price="7,900원" img="img/perfume_4.png" />
      <Page1 value="레르드사봉 <이노센트 타임 50ml>" price="17,000" img="img/perfume_5.png" />
      <Page1 value="레르드사봉 <이터널 모먼트 50ml>" price="18,000" img="img/perfume_6.png" />
      <Page value="포르맨즈 <슈퍼 커버스틱 비비크림 파운데이션>" price="9,900원" img="img/cosmetic_1.jpg" />
      <Page value="오디너리 <파운데이션 & 프라이머>" price="32,000원" img="img/cosmetic_2.jpg" />
      <Page value="엔모먼트 <올인원 남자 비비크림>" price="28,900원" img="img/cosmetic_3.png" />
      <Page value="설화수 <상백크림 상백선크림 50ml>" price="76,500원" img="img/sun4.png" />
      <Page value="아네사선크림 <시세이도썬크림 UV선60ml>" price="23,990원" img="img/sun5.png" />
      <Page value="아이오페 <UV쉴드 선 프로텍터 60ml>" price="16,000원" img="img/sun6.png" />
      <ProductBottom2 />
    </ProductBase>
    <ProductBottom1 />
  </Base>
  );
}

export default recommendPresenter;