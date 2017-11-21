import React from 'react';

class Educations extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    var educations = this.props.educations.map((education, index) => {
      if((this.props.educations.length-1) > index){
        return (
          <div className="w3-container">
             <h5 className="w3-opacity"><b>{education.course}</b></h5>
             {education.forever ? <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6> : <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{education.start_date} - {education.end_date}</h6>}
             <p>{education.description}</p>
             <hr/>
          </div>
        );
      }else{
        return (
          <div className="w3-container">
            <h5 className="w3-opacity"><b>{education.course}</b></h5>
            {education.forever ? <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6> : <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{education.start_date} - {education.end_date}</h6>}
            <p>{education.description}</p>
          </div>
        );
      }
    });

    return(
      <div className="w3-container w3-card w3-white">
         <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
         {educations}
      </div>
    );
  }
}

export default Educations;
