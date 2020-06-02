import React from "react";
import ContentLoader from "react-content-loader";

const OwnerCardLoader = (props) => (
  <div className="pb-1" style={{ width: props.width }}>
    <ContentLoader
      height={props.height}
      width={props.widt}
      speed={2}
      primaryColor="#cccccc"
      secondaryColor="#f3f3f3"
    ></ContentLoader>
  </div>
);

export default OwnerCardLoader;
