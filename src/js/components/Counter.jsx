import React from "react";

const Counter = (props) => {
    return (
        <div className= "bg-dark d-flex text-white justify-content-center">
<div className="clock mx-3">
   <i className="fa-solid fa-clock"></i>
   </div>
       <div className="mx-2">{props.six}</div>
      <div className="mx-2">{props.five}</div>
      <div className="mx-2">{props.four}</div>
      <div className="mx-2">{props.three}</div>
      <div className="mx-2">{props.two}</div>
      <div className="mx-2">{props.one}</div>
   </div>
    )};
    export default Counter;
        
