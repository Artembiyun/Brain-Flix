import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <Link to="/main/1">
          <div id="header__logo">
            <img src={"/Assets/Icons/BrainFlixLogo.svg"} alt="Brainflix-logo"></img>
          </div>
        </Link>
        <div id="header__search">
          <form>
            <input type="text" id="header__search--text-bar" placeholder="Search"></input>
            <button type="submit" id="header__search--submit">
              <img id="search" src={"/Assets/Icons/Search.svg"} alt="search-icon"></img>
            </button>
          </form>
        </div>
        <div id="header__buttons">
        <Link to="/upload">
          <div>
            <img src={"/Assets/Icons/Content\ Upload.svg"} alt="upload"></img>
          </div>
        </Link>
          <div className="profile"></div>
        </div>
      </div>

    )
  }
}

export default Header;