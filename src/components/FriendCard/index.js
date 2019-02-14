import React from "react";
import "./style.css";

const FriendCard = (props) => {
  return (
    <div className="card" onClick={props.handleIncrement} >
      <div className="img-container">
        <img className="card-img-top" src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default FriendCard;
