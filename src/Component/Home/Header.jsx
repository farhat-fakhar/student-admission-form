import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Row>
        <Col lg={3} className="d-flex justify-content-center align-items-center">
         <h4>Admission Form</h4>
        </Col>
        <Col lg={6} className="d-flex justify-content-center align-items-center">
          <ul className="p-0 m-0 d-flex justify-content-end align-items-center">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Programs</li>
            <li>Contact Us</li>
          </ul>
        </Col>
        <Col lg={3} className="d-flex justify-content-center align-items-center"><button>Admission</button></Col>
      </Row>
    </Wrapper>
  );
};
const Wrapper = styled.div`
padding: 10px 50px;
  background-color: ${({ theme }) => theme.colors.darkPurpul};
  ul{
    list-style: none;
    li{
        color:${({ theme }) => theme.colors.whiteColor} ;
        margin-right: 28px;
        font-size: 18px;
        font-weight: 600;
    }
  }
`;
export default Header;
