import React from 'react';

class Professionals extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    var professional = this.props.professional.map((profess, index) => {
      return <div key={index} className="w3-container">
         <h5 className="w3-opacity" style={{'fontSize':'14px','marginTop':'0px'}}>
          <i className="fa fa-circle w3-margin-right"></i>
          {profess}
         </h5>
      </div>
    });

    return(
      <div id="lnkProfessional" className="w3-container w3-card w3-white w3-margin-bottom">
         <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-list fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Professional Summary</h2>
         {professional}
      </div>
    );
  }
}

export default Professionals;
