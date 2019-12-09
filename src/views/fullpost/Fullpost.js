import React , { Component } from 'react'
import axios from 'axios'

class FullPost extends Component{

    state = {
        postData : {}
    };

    componentDidMount(){

        let id = this.props.match.params.id;

        axios.get(`https://optimadtu.herokuapp.com/modules/${id}/?format=json`)
        .then(res => {
            this.setState({
                postData : res.data
            })
        })
        .catch(err => {
            console.log(err) 
        })

    }

    getVideo = (slug,url) => {
        this.props.history.push(`/modules/${slug}/$`)
    }

    render(){

        let videos = null;



        if(this.state.postData.videos){

           videos =  this.state.postData.videos.map((video,indx) => {
                return(
                    <div className="row mt-4 mb-4" style={{

                    }}>
                        <div className="col-1 d-flex justify-content-center align-items-center" style={{fontSize:"20px"}}>
                            {indx+1}.
                        </div>
                        
                            <div className="col-md-2 col-12 mb-4" onClik={() => this.getVideo(video.slug,video.url)}>
                                <a href={video.url} target="_black">
                                    <img src={video.thumbnail} />
                                </a>
                            </div>
                        
                        
                        <div className="col-md-6 col-12 mb-4 align-items-center d-flex" style={{fontSize:"20px"}}>
                            {video.description}
                        </div>
                    </div>
                )
            })
        }


        return(
            <>
                    <div className="container" style={{marginTop:"100px"}}>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>{this.state.postData.title}</h1>
                            </div>
                            <div className="mt-3">
                                <h2>{this.state.postData.description}</h2>
                            </div>
                        </div>
                        {videos}
                    </div>
            </>
        )
    }
}   

export default FullPost