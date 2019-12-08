/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
   if (window.innerWidth > 991) {
     const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
   } 

    

  }); 

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/banner_new.jpeg") + ")"
          }}
          ref={pageHeader}
        />
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/optima_logo.png")}
            />
            <h1 className="h1-seo"> <strong> OPTIMA </strong></h1>
              <h6 className="h6-seo">The Machine Learning Society of DTU</h6>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
