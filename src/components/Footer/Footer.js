/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">•</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink 
                   data-placement="bottom"
                   href="https://theneogreat@gmail.com"
                   rel="noopener noreferrer"
                   target="_blank"
                   title="Email">
                   theneogreat@gmail.com
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                 data-placement="bottom"
                 href="https://www.instagram.com/the.neo.great"
                 rel="noopener noreferrer"
                 target="_blank"
                 title="Instagram">
                 @the.neo.great
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink>
                 <p>
                    Nairobi,<br />
                    Kenya
                  </p>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="src/assets/N°Grāt Capabilities deck 2022.pdf">
                 <p>
                    Capabilities Deck<br />
                    2022
                  </p>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
