import React , { Component } from 'react'
import axios from 'axios'
import IndexNavbar from '../../components/Navbars/IndexNavbar'

class FullPost extends Component{

    state = {
        postData : {}
    }

    componentDidMount(){

        let id = this.props.match.params.id

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

    render(){

        let videos = null

        console.log(this.state.postData)
        console.log(this.state.postData.videos)

        if(this.state.postData.videos){

           videos =  this.state.postData.videos.map((video,indx) => {
                return(
                    <div className="row mt-4 mb-4" style={{

                    }}>
                        <div className="col-1 d-flex justify-content-center align-items-center" style={{fontSize:"20px"}}>
                            {indx+1}.
                        </div>
                        <div className="col-md-2 col-12 mb-4">
                            <img src={video.thumbnail} />
                        </div>
                        <div className="col-md-6 col-12 mb-4 align-items-center d-flex" style={{fontSize:"20px"}}>
                            {video.description}
                        </div>
                    </div>
                )
            })
        }

        console.log(this.state.postData)
        return(
            <>
                <IndexNavbar />
                    <div className="container" style={{marginTop:"70px"}}> 
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