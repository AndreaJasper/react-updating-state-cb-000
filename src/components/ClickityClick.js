import React from 'react'

  class ClickityClick extends React.Component {
    
    constructor() {
      super();
      
      this.state = {
        hasBeenClicked: false
      };
    }
    
    handlClick = () => {
      
    }
    
    render() {
      return(
        <div>
          <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked;</p>
          <button onClick={this.handlClick}>Click me!</button>
        </div>
      );
    }
  }

export default ClickityClick;
