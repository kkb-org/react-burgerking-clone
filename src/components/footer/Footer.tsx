import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 0.875rem;
  color: #818181;
  font-family: HGG;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

const Sitemap = styled.div`
  box-sizing: border-box;
  color: #000;
  font-family: HGG;

  @media screen and (max-width: 768px) {
    display: none !important;
    font-size: 17px;
  }
`;

const Menu = styled.div`
  font-family: HGG;
  color: #818181;
  font-size: 0.875rem;

  @media screen and (max-width: 768px) {
    height: 100%;
  }

  & > div {
    position: relative;
    max-width: 1144px;
    border-top: 1px solid #bba391;
    color: #bba391;
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 0.875rem;

    @media screen and (max-width: 768px) {
      min-width: 320px;
      padding: 35px 16px !important;
    }

    div {
      top: 42px;
      right: 0;
      box-sizing: border-box;
      color: #bba391;
      font-size: 0.875rem;
      font-family: HGG;

      @media screen and (max-width: 768px) {
        position: static;
      }
    }
  }
`;

const UnorderList = styled.ul`
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;

  & > li {
    float: left;
    box-sizing: border-box;
    list-style: none;
    display: list-item;
    text-align: -webkit-match-parent;

    @media screen and (max-width: 768px) {
      width: 25%;
    }
  }
`;

const Footer = (props: any) => {
  return (
    <Container>
      <Sitemap></Sitemap>
      <Menu>
        <div>
          <div>
            <UnorderList>
              <li></li>
              <li></li>
              <li></li>
            </UnorderList>
          </div>
          <div></div>
        </div>
      </Menu>
    </Container>
  );
};

export default Footer;
