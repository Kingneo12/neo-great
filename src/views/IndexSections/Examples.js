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
import { Button, Container, Row, Col } from "reactstrap";

export default function Examples() {
  return (
    <div className="section section-examples" data-background-color="black">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col lg="12">
            <Row className="row-grid justify-content-center">
            <Col sm="6">
              <Link to="water-map">
                <img
                  alt="Water Map - Nakuru, Kenya"
                  className="img-raised"
                  src={require("assets/img/kilifi.png")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="work"
                tag={Link}
              >
                Water Map - Nakuru, Kenya
              </Button>
            </Col>
            <Col sm="6">
              <Link to="info">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/transport system1.png")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="info"
                tag={Link}
              >
                Cityscape Road Network
              </Button>
            </Col>
            <Col sm="6">
              <Link to="info">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/ICONS presentation.png")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="info"
                tag={Link}
              >
                MarkMe Icons Mobile App
              </Button>
            </Col>
            <Col sm="6">
              <Link to="info">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/mote1moon.png")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="info"
                tag={Link}
              >
                Motel Moon
              </Button>
            </Col>
            <Col sm="6">
              <Link to="info">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/particle syst.png")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="info"
                tag={Link}
              >
                Particle System
              </Button>
            </Col>
            <Col sm="6">
              <Link to="info">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/installation.png")}
                />
              </Link>
              <Button
                className="btn-simple btn-round"
                color="primary"
                to="info"
                tag={Link}
              >
                Art Installation
              </Button>
            </Col>
            </Row>
          </Col>          
        </Row>
      </Container>
    </div>
  );
}
