import React from 'react';
import CssIcon from './css3_icon.svg';
import Html5Icon from './html5_color.svg';
import JsIcon from './js_color.svg';
import ReactIcon from './react_color.svg';
import SoundCloudIcon from './sc_circle.svg';
import ImageOne from './image-one.jpg';
import ImageTwo from './image-two.jpg';

class Portfolio extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: [
        {
          title: 'Daily Routine x React',
          description: 'Daily Routine is a fitness website that I designed and developed that allows users to view curated yoga routines set to popular music. The SoundCloud API was utilized for this website.',
          image: ImageOne,
          icon: CssIcon,
          iconText: "Css Icon",
          iconOne: Html5Icon,
          iconOneText: "HTML Icon",
          iconTwo: JsIcon,
          iconTwoText: "JS Icon",
          iconThree: ReactIcon,
          iconThreeText: "React Icon",
          iconFour: SoundCloudIcon,
          iconFourText: "Sound Cloud Icon",
          link: "https://github.com/rachelrondon/infinite_yoga-"
        },
        {
          title: 'House Keys x React',
          description: 'House Keys is a roommate finder website that I created with a team of developers and utilizes the Google Maps API.',
          image: ImageTwo,
          icon: CssIcon,
          iconText: "Css Icon",
          iconOne: Html5Icon,
          iconOneText: "HTML Icon",
          iconTwo: JsIcon,
          iconTwoText: "JS Icon",
          iconThree: ReactIcon,
          iconThreeText: "React Icon",
          iconFour: "",
          iconFourText: "",
          link: "https://github.com/housekeys"
        },
      ],
    }
  }

  render() {
    return (
      <div className="portfolio">
        <h1 className="portfolio-name">Rachel Rondon</h1> 
        {this.state.projects.map((project) => {
          return (
            <section className="card">
              <img className="card-image" src={project.image}></img>
              <article className="card-details">
                <p className="card-title">{project.title}</p>
                <ul className="card-icons">
                  <li><img className="card-icon" src={project.icon} alt={project.iconText}></img></li>
                  <li><img className="card-icon" src={project.iconOne} alt={project.iconTextOne}></img></li>
                  <li><img className="card-icon" src={project.iconTwo} alt={project.iconTextTwo}></img></li>
                  <li><img className="card-icon" src={project.iconThree} alt={project.iconTextThree}></img></li>
                  <li><img className="card-icon" src={project.iconFour} alt={project.iconTextFour}></img></li>
                </ul>
                <p className="card-description">{project.description}</p>
                <a className="card-link" href={project.link} target="_blank">GITHUB</a>
              </article>
            </section>
          )
        })}
      </div>
    )
  }
}

export default Portfolio;
