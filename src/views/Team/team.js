import React  , {Component} from 'react'
import{
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
  } from "reactstrap"

import IndexNavbar from '../../components/Navbars/IndexNavbar'

import Person from '../../assets/img/person.jpg'

class Team extends Component{


    state = {
        
        teamMembers : [
            {name:'akash',image:Person,
            text:`Some quick example text to build on the card title and make up the
            bulk of the card's content.Some quick example text to build on the card title and make up the 
            bulk of the card's content.`,
            facebookLink:'',githubLink:'',twitterLink:'',instagramLink:''},
            {name:'akash1',image:Person,
            text:`Some quick example text to build on the card title and make up the
            bulk of the card's content.Some quick example text to build on the card title and make up the 
            bulk of the card's content.`,
            facebookLink:'',githubLink:'',twitterLink:'',instagramLink:''}
        ]
    }

    
    render(){
        
       

        return(
            <>
                <IndexNavbar />
                <section className="">
               
                <div className="container" style={{marginTop:"70px"}}>
                    <div className="row mb-4">
                        <div className="col text-center h1 text-capitalize">
                            Our team
                        </div>
                    </div>
                    <div className="row">
                        {this.state.teamMembers.map(member => {
                            return(
                                <div className="col-10 col-md-4 mb-5 mx-auto">
                             <Card style={{textAlign:"center",paddingTop:"15px"}}>
                               <CardImg style={{borderRadius:"50%",width:"200px",height:"200px"}} alt="..." src={member.image} top></CardImg>
                                }<CardBody>
                                    <CardTitle tag="h3">{member.name}</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">{member.position}</CardSubtitle>
                                        <CardText className="text-muted text-justify">
                                               {member.text}
                                        </CardText>
                                    <div className="row px-3 justify-content-center">
                                        <a href={member.facebookLink}>
                                            <i className="fab fa-facebook mx-3 text-info fa-2x"></i>
                                        </a>
                                        <a href={member.twitterLink}>
                                            <i className="fab fa-twitter mx-3 text-info fa-2x"></i>
                                        </a>
                                        <a href={member.instagramLink}>
                                            <i className="fab fa-instagram mx-3 text-danger fa-2x"></i>
                                        </a>
                                        <a href={member.githubLink}>
                                            <i className="fab fa-github mx-3 fa-2x"></i>
                                        </a>
                                        
                                       
                                    </div>
                                </CardBody>
                             </Card>

 
                        </div>
                            )
                        })}
                        
                        
                        
                    </div>
                    
                     
                </div>
            </section>
            </> 
        ) 
    }   
}

export default Team