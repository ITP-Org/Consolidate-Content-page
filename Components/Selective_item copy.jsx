import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Selective_item = ({ lesson_content }) => {
  return (
    <>
      <div className="selective-item">
        <div className="rounded-rectangle">
          <div className="sub-text-field">{lesson_content.title}</div>
          <div className="navigate-circle">
            <div className="inner-navigate-circle">
              <div className="navigate-icon">
                {" "}
                <FontAwesomeIcon
                  className="Navigation-icon"
                  icon={faAngleRight}
                  color="#7e51e6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Selective_item;
