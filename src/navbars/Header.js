import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      navbar: ''
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu(){
    this.setState({
      navbar: this.state.navbar === 'block' ? 'none' : 'block'
    });
  }

  closeMenu(){
    this.setState({
      navbar: 'none'
    });
  }

  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-dark nav-header-bar fixed-top">
        <button onClick={this.toggleMenu} className="navbar-toggler pull-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" style={{'display':this.state.navbar}} id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" onClick={this.closeMenu} href="#lnkProfessional">Professional Summary</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.closeMenu} href="#lnkWork">Work Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.closeMenu} href="#lnkProjects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.closeMenu} href="#lnkEducation">Education Qualifications</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
