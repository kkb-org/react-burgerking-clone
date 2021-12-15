import React from "react";

import styled from "styled-components";

const Category = (props: any) => {
  const ListItem = styled.li`
    background-image: url(${props.backgroundImage});
    background-repeat: no-repeat;
    background-position: top;

    @media screen and (max-width: 768px) {
      width: 33.333%;
      margin-top: 36px;
      padding: 50px 0 0;
      font-size: 0.875rem;
      border: none;
      line-height: 134%;
      color: #e22219;
      background-size: auto 45px;
    }

    @media screen and (min-width: 769px) {
      font-size: 1.5rem;
      float: left;
      width: 16.666%;
      padding: 100px 0 8px;
      font-size: 1.125rem;
      line-height: 134%;
      color: #2e2e2e;
    }
  `;

  const EM = styled.em`
    display: block;
    font-family: dabanggu;
    font-weight: 400;
    color: #e22219;
    font-style: normal;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
      font-size: 0.875rem;
    }

    @media screen and (min-width: 769px) {
    }
  `;

  return (
    <ListItem>
      <EM>{props.text}</EM>
    </ListItem>
  );
};

export default Category;
