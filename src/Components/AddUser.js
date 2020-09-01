import React, { useState } from "react";
import axios from "axios";

export default function AddUser() {
  const [first_name, addFirst] = useState("");
  const [last_name, addLast] = useState("");
  const [id, addID] = useState(0);
  const [email, addEmail] = useState("");

  const handleClick = (event) => {
    //console.log(`${id}, ${first_name}, ${email}, ${last_name}`);
    event.preventDefault();
    axios
      .post(
        "https://reqres.in/api/users",
        {
          id: id,
          first_name: first_name,
          last_name: last_name,
          email: email,
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        alert(`server responded
                id: ${response.data.id}
                first_name: ${response.data.first_name}
                last_name: ${response.data.last_name}
                email: ${response.data.email}
                createdAt: ${response.data.createdAt}`);
      });
    //console.log(response.data);
  };
  function handleChange1(event) {
    addFirst(event.target.value);
  }
  function handleChange2(event) {
    addLast(event.target.value);
  }
  function handleChange3(event) {
    addID(event.target.value);
  }
  function handleChange4(event) {
    addEmail(event.target.value);
  }
  return (
    <div style={{ padding: 20 }}>
      <div>
        <h1>Add User</h1>
      </div>
      <div>
        <form onSubmit={handleClick}>
          <br />
          <span>First Name:</span>
          <br />
          <input
            type="text"
            onChange={handleChange1}
            placeholder="Enter First Name"
          />
          <br />
          <br />
          <span>Last Name:</span>
          <br />
          <input
            type="text"
            onChange={handleChange2}
            placeholder="Enter Last Name"
          />
          <br />
          <br />
          <span>ID:</span>
          <br />
          <input type="text" onChange={handleChange3} placeholder="Enter ID" />
          <br />
          <br />
          <span>Email:</span>
          <br />
          <input
            type="text"
            onChange={handleChange4}
            placeholder="Enter Email"
          />
          <br />
          <br />
          <button className="btn btn-primary" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
