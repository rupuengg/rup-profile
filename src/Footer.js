import React from 'react';

class Footer extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <footer className="w3-container w3-teal w3-center w3-margin-top">
         <p>Find me on social media.</p>
         <i className="fa fa-facebook-official w3-hover-opacity"></i>
         <i className="fa fa-instagram w3-hover-opacity"></i>
         <i className="fa fa-snapchat w3-hover-opacity"></i>
         <i className="fa fa-pinterest-p w3-hover-opacity"></i>
         <i className="fa fa-twitter w3-hover-opacity"></i>
         <i className="fa fa-linkedin w3-hover-opacity"></i>
      </footer>
    );
  }
}
// <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p>

export default Footer;
