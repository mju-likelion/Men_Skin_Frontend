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
  margin-left: 65px;
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

function TotalPerfumePresenter() {
  return (<Base>
    <Link to="./">
      <Logo src="img/logo.png" />
    </Link>
    <TopBar>
      <Placing>
        <Link to="./" style={{ textDecoration: 'none', color: 'black' }}>Home </Link> {'>'} Perfume
      </Placing>
    </TopBar>
    <ProductBase>
      <Page value="포맨트 <시그니처 퍼퓸>" price="39,000원" img="img/perfume_1.png" />
      <Page value="더블유드레스룸 &nbsp;&nbsp;<드레스 퍼퓸 - 70ml>" price="4,900원" img="img/perfume_2.png" />
      <Page value="에이 노멀 <노멀 퍼퓸>" price="8,900원" img="img/perfume_3.png" />
      <Page value="더블유드레스룸 <드레스 퍼퓸 - 150ml>" price="7,900원" img="img/perfume_4.png" />
      <Page value="레르드사봉 <이노센트 타임 50ml>" price="17,000" img="img/perfume_5.png" />
      <Page value="레르드사봉 <이터널 모먼트 50ml>" price="18,000" img="img/perfume_6.png" />
      <Page value="포맨트 <시그니처 퍼퓸 코튼 50ml >" price="22,000" img="img/perfume_7.png" />
      <Page value="몬스터스튜디오 <몬스터 드레스퍼퓸 300ml>" price="17,000" img="img/perfume_8.png" />
      <Page value="플로랑 <드레스퍼퓸 500ml>" price="18,000" img="img/perfume_9.png" />
      <Page value="마크제이콥스 <스플래쉬 페어 EDT 100ml>" price="22,000" img="img/perfume_10.png" />
      <Page value="셀러버 <옴므 포켓 패브릭 퍼퓸>" price="17,000" img="img/perfume_11.png" />
      <Page value="멈칫 <섬유향수 70ml>" price="18,000" img="img/perfume_12.png" />
      <Page value="포맨트 <시그니처 코튼 허그 스프레이 200ml>" price="19,900원" img="img/perfume_13.png" />
      <Page value="베르사체 <에로스 맨 EDT>" price="35,800원" img="img/perfume_14.png" />
      <Page value="에이노멀 <노멀 와이 퍼퓸>" price="17,900원" img="img/perfume_15.png" />
      <ProductBottom2 />
    </ProductBase>
    <ProductBottom1 />
  </Base>
  );
}

export default TotalPerfumePresenter;