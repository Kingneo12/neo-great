/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/mote1moon.png"),
    altText: "Slide 1",
    caption: "Motel moon, Petrika"
  },
  {
    src: require("assets/img/transport system1.png"),
    altText: "Slide 2",
    caption: "Cityscape, Road Network"
  },
  {
    src: require("assets/img/camera.png"),
    altText: "Slide 2",
    caption: "Plexus"
  },
  {
    src: require("assets/img/particle syst.png"),
    altText: "Slide 3",
    caption: "Particle System"
  },
  {
    src: require("assets/img/kilifi.png"),
    altText: "Slide 3",
    caption: "Water Map"
  }
];

let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("info");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.includes("Win")) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("info");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Ndwiga Murimi</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                A Creative Director and Developer with experience in interactive development, design and concept artwork. Combining art themes, the hidden mysteries of interactions within the world of code, and countless languages, he creates interactive worlds for devices, installations and events. Technologies include Artificial Intelligence systems, OpenGL/WebGL, Graphics, VR/AR, 3D, Visual FX . His work often explores the synergy between humans and machines, the intersection of technology and creative spirit. As a developer, my expertise includes React, javascript, webgl, and a wide range of related frameworks and libraries. He has years of experience with Three.js, and WebGL, along with CSS and HTML. Everything a web based project might need. For video processing he has scripting in Blender and After Effects.
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="https://twitter.com/creativetim"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="https://dribbble.com/creativetim"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/mike.jpg")}
                    />
                    <h4 className="title">N°Grāt Lab</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Creative Direction
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          Technology
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">CREATIVE DIRECTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Installation, product & experience design</td>
                            </tr>
                            <tr>
                              <td>Prototyping & conception</td>
                            </tr>
                            <tr>
                              <td>Creative direction & strategy</td>
                            </tr>
                            <tr>
                              <td>UI / UX</td>
                            </tr>
                            <tr>
                              <td>3D interactions</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">TECHNOLOGY</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Real time 3D / WebGL</td>
                            </tr>
                            <tr>
                              <td>Web Experiences</td>
                            </tr>
                            <tr>
                              <td>Interactive experiences & Installations</td>
                            </tr>
                            <tr>
                              <td>Projection mapping</td>
                            </tr>
                            <tr>
                              <td>Gaming, AR, VR, XR</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Project Showcase</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                N°Grāt produces premium commercial products, from concept to end-product. Enabling end-users to use data-driven experiences daily to have an impact and drive change.

                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    to="/work" tag={Link}  
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> View all
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
