import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import{
    Card,
    CardImg,
    CardBody,
    CardText,
} from "reactstrap"
import axios from "axios/index";

class PostLists extends Component{

    constructor(props) {
        super(props);
        this.state = {
            posts : []
        };
        this.linkStyle = {
            color: "inherit",
            textDecoration: "none"
        };
    }

    componentDidMount() {
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

    render() {
        return(
            <div className="container" style={{marginTop:"100px"}}>
                <div className="row mt-4" style={{
            width: '100%',
            paddingRight: '15px',
            paddingLeft : '15px',
            marginLeft: 'auto',
            marginRight: 'auto'
            }} >
                    <div className="col-10">
                        <h1>Basics</h1>
                        <hr/>
                    </div>
                {this.state.posts.map( (post, key) => {
                    return(
                            <div key = {key} className="col-sm-4 text-center">
                                <Link to={`/module/${post.slug}`} style={this.linkStyle}>
                                <Card className="h-100" >
                                    <CardImg className="h-50"  alt="..."
                                        src={post.thumbnail}/>
                                    <CardBody>
                                        <CardText>{post.description}</CardText>
                                    </CardBody>
                                </Card>
                                </Link>
                            </div>
                )
            })}
            </div>
        </div>
        )
    }

}

export default PostLists