import React from "react";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

import optima_logo from "../../assets/img/optima_logo.png";

function IndexNavbar() {

    // Make navbar transparent with scroll

 // const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
 const [collapseOpen, setCollapseOpen] = React.useState(false);
 /* React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
       setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
       setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }); */

  const navbarColor = 'secondary';
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="dark" style={{color:"#343a40!important"}}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              id="navbar-brand"
            >
                <img src={optima_logo} width="70" height="25" />
            </NavbarBrand>
           
            <button
              className="navbar-toggler navbar-toggler ml-auto" style={{position:"absolute",right:"10%"}}
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"
                    style={{position:"absolute",top:"35%",minHeight:"2px",minWidth:"25px",background:"white"}}/>
              <span className="navbar-toggler-bar middle-bar"
                    style={{position:"absolute",top:"65%",height:"2px",width:"25px",background:"white"}}/>
              <span className="navbar-toggler-bar bottom-bar"
                    style={{position:"absolute",top:"95%",height:"2px",width:"25px",background:"white"}}/>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
              <Nav navbar>
                  <NavItem>
                      <NavLink href="/videos" >
                          <p style={{fontSize: 12}} > Videos </p>
                      </NavLink>
                  </NavItem>
              </Nav>

            <Nav navbar>
              <NavItem>
                <NavLink href="/team" >
                  <p style={{fontSize: 12}} > The Team </p>
                </NavLink>
              </NavItem>
            </Nav>

          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
