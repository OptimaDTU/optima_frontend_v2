import React  , {Component} from 'react'
import{
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter
  } from "reactstrap"


class Team extends Component{


    state = {
        
        teamMembers : [
            {   name:'Gaurav Jain',
                image: require( 'assets/img/gaurav.jpeg' ),
                position : "President",
                text:`Gaurav is a junior computer science major at Delhi Technological University. 
                He is a curious learner, and ideas like Computer Vision and AI intrigue him.`,
                facebookLink:'',githubLink:'',twitterLink:'',instagramLink:''},
            {   name:'Sharan Gopal',
                image: require( 'assets/img/sharan.jpeg' ),
                position : "Vice-President",
                text:`Sharan is a Computer Science undergrad at Delhi Technological University. 
                His interests include deep learning, data structures, algorithms and mathematics. 
                Apart from those, he spends a lot of time on anime and music..`,
            facebookLink:'',githubLink:'',twitterLink:'',instagramLink:''},
            {   name:'Suransh Chopra',
                image: require( 'assets/img/suransh.jpeg' ),
                position : "Tech Lead",
                text:`Sharan is a Computer Science undergrad at Delhi Technological University. 
                His interests include deep learning, data structures, algorithms and mathematics. 
                Apart from those, he spends a lot of time on anime and music..`,
                facebookLink:'',githubLink:'',twitterLink:'',instagramLink:''}
        ]
    };

    
    render(){
        
       

        return(
            <>
                <section className="">
               
                <div className="container" style={{marginTop:"100px"}}>
                    <div className="row mb-4">
                        <div className="col text-center h1 text-capitalize">
                            Our team
                        </div>
                    </div>
                    <div className="row">
                        {this.state.teamMembers.map( (member, ind) => {
                            return(
                                <div key = {ind} className="col-10 col-md-4 mb-5 mx-auto">
                             <Card className="h-100" style={{textAlign:"center",paddingTop:"15px"}}>
                               <CardImg style={{borderRadius:"50%",width:"200px",height:"200px"}} alt="..." src={ member.image } top/>
                                <CardBody>
                                    <CardTitle tag="h3">{member.name}</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">{member.position}</CardSubtitle>
                                        <CardText className="text-muted text-justify">
                                               {member.text}
                                        </CardText>
                                </CardBody>
                                 <CardFooter>
                                     <div className="row px-3 justify-content-center">
                                         <a href={member.facebookLink}>
                                             <i className="fab fa-facebook mx-3 text-info fa-2x"/>
                                         </a>
                                         <a href={member.twitterLink}>
                                             <i className="fab fa-twitter mx-3 text-info fa-2x"/>
                                         </a>
                                         <a href={member.instagramLink}>
                                             <i className="fab fa-instagram mx-3 text-danger fa-2x"/>
                                         </a>
                                         <a href={member.githubLink}>
                                             <i className="fab fa-github mx-3 fa-2x"/>
                                         </a>
                                     </div>
                                 </CardFooter>
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