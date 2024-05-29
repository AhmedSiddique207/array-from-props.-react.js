import React from "react";

function UserDetails( props ) {
  return (
    <div>
      <b>Id:</b> &nbsp;
      <span>{props.user.id}</span>&nbsp;
      <b>Name:</b>&nbsp;
      <span>{props.user.name}</span>&nbsp;
      <b>Email:</b>&nbsp;
      <span>{props.user.email}</span>&nbsp;
    </div>
  );
}

export default UserDetails;
