import Video from "../../../assets/hero-video.mp4"
import "./HeroSection.css"
export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        
        <div className="hero--section--video">
          <video src={Video} autoPlay loop muted alt="Hero Section Video" />
        </div>

        <div className="hero--section--content--box">
          <div className="hero--section--content--titles">
            <p className="hero--section--title">Chantal Gomez</p>
            <p className="section--title">Fullstack Software Engineer</p>
            {/* <p className="hero--section-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br /> Dolorum, quas. Amet soluta assumenda ?
            </p> */}
          </div>
          {/* <button className="btn btn-primary">Get In Touch</button> */}
        </div>
      </section>
    );
  }