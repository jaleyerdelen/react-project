import React from "react";

function Card(props) {
  return (
    <div className="col-sm-4 mt-5">
      <div className="card">
        <img src={props.imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.secondTitle}</p>
          <h5 className="card-title">{props.price}</h5>
        </div>
      </div>
    </div>
  );
}
export default Card;