import React from "react";
import Selective_item from "./Selective_item";
import Data from "../Dataset/Content_category.json";

const Selective_card = () => {
  return (
    <>
      <div className="selective-card">
        <div className="selective-angle-point"></div>

        {Data.map((item, index) => {
          return (
            <>
              <Selective_item key={index} lesson_content={item.title} />
            </>
          );
        })}
      </div>
    </>
  );
};
export default Selective_card;
