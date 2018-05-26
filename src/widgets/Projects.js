import React from 'react';

class Projects extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    var projects = this.props.projects.map((project, index) => {
      return <div key={index} className="w3-container">
         <h5 className="w3-opacity"><b>{project.working_position} / {project.project_name}</b></h5>
         <h6 className="w3-text-teal">
          <i className="fa fa-calendar fa-fw w3-margin-right"></i>
          { project.start_date ? (project.start_date + ' - ' + (project.end_date === 'current' ? <span className="w3-tag w3-teal w3-round">Current</span> : project.end_date)) : project.duration }
         </h6>
         <p>{project.project_desc}</p>
         {((this.props.projects.length-1) > index) ? <hr/> : ''}
      </div>
    });

    return(
      <div id="lnkProjects" className="w3-container w3-card w3-white w3-margin-bottom">
         <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Projects</h2>
         {projects}
      </div>
    );
  }
}

export default Projects;
