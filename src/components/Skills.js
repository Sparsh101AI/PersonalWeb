import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>A Little About Me!</h2>
                        <p>Just a little overview...</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                src={meter3} 
                                <h5>C++ / C</h5>
                            </div>
                            <div className="item">
                                src={meter2} 
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                src={meter3}  
                                <h5>AR Core</h5>
                            </div>
                            <div className="item">
                                src={meter1}  
                                <h5>UI / UX</h5>
                            </div>
                            <div className="item">
                               src={meter2}  
                                <h5> Javascript</h5>
                            </div>
                            <div className="item">
                               src={meter3} 
                                <h5> Teamwork</h5>
                            </div>
                            <div className="item">
                                 src={meter1}
                                <h5> Work Ethic</h5>
                            </div>
                            <div className="item">
                                src={meter3}
                                <h5>Adaptibility</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} />
    </section>
  )
}
