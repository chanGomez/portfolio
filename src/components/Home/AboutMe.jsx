import headshot from "../../assets/headshot.png"
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={headshot} alt="About Me" 
        // style={{width : "400px", marginLeft : " 200px"}}/>
/>

      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <br/>
          <p className="about--section-description">
          My journey started in a web design 101 class while in college for my associates degree and communications design. It opened  a whole new world I didn't know was there. Since then my knowledge in this field has grown immensely.
          </p>
          <p className="about--section-description">
          I saw the challenges that I might have to come across when working in this field and I said yes to those challenges. If they can do it then so can I and possibly even better one day. That's the goal.
          </p>
        </div>
      </div>
    </section>
  );
}