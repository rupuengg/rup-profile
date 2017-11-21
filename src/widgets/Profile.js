import React from 'react';

// import profile from '../avatar_hat.jpg';

class Profile extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    var profile_image = require('../' + this.props.profile.profile_image);
    return(
      <div className="w3-display-container">
         <img src={profile_image} style={{'width':'100%'}} alt="Avatar"/>
         <div className="w3-display-bottomleft w3-container w3-text-black">
            <h2>{this.props.profile.first_name + ' ' + this.props.profile.middle_name + ' ' + this.props.profile.last_name}</h2>
         </div>
      </div>
    );
  }
}

export default Profile;
