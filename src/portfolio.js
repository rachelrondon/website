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
          iconOne: Html5Icon,
          iconTwo: JsIcon,
          iconThree: ReactIcon,
          iconFour: SoundCloudIcon,
          link: "https://github.com/rachelrondon/infinite_yoga-"
        },
        {
          title: 'House Keys x React',
          description: 'House Keys is a roommate finder website that I created with a team of developers and utilizes the Google Maps API.',
          image: ImageTwo,
          icon: CssIcon,
          iconOne: Html5Icon,
          iconTwo: JsIcon,
          iconThree: ReactIcon,
          iconFour: "",
          link: "https://github.com/housekeys"
        },
      ],
    }
  }

  render() {
    return (
      <div className="portfolio">
        {this.state.projects.map((project) => {
          return (
            <section className="card">
              <img className="card-image" src={project.image}></img>
              <article className="card-details">
                <p className="card-title">{project.title}</p>
                <ul className="card-icons">
                  <li><img className="card-icon" src={project.icon}></img></li>
                  <li><img className="card-icon" src={project.iconOne}></img></li>
                  <li><img className="card-icon" src={project.iconTwo}></img></li>
                  <li><img className="card-icon" src={project.iconThree}></img></li>
                  <li><img className="card-icon" src={project.iconFour}></img></li>
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
