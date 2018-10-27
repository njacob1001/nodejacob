import React, { PureComponent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './_minimal_header.scss';

class MinimalHeader extends PureComponent {
  constructor() {
    super();
    this.state = {
      hamburger: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state.hamburger);
  }

  handleClick() {
    this.setState({ hamburger: !this.state.hamburger });
    console.log(this.state.hamburger);
  }

  render() {
    const active = this.state.hamburger ? 'is-active' : '';
    return (
      <header className="Header-wrapper">
        <nav className="Header-container">
          <Link to="/" className="Header-item Logo">
            <svg
              className="Header-logo"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 165 165"
              style={{ enableBackground: 'new 0 0 165 165' }}
              xmlSpace="preserve"
            >
              <path id="border-logo"className="Svg-borderDark is-light" d="M15.8,53.4v-3.8c0-3.5,1.9-6.7,4.9-8.5L77.6,8.3c3-1.8,6.8-1.8,9.8,0l56.9,32.9c3,1.8,4.9,5,4.9,8.5v65.7c0,3.5-1.8,6.7-4.9,8.5l-56.9,32.9c-3,1.8-6.8,1.8-9.8,0l-56.9-32.9c-3-1.8-4.9-5-4.9-8.5V53.4" /> {/* eslint-disable-line */}
              <path id="letter" className="Svg-letterDark" d="M54.9,112.5v-4.4c0-4.7,3.3-6.6,7.3-4.2l15.3,8.8c3,1.7,6.8,1.7,9.8,0l18.7-10.9c3-1.8,4.9-5,4.9-8.5l-0.1-21.6c0-3.5-1.9-6.7-4.9-8.4L87.4,52.5c-3-1.7-6.7-1.7-9.7,0l-10.2,5.8c-3.1,1.7-6.8,1.7-9.8-0.1L53.9,56c-4-2.4-3.9-6.2,0.1-8.5l23.6-13.6c3-1.8,6.8-1.7,9.8,0L122.1,54c3,1.8,4.9,5,4.9,8.5v40.2c0,3.5-1.9,6.7-4.9,8.5l-34.7,20c-3,1.7-6.7,1.7-9.8,0L59.8,121C56.8,119.3,54.9,116,54.9,112.5z" /> {/* eslint-disable-line */}
              <path id="light" className="Svg-letterLight" d="M122.1,54L87.4,33.9c-3-1.8-6.8-1.8-9.8,0L54,47.5c-4,2.3-4,6.1-0.1,8.5l3.7,2.2c3,1.8,6.8,1.8,9.8,0.1l10.2-5.8c3-1.7,6.7-1.7,9.7,0l18.6,10.7c1.5,0.9,2.7,2.1,3.6,3.6l16.1-9.3C124.8,56.1,123.6,54.9,122.1,54z" /> {/* eslint-disable-line */}
            </svg>
            <h1 className="Visually-hidden">Jacob Gonzalez</h1>
          </Link>
          <div onClick={this.handleClick} className={`Header-item Menu ${active}`}>
            <NavLink exact activeClassName="is-active" className="Header-link" to="/">work</NavLink>
            <NavLink activeClassName="is-active" className="Header-link" to="/about">about</NavLink>
            <NavLink activeClassName="is-active" className="Header-link" to="/blogs">blog</NavLink>
          </div>
          <button
            id="HMenu"
            onClick={this.handleClick}
            className={`hamburger hamburger--squeeze ${active}`}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </nav>
      </header>
    );
  }
}

export default MinimalHeader;
