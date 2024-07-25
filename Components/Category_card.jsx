import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Category_card = ({ content }) => {
  return (
    <>
      <div className="category-item-content">
        <div className="rounded-rectangle">
          <div className="selection-dot"></div>
          <div className="image-circle">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" />
          </div>
          <div className="text-field">{content}</div>
          <div className="navigate-circle">
            <div className="inner-navigate-circle">
              <div className="navigate-icon">
                <FontAwesomeIcon
                  className="Navigation-icon"
                  icon={faAngleRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category_card;
