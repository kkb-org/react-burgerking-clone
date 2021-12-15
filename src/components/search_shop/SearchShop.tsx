import React from "react";
import "./SearchShop.css";
import Category from "./category/Category";

import deliveryIcon from "../../public/category/category_delivery.gif";
import kingIcon from "../../public/category/category_king.gif";
import driveIcon from "../../public/category/category_drive.gif";
import twoFourIcon from "../../public/category/category_24.gif";
import morningIcon from "../../public/category/category_morning.gif";
import parkingIcon from "../../public/category/category_parking.gif";

const SearchShop = (props: any) => {
  return (
    <div className="Search-shop">
      <div className="Top">
        <h2 className="Title">매장찾기</h2>

        <p className="Content">고객님 주변에 있는 버거킹을 찾아보세요!</p>

        <div className="Search-btn">
          <a className="Search-link">
            <span className="Search-link-text">매장찾기</span>
          </a>
        </div>

        <ul className="Category-list">
          <Category text="딜리버리" backgroundImage={deliveryIcon} />
          <Category text="킹오더" backgroundImage={kingIcon} />
          <Category text="드라이브 스루" backgroundImage={driveIcon} />
          <Category text="24시간" backgroundImage={twoFourIcon} />
          <Category text="아침메뉴" backgroundImage={morningIcon} />
          <Category text="주차공간" backgroundImage={parkingIcon} />
        </ul>
      </div>
    </div>
  );
};

export default SearchShop;
