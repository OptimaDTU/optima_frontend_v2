import React , { Component } from 'react'
import './dashboard.css'
import axios from 'axios'

class Dashboard extends Component{


    state = {
        blog : {
            title : '',
            subtopics : []
        },

        fullPost : {
            title : ``,
            subPosts : []
        }
    }

    addField = () => {
      
        let subtitle = document.getElementById('subtitle').value
        let subtext = document.getElementById('subtext').value
        let subrank = document.getElementById('subrank').value
        let suburl = document.getElementById('suburl').value

        const new_Blog = {...this.state.blog}

        new_Blog.subtopics.push({
          
            title : subtitle,
            text : subtext,
            rank : subrank,
            url : suburl
        })

        this.setState({
                blog : new_Blog
        },() => {
            document.getElementById('subtitle').value = ''
            document.getElementById('subtext').value = ''
            document.getElementById('subrank').value = ''
            document.getElementById('suburl').value = ''
        })
        
    }

    submit1 = () => {


        const datatObSumit =  this.state.blog
        datatObSumit.title = document.getElementById('title').value
        console.log(datatObSumit)

        axios.post('http://localhost:3010/blogs',datatObSumit)
        .then(res => {
            alert("success")
        })
        .catch(err =>{
            console.log(err)
        })
    }

    submit2 = () => {


        const datatObSumit =  this.state.fullPost
        datatObSumit.title = document.getElementById('title2').value
        console.log(datatObSumit)

        axios.post('http://localhost:3010/module',datatObSumit)
        .then(res => {
            alert('success')
        })
        .catch(err =>{
            console.log(err)
        })
    }

    addField2 = () => {
        let subtitle = document.getElementById('subtitle2').value
        let subtext = document.getElementById('subtext2').value
        let subrank = document.getElementById('subrank2').value
        let suburl = document.getElementById('suburl2').value

        const new_fullPost = {...this.state.fullPost}

        new_fullPost.subPosts.push({
          
            title : subtitle,
            text : subtext,
            rank : subrank,
            url : suburl
        })

        this.setState({
            fullPost : new_fullPost
        },() => {
            document.getElementById('subtitle2').value = ''
            document.getElementById('subtext2').value = ''
            document.getElementById('subrank2').value = ''
            document.getElementById('suburl2').value = ''
        })
        
    }   

    render(){
        return(
            <div className="container" style={{paddingTop:"50px"}}>
                <div className="row">
                    <div className="col-md-6 col-12 text-center">
                    <div className="row">
                        <div className="col-12">
                            <h4>POST REQUEST 1 FOR BLOG</h4>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center mb-4">
                            <input type="text" placeholder="Enter title" id="title" className="dash-input"></input>
                        </div>
                    </div>
                    {this.state.blog.subtopics.map((sub,indx) => {
                     return(
                        <div className="row mt-3" key={indx}>
                            <div className="col-12 mb-1 text-left">
                                {sub.title}
                            </div>
                            <div className="col-12 mb-1 text-left">
                               {sub.text}
                            </div>
                            <div className="col-12 mb-1 text-left">
                                {sub.url}
                            </div>
                            <div className="col-12 mb-1 text-left">
                                {sub.rank}
                            </div>
                   
                        </div>  
                        )
                    })}
                        <div className="row">
                            <div className="col-12 mb-4">
                                <input type="text" placeholder="Enter title" id="subtitle" className="dash-input"></input>
                            </div>
                            <div className="col-12 mb-4">
                                <input type="text" placeholder="Enter text" id="subtext" className="dash-input"></input>
                            </div>
                            <div className="col-12 mb-4">
                                <input type="text" placeholder="enter url"  id="suburl" className="dash-input"></input>
                            </div>
                            <div className="col-12 mb-4">
                                <input type="number" placeholder="Enter rank"  id="subrank" className="dash-input"></input>
                            </div>
                            <div className="col-12 mb-4">
                                <button className="btn btn-outline-danger dash-input" onClick={this.addField}>Add</button>
                            </div>
                            <div className="col-12 mb-4">
                                <button className="btn btn-outline-danger dash-input" onClick={this.submit1}>Submit</button>
                            </div>
                    
                        </div>
                    </div>



                    <div className="col-md-6 col-12 text-center">
                    <div className="row">
                        <div className="col-12">
                            <h4>POST REQUEST 2 FOR FULLPOST</h4>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center mb-4">
                            <input type="text" placeholder="Enter title" id="title2" className="dash-input"></input>
                        </div>
                    </div>
                    {this.state.fullPost.subPosts.map((sub,indx) => {
                     return(
                        <div className="row mt-3" key={indx}>
                            <div className="col-12 mb-1 text-left">
                                {sub.title}
                            </div>
                            <div className="col-12 mb-1 text-left">
                               {sub.text}
                            </div>
                            <div className="col-12 mb-1 text-left">
                                {sub.url}
                            </div>
                            <div className="col-12 mb-1 text-left">
                                {sub.rank}
                            </div>
                   
                        </div>  
                        )
                    })}
                        <div className="row">
                            <div className="col-12 mb-4">
                                <input type="text" placeholder="Enter title" id="subtitle2" className="dash-input"></input>
                            </div>
                            <div className="col-12 mb-4">
                                <input type="text" placeholder="Enter text" id="subtext2" className="dash-input"></input>
                            </div>
                            <div className="col-12 mb-4">
                                <input type="text" placeholder="enter url"  id="suburl2" className="dash-input"></input>
                            </div>
                            <div className="col-12 mb-4">
                                <input type="number" placeholder="Enter rank"  id="subrank2" className="dash-input"></input>
                            </div>
                            <div className="col-12 mb-4">
                                <button className="btn btn-outline-danger dash-input" onClick={this.addField2}>Add</button>
                            </div>
                            <div className="col-12 mb-4">
                                <button className="btn btn-outline-danger dash-input" onClick={this.submit2}>Submit</button>
                            </div>
                    
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Dashboard