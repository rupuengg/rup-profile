import React, { Component } from 'react';

import Header from './navbars/Header';

import Profile from './widgets/Profile';
import Skills from './widgets/Skills';
import Languages from './widgets/Languages';
import Professionals from './widgets/Professionals';
import WorkExperience from './widgets/WorkExperience';
import Projects from './widgets/Projects';
import Educations from './widgets/Educations';

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    console.log(this.props.profile);
  }

  render(){
    var designation = this.props.profile.basic_info.designation;
    var dob = this.props.profile.basic_info.dob;
    var current_location = this.props.profile.basic_info.current_location;
    var email = this.props.profile.basic_info.email;
    var mobile = this.props.profile.basic_info.mobile;
    var skills = this.props.profile.skills;
    var languages = this.props.profile.languages;
    var professional = this.props.profile.professional;
    var work_experiencs = this.props.profile.work_experiencs;
    var projects = this.props.profile.projects;
    var educations = this.props.profile.educations;

    return (
      <div className="w3-content w3-margin-top" style={{'maxWidth':'1400px'}}>
        <Header />
        <div className="w3-row-padding" style={{'marginTop':'70px'}}>
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                 <Profile profile={this.props.profile.basic_info} />
                 <div className="w3-container">
                    <p>
                      <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                      {designation}
                    </p>
                     <p>
                       <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                       {dob}
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
             <Professionals professional={professional} />
             <WorkExperience work_experiencs={work_experiencs} />
             <Projects projects={projects} />
             <Educations educations={educations} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
