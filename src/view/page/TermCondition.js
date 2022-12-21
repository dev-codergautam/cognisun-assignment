import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const TermCondition = ({showModal}) => {
    const [show, setShow] = useState(showModal);
    const handleClose = () => setShow(false);
  return (
    <div>
      <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
          keyboard={false}
          size='md'
          centered>
          <Modal.Body className='text-center'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias sit quasi velit? Omnis itaque delectus eum excepturi culpa praesentium sapiente temporibus rem optio. Excepturi officia eaque similique quibusdam odio. </p>
            <button className="btn btn-info" onClick={handleClose}>I Agree</button>
          </Modal.Body>
        </Modal>
    </div>
  );
};

export default TermCondition;
