import React, { Component } from 'react'

//we are going to make an instance of a single square, and then we are gonna render that square 9 times
class Square extends Component{

  handleClick = () => {
    this.props.handleGamePlay(this.props.index)
  }
  render(){
    return(
      <React.Fragment>
      <div id="square" onClick={ this.handleClick }>{ this.props.value }
      </div>
      </React.Fragment>
    )
  }
}
export default Square

// you have to add the inner HTML in order to see a ? (the string) inside every box

// add the onClick into the div id- wrap the action in curly braces because it will be a function in Javascript
