import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const BackDrop = styled.div`
  display: ${p => (p.open ? "flex" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.2s ease-in;
`;

const ModalStytled = styled.div`
  width: inherit;
  height: auto;
`;

const Modal = ({ children, close, open }) =>
  ReactDOM.createPortal(
    <BackDrop onClick={close} open={open}>
      <ModalStytled>{children}</ModalStytled>
    </BackDrop>,
    document.querySelector("#modal")
  );

export default Modal;
