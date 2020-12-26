import React from "react";
import "./Gridmain.css";

const GridLayout = () => {
  return (
    <div className="grid-wrappper">
      <div className="div1">LOGO</div>
      <div className="div2">MENU</div>
      <div className="div3">SLIDER</div>
      <div className="div4">SIDEBAR</div>

      <div className="div5">CARDS</div>
      <div className="div6">CARDS</div>
      <div className="div7">CARDS</div>
      <div className="div8">IMAGE</div>
      <div className="div9">PARAGRAPH</div>

      <div className="div10" style={{ justifyContent: "center" }}>
        <div className="nested-div1">SERVICE </div>
        <div className="nested-div2">SERVICE</div>
        <div className="nested-div3">SERVICE</div>
        <div className="nested-div4">SERVICE</div>
      </div>
      <div className="div11">FOOTER</div>
    </div>
  );
};

export default GridLayout;
