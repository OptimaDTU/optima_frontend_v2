import React  , {Component} from 'react'
import axios from 'axios'
import { Route , Redirect } from 'react-router-dom'
import Loader from '../Loader/loader'

export default function(Comp,restricted){
    class Auth extends Component{

        state = {
            loading : false,
            isUser : false
        }
    
        componentWillMount(){
            console.log("hete")
            this.setState({loading : true})
            axios.get("http://localhost:3010/admin/isAdmin",{withCredentials : true})
            .then(data => {
                
                console.log("amdin + ", data.data.isAdmin)
                if(data.data.isAdmin) this.setState({isUser : true,loading: false})
                else this.setState({isUser : false,loading : false})
    
            })
        }
    
        render(){

            console.log(this.state.isUser)
           if(this.state.loading) return (<Loader />)

           if(restricted === null){
               return   <Comp {...this.props} />
           }

         
           if(this.state.isUser){
            
            console.log("ehah")
            if(restricted === true) return <Comp {...this.props} />

            else return <Comp {...this.props} />

           }else{

            if(restricted === true) return <Redirect to="/" />

            else return  <Comp {...this.props} />

           }
    
          
        }
    }

    return Auth
}

