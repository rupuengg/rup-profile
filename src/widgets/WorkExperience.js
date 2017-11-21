import React from 'react';

class WorkExperience extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    var work_experiencs = this.props.work_experiencs.map((work_experienc, index) => {
      if((this.props.work_experiencs.length-1) > index){
        return <div className="w3-container">
           <h5 className="w3-opacity"><b>{work_experienc.working_position} / {work_experienc.project_name}</b></h5>
           <h6 className="w3-text-teal">
            <i className="fa fa-calendar fa-fw w3-margin-right"></i>
            {work_experienc.start_date} - {work_experienc.end_date === 'current' ? <span className="w3-tag w3-teal w3-round">Current</span> : work_experienc.end_date}
           </h6>
           <p>{work_experienc.project_desc}</p>
           <hr/>
        </div>
      }else{
        return <div className="w3-container">
           <h5 className="w3-opacity"><b>{work_experienc.working_position} / {work_experienc.project_name}</b></h5>
           <h6 className="w3-text-teal">
            <i className="fa fa-calendar fa-fw w3-margin-right"></i>
            {work_experienc.start_date} - {work_experienc.end_date}
           </h6>
           <p>{work_experienc.project_desc}</p>
        </div>
      }
    });

    return(
      <div className="w3-container w3-card w3-white w3-margin-bottom">
         <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
         {work_experiencs}
      </div>
    );
  }
}

export default WorkExperience;
