import React from "react";

function GenerateCard({firstName, lastName, company, designation, email, mobile, location}) {
  return (
    <div className="card-info">
      Generate Card
      <div className="card-name">{firstName}</div>
      <div className="card-last-name">{lastName}</div>
      <div className="card-company">{company}</div>
      <div className="card-designation">{designation}</div>
      <div className="card-email">{email}</div>
      <div className="card-mobile">{mobile}</div>
      <div className="card-location">{location}</div>
    </div>
  )
}

export default GenerateCard;