import React from 'react';

class Skills extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    var skills = this.props.skills.map((skill, index) =>
      <li key={index}>
        <p>{skill.name}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
           <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{'width':skill.rating}}>{skill.rating}</div>
        </div>
      </li>
    );

    return(
      <div>
        <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
        <ul>
          {skills}
        </ul>
      </div>
    );
  }
}

export default Skills;
