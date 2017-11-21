import React, { Component } from 'react';

import Profile from './widgets/Profile';
import Skills from './widgets/Skills';
import Languages from './widgets/Languages';
import WorkExperience from './widgets/WorkExperience';
import Educations from './widgets/Educations';

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    console.log(this.props.profile);
  }

  render(){
    var designation = this.props.profile.basic_info.designation;
    var current_location = this.props.profile.basic_info.current_location;
    var email = this.props.profile.basic_info.email;
    var mobile = this.props.profile.basic_info.mobile;
    var skills = this.props.profile.skills;
    var languages = this.props.profile.languages;
    var work_experiencs = this.props.profile.work_experiencs;
    var educations = this.props.profile.educations;

    return (
      <div className="w3-content w3-margin-top" style={{'maxWidth':'1400px'}}>
        <div className="w3-row-padding">
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                 <Profile profile={this.props.profile.basic_info} />
                 <div className="w3-container">
                    <p>
                      <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      {designation}
                    </p>
                    <p>
                      <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      {current_location}
                    </p>
                    <p>
                      <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      {email}
                    </p>
                    <p>
                      <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      {mobile}
                    </p>
                    <hr/>
                    <Skills skills={skills} />
                    <br/>
                    <Languages languages={languages} />
                    <br/>
                 </div>
              </div>
            </div>

            <div className="w3-twothird">
             <WorkExperience work_experiencs={work_experiencs} />
             <Educations educations={educations} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
