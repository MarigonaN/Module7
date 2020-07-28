import React from "react";

export default ({ id, name, surname, image}) => (
  <li
    onClick={() => changeStudent(id)}
    className={studentSelected === id ? "border-thick card mt-3" : "card mt-3"}
    key={name}
    style={{ cursor: "pointer" }}
  >
    <div className="media card-body">
      <img className="book-image" src={image} alt="book cover" />
      <div>
        <p className="card-title font-weight-bold">{name}</p>
        <p>{surname}</p>
      </div>
    </div>
  </li>
);