import '../Components/About.css'
import Profile2 from '../assets/Profile2.jpg'

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Profile2} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a dedicated MERN stack developer. Currently i am expanding my knowledge by exploring new technologies.</p>
                    <p>My passion for development is not only reflected in the projects I build, but also in my continuous learning, problem-solving approach. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"47%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Tailwind CSS</p><hr style={{width:"58%"}}/></div>

                </div>
            </div></div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Bachelors</h1>
                    <p> Information Technology -University of Education</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>Certifications</h1>
                    <p> Full stack development(MERN stack) -Nexskill</p>
                </div>
               
            </div>
        </div>
   
  )
}

export default About