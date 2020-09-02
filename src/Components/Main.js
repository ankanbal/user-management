import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import axios from "axios";
import { connect } from "react-redux";

function Main(props) {
  const url = "https://reqres.in/api/users?page=1";
  const [users, setUsers] = useState([]);
  //setUsers(props.user);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data["data"]);
      });
  }, []);

  //console.log(users);
  function deleteUser(id, first_name, last_name, email) {
    //console.log(`${id}, ${first_name}, ${last_name}, ${email}`);
    if (
      window.confirm(`Do you really want to delete the following row?
    id: ${id}
    first_name: ${first_name}
    last_name: ${last_name}
    email: ${email}`)
    ) {
      axios
        .delete(
          "https://reqres.in/api/users",
          {
            data: {
              id: id,
              first_name: first_name,
              last_name: last_name,
              email: email,
              avatar:
                "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          alert(`Deleted successfully!`);
        });
    }
  }

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "First Name",
      accessor: "first_name",
    },
    {
      Header: "Last Name",
      accessor: "last_name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Created Date",
      accessor: "",
      Cell: function () {
        var date = new Date();
        return <span>{date.toDateString()}</span>;
      },
    },
    {
      Header: "Action",
      accessor: "",
      Cell: (users) => {
        return (
          <div>
            <div style={{ display: "inline" }}>
              <Link
                to={{
                  pathname: "/update",
                  data: {
                    id: users.original.id,
                    first_name: users.original.first_name,
                    last_name: users.original.last_name,
                    email: users.original.email,
                  },
                }}
              >
                <button className="btn btn-info">Update</button>
              </Link>
              <div style={{ display: "inline", marginLeft: 5 }}>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    deleteUser(
                      users.original.id,
                      users.original.first_name,
                      users.original.last_name,
                      users.original.email
                    )
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div style={{ padding: 20 }}>
      <center>
        <h1>My Customers</h1>
      </center>
      <div>
        <SearchBar params={users} />
      </div>
      <div
        style={{ padding: 10, display: "flex", justifyContent: "flex - end" }}
      >
        <Link to="/add">
          <button className="btn btn-primary" style={{ padding: 10 }}>
            <span style={{ fontSize: 20 }}>Add User</span>
          </button>
        </Link>
      </div>
      <div>
        <ReactTable data={users} columns={columns} minRows="10" />
      </div>
    </div>
  );
}

/**/
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Main);
