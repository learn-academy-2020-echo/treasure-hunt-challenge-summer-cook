import React, { Component } from 'react'

//we are going to make an instance of a single square, and then we are gonna render that square 9 times
class Square extends Component{
  render(){
    return(
      <React.Fragment>
      <div id="square">{ this.props.value }
      </div>
      </React.Fragment>
    )
  }
}
export default Square

// you have to add the inner HTML in order to see a ? (the string) inside every box
