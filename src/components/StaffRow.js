import React from "react";

function StaffRow({ user }) {
  return (
    <tr>
      <td>
        <img className="td-image" src={user.picture.thumbnail} alt="portrait" />
      </td>

      <td>
        <a href="mailto:{user.email}">
          {user.name.first}
          {user.name.last}
        </a>
      </td>
      <td>{user.phone}</td>
      <td>{user.location.city}</td>
    </tr>
  );
}

export default StaffRow;


