import React, { useState } from "react";
import StaffRow from "../components/StaffRow";

function StaffPage() {
  const [values, setValues] = useState([]);
  const fetchResults = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setValues(response.results);
      })
      .catch(() => {
        alert(
          "Opps! Something went wrong. The issue may be temporarily. Please go back and try again."
        );
      });
  };
  return (
    <>
      <h2>Team Members</h2>
      <article>
        <p>
          <button id="browserReq" onClick={fetchResults} value="compute">
            Compute
          </button>{" "}
          ten staff members, from the
          <a href="https://randomuser.me/" target="_blank"></a>
        </p>

        <h3>Results:</h3>
        <div className="staff-table">
          <table>
            <caption className="staff-caption">
              Name, email, phone, and location
            </caption>
            <thead>
              <tr>
                <th>Portrait</th>
                <th>Name and Email</th>
                <th>Phone</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {values
                ? values.map((user, i) => <StaffRow user={user} key={i} />)
                : "Thang"}
            </tbody>
          </table>
        </div>
      </article>
    </>
  );
}

export default StaffPage;
