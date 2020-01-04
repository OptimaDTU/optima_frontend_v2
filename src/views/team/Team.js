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
                text:`Gaurav is a senior Computer Science Major at Delhi Technological University. 
                He is a curious learner, and ideas like Computer Vision and AI intrigue him.`,
                mailLink: 'gauravjain13298@gmail.com',
                githubLinK: 'https://github.com/Gaurav1302',
                websiteLink: 'https://scholar.google.com/citations?hl=en&user=0Jbw4QIAAAAJ'},
            {   name:'Sharan Gopal',
                image: require( 'assets/img/sharan.jpeg' ),
                position : "Vice-President",
                text:`Sharan is a Computer Science undergrad at Delhi Technological University. 
                His interests include deep learning, data structures, algorithms and mathematics. 
                Apart from those, he spends a lot of time on anime and music.`,
                mailLink: 'sharan20051998@gmail.com',
                githubLinK: 'https://github.com/sharan-dce',
                websiteLink: null},
            {   name:'Suransh Chopra',
                image: require( 'assets/img/suransh.jpeg' ),
                position : "Tech Lead",
                text:`Suransh is a Computer Science undergrad at Delhi Technological University. 
                He is a fun loving person and a Techie. 
                He has a decent experience in Sport Programming, Full stack web development and Deep Learning`,
                mailLink: 'suransh2008@gmail.com',
                githubLinK: 'https://github.com/suri97',
                websiteLink: 'http://suranshchopra.tech/'},
            {   name:'Shivang Chopra',
                image: require( 'assets/img/shivang.jpeg' ),
                position : "Tech Lead",
                text:`Shivang is a huge tech geek with experience in the fields of Augmented Reality, Unity3D Game Development, 
                Machine Learning, Android Development and Competitive Programming. 
                He is currently pursuing his B.Tech in Computer Science from Delhi Technological University. `,
                mailLink: 'shivangchopra11@gmail.com',
                githubLinK: 'https://github.com/shivangchopra11',
                websiteLink: null}
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
                                         { member.mailLink ?
                                         <a target="_blank"
                                             href={ "mailto:" + member.mailLink }>
                                             <i className="fa fa-envelope mx-3 text-info fa-2x"/>
                                         </a> : null }
                                         { member.websiteLink ?
                                         <a target="_blank"
                                             href={ member.websiteLink }>
                                             <i className="fa fa-globe mx-3 text-info fa-2x"/>
                                         </a> : null }
                                         { member.githubLinK ?
                                         <a target="_blank" style={{color: 'inherit'}}
                                             href={ member.githubLinK }>
                                             <i className="fab fa-github mx-3 fa-2x"/>
                                         </a> : null }
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