import React from "react";
import "./style.css";

const FriendCard = (props) => {
  return (
    <div className="card" onClick={props.clickCard}>
      <div className="img-container" id={props.id}>
        <img className="card-img-top" src={props.image} alt={props.name} id={props.id}/>
      </div>
      <p>{props.id}</p>
    </div>
  );
}

export default FriendCard;
