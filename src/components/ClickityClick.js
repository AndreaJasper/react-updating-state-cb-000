
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      count: 0
    };
  }
 
  handleClick = () => {
   let newCount = this.state.count + 1
   
   this.setState({
    count: newCount  
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