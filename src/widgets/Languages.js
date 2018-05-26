import React from 'react';

class Languages extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    var languages = this.props.languages.map((language, index) =>
      <li key={index}>
        <p>{language.name}</p>
        <div className="w3-light-grey w3-round-xlarge">
           <div className="w3-round-xlarge w3-teal" style={{'height':'24px','width':language.rating}}></div>
        </div>
      </li>
    );

    return(
      <div>
        <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
        {languages}
      </div>
    );
  }
}

export default Languages;
