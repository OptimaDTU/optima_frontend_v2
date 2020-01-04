import React , { Component } from 'react'
import axios from 'axios'
import urls from '../../urls'

class FullPost extends Component{

    state = {
        postData : {},
        postDataFinal : [],
    };

    componentDidMount(){

        let id = this.props.match.params.id;
           axios.get(`${urls.BASE_URL}/module/${id}`)
           .then(data => {
               console.log(data.data)
               this.setState({
                   postDataFinal : data.data
               })
           })
           
        // urls.BASE_URL
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

    //getVideo = (slug,url) => {
      //  this.props.history.push(`/modules/${slug}/$`)
    //}

    render(){

//        console.log(this.state.postDataFinal)
  //      let videos = null;



     {/*   if(this.state.postData.videos){

           videos =  this.state.postData.videos.map((video,indx) => {

            let url = video.url
            
            url = url.replace("watch","embed")
            url = url.replace('?','/')
            url = url.replace('v=','')

           

               /* return(
                    <div className="row mt-4 mb-5" style={{

                    }}>
                        <div className="col-1 d-flex justify-content-center align-items-center" style={{fontSize:"20px"}}>
                            {indx+1}.
                        </div>
                        
                            <div className="col-md-6 col-12 mb-4" onClik={() => this.getVideo(video.slug,video.url)}>
                                <iframe width="390" height="300"
                                    src={url}>
                                </iframe>
                            </div>
                        
                        
                        <div className="col-md-5 col-12 mb-4 align-items-center d-flex" style={{fontSize:"20px"}}>
                            {video.description}
                        </div>
                    </div>
                ) 
            })
        } */}


        return(
            <>
                    <div className="container" style={{marginTop:"100px"}}>
                            {this.state.postDataFinal.map(post => {
                                 return(
                                     <>
                                        <div className="row">
                                             <div className="col-12 text-center">
                                                <h1>{post.title}</h1>
                                            </div>
                                        </div>
                                        <div className="row mt-4 mb-5">
                                            <div className="col-12">
                                                <h3>{post.text}</h3>
                                            </div>
                                        </div>  
                                        
                                            {post.subPosts.map((subPost,indx) => {
                                                return(
                                                <div className="row align-items-center mb-4">
                                                        <div className="col-1" 
                                                            style={{fontSize:"20px"}}>
                                                                {indx+1}.
                                                         </div>
                        
                                                    <div className="col-md-4 col-12 mb-4">
                                                        <iframe width="390" height="300"
                                                            src={subPost.url}>
                                                        </iframe>
                                                    </div>
                        
                        
                                                    <div className="col-md-7 col-12 text-center mb-4" style={{fontSize:"20px"}}>
                                                        {subPost.text}
                                                     </div>
                                                </div>
                                                )
                                            })}
                                        
                                    </>
                                 )
                            })}
                            
                        </div>
                        
                      
                   {/*     <div className="row">
                            <div className="col-12 text-center">
                                <h1>{this.state.postData.title}</h1>
                            </div>
                            <div className="mt-3">
                                <h2>{this.state.postData.description}</h2>
                            </div>
                        </div>
                        {videos} */}
                    
            </>
        )
    }
}   

export default FullPost