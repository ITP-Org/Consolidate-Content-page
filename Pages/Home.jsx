import React from "react";
import Category_card from "../Components/Category_card";
import Selective_card from "../Components/Selective_card";
import Data from "../Dataset/Content_category.json";

function Home() {
  return (
    <div>
      <div className="header-title">
        <h1>Content-content Management</h1>
      </div>

      <div className="shade-card">
        <div className="sub-title">content Management</div>

        <div className="contents">
          <div className="content-div">
            {Data.map((item, index) => {
              return (
                <>
                  <Category_card key={index} content={item.title} />
                </>
              );
            })}
          </div>
          <div className="sub-content-div">
            <Selective_card />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
