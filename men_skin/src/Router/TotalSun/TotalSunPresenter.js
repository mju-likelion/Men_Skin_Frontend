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
        <ImgBox src={img} />
        <TextBox><br /><br />{value}<br /><br />{price}</TextBox>
      </ProductDetail>
    </div >
  );
}

function TotalSunPresenter() {
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
      <a href="https://brand.naver.com/dr-g/products/4929685234?n_media=27758&n_query=%EB%8B%A5%ED%84%B0%EC%A7%80%EA%B7%B8%EB%A6%B0%EB%A7%88%EC%9D%BC%EB%93%9C%EC%97%85%EC%84%A0%ED%94%8C%EB%9F%AC%EC%8A%A4&n_rank=1&n_ad_group=grp-a001-02-000000021599339&n_ad=nad-a001-02-000000136514262&n_campaign_type=2&n_mall_id=gwsscosemtic&n_mall_pid=4929685234&n_ad_group_type=2&NaPm=ct%3Dksaaqgqo%7Cci%3D0ze00018lvnvqp8ZnvkS%7Ctr%3Dpla%7Chk%3Da206df66e3dcf5a24bfe747ccfcd2ae09aab0ba9" style={{ textDecoration: 'none', color: 'black' }} target='_blank'>
        <Page value="닥터지 <그린 마일드 업 선 플러스 35ml >" price="13,900원" img="img/sun1.png" />
      </a>
      <a href="https://brand.naver.com/roundlab/products/4886102737?NaPm=ct%3Dksaat0k8%7Cci%3D085d07b84a7f8ecdb3e5187821eccf38c901950f%7Ctr%3Dsls%7Csn%3D401069%7Chk%3D3a19a98e0ae3cf1cebc142770fd3b2903342c005" style={{ textDecoration: 'none', color: 'black' }} target='_blank'>
        <Page value="라운드랩 <자작나무 수분 선크림 50ml>" price="17,500원" img="img/sun2.png" />
      </a>
      <Page value="AHC <세이프온 라이트 선세럼 40ml>" price="20,800원" img="img/sun3.png" />
      <Page value="설화수 <상백크림 상백선크림 50ml>" price="76,500원" img="img/sun4.png" />
      <Page value="아네사선크림 <시세이도썬크림 UV선60ml>" price="23,990원" img="img/sun5.png" />
      <Page value="아이오페 <UV쉴드 선 프로텍터 60ml>" price="16,000원" img="img/sun6.png" />
      <Page value="키엘 <울트라 라이트 데일리 UV 디펜스 썬스크린 60ml>" price="35,980원" img="img/sun7.png" />
      <Page value="애터미 <선크림 SPF 50+>" price="7,900원" img="img/sun8.png" />
      <Page value="니베아 <프로텍트 앤 라이트 필 퍼펙트 선 세럼 90ml>" price="7,900원" img="img/sun9.png" />
      <Page value="헤라 <선메이트프로텍터SPF50+PA+++50ml>" price="32,300원" img="img/sun10.png" />
      <Page value="닥터지 <브라이트닝 업 선 플러스 50ml>" price="10,170원" img="img/sun11.png" />
      <Page value="메이크프렘 <유브이 디펜스 미 블루 레이 선 플루이드 200ml>" price="59,900" img="img/sun12.png" />
      <Page value="톤28 <자외선 차단거리 유기농 논나노 순한 무기자차 선크림 45g>" price="38,200원" img="img/sun13.png" />
      <Page value="바나나보트 <선크림 118ml(SPF100)>" price="20,930원" img="img/sun14.png" />
      <Page value="듀이셀 <필터링 크림 40ml>" price="28,000원" img="img/sun15.png" />
      <ProductBottom2 />
    </ProductBase>
    <ProductBottom1 />
  </Base>
  );
}

export default TotalSunPresenter;