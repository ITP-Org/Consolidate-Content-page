import React from "react";
import Expander from "../Components/Expander";
import Material_content from "../Components/Material_content";
import Data from "../Dataset/Content_category.json";
import Player from "../Components/Video_player";
import { BrowserRouter, Link } from "react-router-dom";
import Category_card from "../Components/Category_card";
import Selective_card from "../Components/Selective_card";

function Course_content() {
  return (
    <div className="lmsapp">
      <div className="rectangle"></div>

      <div className="grid1">
        <div className="titlename">
          <div className="title-header">Lectures</div>
        </div>

        <div className="Expander-class">
          <div className="Expander-class-inner">
            <div className="Expander-class-inner-1">
              {Data.map((item, index) => {
                return (
                  <>
                    <Category_card key={index} item={item} />
                  </>
                );
              })}
            </div>
            <div className="Expander-class-inner-2">
              <Selective_card />
            </div>
          </div>
        </div>
      </div>

      <div className="grid2">
        <h1
          onClick={() => {
            window.location.href = "/Video_resource";
          }}
          className="video-header"
        >
          Content Video Player
        </h1>
        <div className="video-player">
          <Player />
        </div>

        <div className="material-content">
          <Material_content />
        </div>
      </div>
    </div>
  );
}
export default Course_content;
