import React, { PureComponent } from 'react';
import SectionName from './section-name';
import ItemProject from './item';
import webData from './web_data';
import gamesData from './games_data';
//import './_project_index.scss';

class Projects extends PureComponent {
  constructor() {
    super();
    this.state = {
      web: false,
      games: false,
      webShow: false,
      gamesShow: false
    };
    this.webProjects = React.createRef();
    this.gameProjects = React.createRef();
    this.handleViews = this.handleViews.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth > 992) {
      window.addEventListener('scroll', this.handleViews);
    }
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleViews);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    if (window.innerWidth > 992) {
      window.addEventListener('scroll', this.handleViews);
    } else {
      window.removeEventListener('scroll', this.handleViews);
    }
  }

  handleViews() {
    const d = document;
    //const WebSection = d.getElementById('web');
    //const GamesSection = d.getElementById('games');

    const WebSection = this.webProjects.current;
    const GamesSection = this.gameProjects.current;

    const logoHeader = d.getElementById('border-logo');
    const logoLight = d.querySelector('.is-light');
    const logoDark = d.querySelector('.is-dark');

    const webCoor = WebSection.getBoundingClientRect();
    const gamesCoor = GamesSection.getBoundingClientRect();

    const { top: webDist, height: WebSectionHeight } = webCoor;
    const { top: gamesDist, height: GamesSectionHeight } = gamesCoor;

    const deltaWeb = WebSectionHeight + webDist;
    const deltaGames = GamesSectionHeight + gamesDist;
    const showWebSection = webDist <= 400;
    const showGamesSection = gamesDist <= 400;
    let fixWebSec = false;
    let fixGameSec = false;

    if (webDist <= 0 && !logoDark) {
      logoHeader.classList.remove('is-light');
      logoHeader.classList.add('is-dark');
    } else if (webDist >= 0 && !logoLight) {
      logoHeader.classList.remove('is-dark');
      logoHeader.classList.add('is-light');
    }

    fixWebSec = (webDist <= 0 && deltaWeb >= 0);
    fixGameSec = (gamesDist <= 0 && deltaGames >= 0);

    this.setState({
      web: fixWebSec,
      games: fixGameSec,
      webShow: showWebSection,
      gamesShow: showGamesSection
    });
  }

  render() {
    return (
      <section className="Project-container">
        <div ref={this.webProjects} className="Project-category" id="web">
          <div className="Project-header">
            <SectionName
              isFixed={this.state.web}
              isShow={this.state.webShow}
              title="responsive, single pages websites"
              text="Improving the user experience my websites
              are made as single page applications,
              as long as is necesary, with clean code
              and the best news feautres on the web."
              tags={['html5', 'css3', 'js']}
            />
          </div>
          <div className="Project-demos">
            {webData.map((item, index) => (
              <ItemProject
                key={item.id}
                position={index}
                imgs={item.images}
                name={item.name}
              />
            ))}
          </div>
        </div>
        <div ref={this.gameProjects} className="Project-category" id="games">
          <div className="Project-header">
            <SectionName
              isFixed={this.state.games}
              isShow={this.state.gamesShow}
              shortName="games"
              title="Video Games, Benefist for Companys"
              text="Using videogmaes you can attract more people,
                this is so beneficist to comanyes for inprove the sells"
              tags={['Unity', 'C#', 'Maya3d']}
            />
          </div>
          <div className="Project-demos">
            {gamesData.map((game, index) => (
              <ItemProject
                key={game.id}
                position={index}
                imgs={game.images}
                name={game.name}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
