import React, { useState } from "react";
//import axios from "axios";
//import { Button, Modal } from "react-bootstrap";

const DeleteUser = (props) => {
  //const [show, setShow] = useState(false);
  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  /*function handleClick() {
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
        alert(response.data);
      });
  }*/
  console.log("reached");
  const val = `${props.params.id}, ${props.params.first_name}, ${props.params.last_name}, ${props.params.email}`;
  return (
    <div>
      <span>{val}</span>
    </div>
  );
};
/*<Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>*/

export default DeleteUser;
