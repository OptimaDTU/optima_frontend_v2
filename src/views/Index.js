import React , {Component} from "react";
import axios from 'axios'


import FullPost from '../views/fullpost/fullpost'
// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";

import{
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap"

class Index extends Component{

  state = {
    posts : []
  }

  componentDidMount(){

    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    axios.get('https://optimadtu.herokuapp.com/modules/?format=json')
    .then(res => {
      this.setState({
        posts : res.data
      },() => {
        console.log(this.state.posts)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  fullPostHandler = (title) => {
    this.props.history.push(`/module/${title}`)
  }

  render(){

    return (
      <>
        <IndexNavbar />
        <div className="wrapper" style={{width:"100%"}}>
          <IndexHeader />
          <div className="main">
            <div className="row mt-4">
              {this.state.posts.map(post => {
                return(
                  <div className="col-md-3 mx-auto col-10">
                      <Card onClick={() => this.fullPostHandler(post.slug)}>
                        <CardImg style={{height:"200px" ,width:"100%"}} alt="..." src={post.thumbnail}/>
                        <CardBody>
                          <CardText>{post.description}</CardText>
                        </CardBody>
                      </Card>
                  </div>
                )
              })}
            </div>
          </div>
          
        </div>
      </>
    );
    
  }

}

/*function getPosts  ()  {
  let  [ posts , setPosts ]  = React.useState([])

  React.useEffect(() => {
    console.log("ghi")
    axios.get('https://optimadtu.herokuapp.com/modules/?format=json')
    .then(res => {
      console.log("hi")
    })
    .catch(err => {
      console.log(err)
    })
  })
}

function Index() {

  

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;


    

   /* return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    }; 

    
  }); 

  


  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          
        </div>
        
      </div>
    </>
  ); 
} */

export default Index;
