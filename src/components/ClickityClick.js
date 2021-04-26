
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      toggled: false
    };
  }
 
  handleClick = () => {
   this.setState(previousState => {
     return:{
       toggled: !previousState.toggled
     }
   })
  }
 
  render() {
    return (
      <div>
       <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;