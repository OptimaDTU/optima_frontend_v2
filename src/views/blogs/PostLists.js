import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Loader from '../../components/Loader/loader'

import{
    Card,
    CardImg,
    CardBody,
    CardText,
} from "reactstrap"
import axios from "axios/index";
import urls from '../../urls'

class PostLists extends Component{

    constructor(props) {
        super(props);
        this.state = {
            posts : [],
            loading : false,
            postsFinal : []
        };
        this.linkStyle = {
            color: "inherit",
            textDecoration: "none"
        };
    }

    componentDidMount() {
        this.setState({loading:true})
        axios.get(`${urls.BASE_URL}/videos`)
        .then(data => {
            console.log(data.data)
            this.setState({
                postsFinal : data.data
            })
        }) 
        axios.get('https://optimadtu.herokuapp.com/modules/?format=json')
            .then(res => {
                this.setState({
                    posts : res.data,
                    loading: false
                },() => {
                    console.log(this.state.posts)
                })
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {

        

        let loader = null

        if(this.state.loading){
            loader = (
                <div className="col-12 pt-5">
                    <Loader />
                </div>
            )
        }

        return(
            <div className="container" style={{marginTop:"100px"}}>
                <div className="row mt-4" style={{
            width: '100%',
            paddingRight: '20px',
            paddingLeft : '20px',
            marginLeft: 'auto',
            marginRight: 'auto'
            }} >
                    {this.state.postsFinal.map((post,indx) => {
                        return(
                            <div key={indx} style={{width:"100%"}}>
                                <div className="row mt-5">
                                    <div className="col-10">
                                        <h1>{post.title}</h1>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="row">
                                {post.subtopics.map((subtopic,i) => {
                                    return(
                                        <div key={i} className="col-sm-4 text-center m-sm-2 mb-5">
                                    {console.log(subtopic.url)}
                                     <Card className="h-100" >
                                        <iframe width="100%" height="200"
                                        src={subtopic.url}>
                                        </iframe>
                                         <Link to={`/module/${subtopic.title}`}  style={this.linkStyle}>
                                            <CardBody>
                                                <CardText>{subtopic.text}</CardText>
                                        
                                            </CardBody>
                                         </Link>
                                     </Card>

                                </div>
                                    )
                                })}

                                </div>
                                
                                
                                
                            </div>
                        )
                    })}
                  {/*  <div className="col-10">
                        <h1>Basics</h1>
                        <hr/>
                    </div>
                    {loader}
                    {this.state.posts[0] ? 
                    <div className="col-sm-4 text-center m-sm-2 mb-5">
                               
                                <Card className="h-100" >
                                <iframe width="100%" height="200"
                                    src={`https://www.youtube.com/embed/N5vscPTWKOk`}>
                                </iframe>
                                         <Link to={`/module/${this.state.posts[0].slug}`} style={this.linkStyle}>
                                            <CardBody>
                                                <CardText>{this.state.posts[0].description}</CardText>
                                        
                                            </CardBody>
                                         </Link>
                                </Card>
                                
                        </div> : null}

                        {this.state.posts[1] ? 
                        <div className="col-sm-4 text-center m-sm-2 mb-5">
                               
                               <Card className="h-100" >
                                   <CardImg className="h-50"  alt="..."
                                       src={this.state.posts[1].thumbnail}/>
                                        <Link to={`/module/${this.state.posts[1].slug}`} style={this.linkStyle}>
                                           <CardBody>
                                               <CardText>{this.state.posts[1].description}</CardText>
                                       
                                           </CardBody>
                                        </Link>
                               </Card>
                               
                       </div>  : null}
              {/*  {this.state.posts.map( (post, key) => {
                    return(
                            <div key = {key} className="col-sm-4 text-center m-sm-2 mb-5">
                               
                                <Card className="h-100" >
                                    <CardImg className="h-50"  alt="..."
                                        src={post.thumbnail}/>
                                         <Link to={`/module/${post.slug}`} style={this.linkStyle}>
                                            <CardBody>
                                                <CardText>{post.description}</CardText>
                                        
                                            </CardBody>
                                         </Link>
                                </Card>
                                
                            </div>
                )
            })} */}
            </div>
        </div>
        )
    }

}

export default PostLists