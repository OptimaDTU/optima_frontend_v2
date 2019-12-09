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

class PostLists extends Component{

    constructor(props) {
        super(props);
        this.state = {
            posts : [],
            loading : false
        };
        this.linkStyle = {
            color: "inherit",
            textDecoration: "none"
        };
    }

    componentDidMount() {
        this.setState({loading:true})
        axios.get('https://optimadtu.herokuapp.com/modules/?format=json')
            .then(res => {
                this.setState({
                    posts : res.data,
                    loading: false
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
                    <div className="col-10">
                        <h1>Basics</h1>
                        <hr/>
                    </div>
                    {loader}
                {this.state.posts.map( (post, key) => {
                    return(
                            <div key = {key} className="col-sm-4 text-center m-sm-2 mb-5">
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