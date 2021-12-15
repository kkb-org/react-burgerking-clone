import React from "react";
import styled from "styled-components";

import csBg from "../../public/cs/cs_bg.png";
import csBgExtended from "../../public/cs/cs_bg_extended.png";
import phone from "../../public/phone.png";

const HomeCSContainer = styled.div`
  height: 100%;
  background-image: url(${csBgExtended});
  background-repeat: no-repeat;
  background-position: top;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 0.75rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    position: relative;
    min-width: 320px;
    height: 100%;
    padding: 29px 16px 16px 24px;
    height: 180px;
    font-size: 0.75rem;
    color: #fff;
    background-image: url(${csBg});
    background-size: 100% 100%;
  }
`;

// ${({test}) => {
//   if(test){
//     return `
//     `
//   }
// }}
// const Content = styled.div<{ test: boolean }>`
const Content = styled.div`
  padding: 0;
  text-align: start;
  height: 100%;

  & > h2 {
    font-family: dabanggu;
    font-weight: 400;
    margin: 0;
    padding: 0;

    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    @media screen and (max-width: 768px) {
      color: #fff;
      margin-bottom: 10px;
      font-size: 1rem;
      line-height: 100%;
    }
  }
`;

const PForWeb = styled.p`
  font-family: HGG;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;

const PForMob = styled.p`
  font-family: HGG;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  @media screen and (max-width: 768px) {
    display: block !important;
    font-size: 0.75rem;
    color: #fff;
  }
`;

const Call = styled.p`
  white-space: nowrap;
  line-height: 100%;
  font-family: dabanggu;
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-position: 0;
  white-space: nowrap;
  right: 0;
  top: 50%;
  height: 1em;

  @media screen and (max-width: 768px) {
    position: static;
    display: block;
    margin: 45px 0 0 -4px;
    padding-left: 34px;
    font-size: 1.875rem;
    font-weight: bold;
    font-size: 1.875rem;
    background-size: 24px auto;
  }

  @media screen and (min-width: 769px) {
  }
`;

const HomeCS = (props: any) => {
  return (
    <HomeCSContainer>
      {/* <Content test={test}> */}
      <Content>
        <h2>집에서 만나는 버거킹</h2>
        <PForWeb>
          딜리버리 전화주문 안내 10:00–22:00 / 연중무휴 (매장별로 상이할 수
          있습니다.)
        </PForWeb>
        <PForMob>
          딜리버리 전화주문 안내 10:00–22:00 <br /> 연중무휴 (매장별로 상이할 수
          있습니다.)
        </PForMob>
        <Call>
          <strong>1599-0505</strong>
        </Call>
      </Content>
    </HomeCSContainer>
  );
};

export default HomeCS;
