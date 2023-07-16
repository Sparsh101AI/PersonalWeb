import { Container } from "react-bootstrap";
import 'animate.css';
import './Aboutme.css'


export const Aboutme = () => {

  return (
    <section className="backgroundaboutme">
      <Container className="stars">
        <h3 className="title">As today turns into yesterday I Am..</h3>  
       
        <p className="titleundertext1">Meeting new people at the: <span className="waterloo">University of Waterloo 🏫</span></p>
        <br></br>
        <p className="titleundertext1">Building a virtual community : <span className="waterloo">@StereamD 🎥</span></p>
        <br></br>
        
        <p className="titleundertext1">Training the next-gen recomendations engine: <span className="waterloo"> @Momento AI 🧠</span></p>
      </Container>
    </section>
  )
}