import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";

const Navabar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(show);

  return (
    <>
      <nav>
        <ul
          className="d-flex nav-bg justify-content-around m-auto py-3 align-items-center port-fw-sm port-fs-lg"
          style={{ listStyle: "none" }}
        >
          <a href="#home">
            <li className="nav-icons">Home</li>
          </a>
          <a href="#about">
            <li className="nav-icons">About</li>
          </a>
          <a href="#project">
            <li className="nav-icons">Projects</li>
          </a>

          <li className="nav-icons" onClick={handleShow}>
            Contact
          </li>
        </ul>
      </nav>

      <ContactModal showModal={show} handleClose={handleClose} />
    </>
  );
};

function ContactModal(props) {
  return (
    <>
      <Modal
        show={props.showModal}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            <div className="d-flex flex-column">
              <span>Email:</span>
              <p>Sumitrai4418@gmail.com</p>
            </div>
            <div className="d-flex flex-column">
              <span>Mobile:</span>
              <p>8800457195</p>
            </div>

            <div className="d-flex flex-column">
              <span>Linkedin:</span>
              <p>https://www.linkedin.com/in/sumit-kumar-8a85521b4/</p>
            </div>
            <div className="d-flex flex-column">
              <span>Location:</span>
              <p>Delhi,India</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navabar;
