import React from "react";

const Counter = (props) => {
    return (
        <div className= "bg-black d-flex text-white justify-content-center display-5">
<div className="clock mx-3">
    
   <p className="card-text ">
    <i className="fa-regular fa-clock"></i>
    </p>
   </div>
       <div className="mx-2">{props.six}</div>
      <div className="mx-2">{props.five}</div>
      <div className="mx-2">{props.four}</div>
      <div className="mx-2">{props.three}</div>
      <div className="mx-2">{props.two}</div>
      <div className="mx-2">{props.one}</div>
   </div>
    );
};
    export default Counter;
        
