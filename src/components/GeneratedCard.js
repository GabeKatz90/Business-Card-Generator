import React from "react";
import FormContainer from "./FormContainer";

function GenerateCard() {
  return (
    <div>
      <div>{FormContainer.onSubmit}</div>
    </div>
  )
}

// function GenerateCard() {
//   return (
//     <div className="card-info">
//       Generate Card

//       <div className="card-name"></div>
//       <div className="card-last-name">{lastName}</div>
//       {/* <div className="card-company">{company}</div>
//       <div className="card-designation">{designation}</div>
//       <div className="card-email">{email}</div>
//       <div className="card-mobile">{mobile}</div>
//       <div className="card-location">{location}</div> */}
//     </div>
//   )
// }

export default GenerateCard;