import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
    //we need a place to store the treasure when we define it.
      treasureLocation: null
    }
  }

//this is a react lifecycle component. means it is defined by react, similar to Render or the Constructor.
//this randomly
componentDidMount(){
  let treasure = Math.floor(Math.random() * this.state.squares.length)
  this.setState({ treasureLocation: treasure })
}

handleGamePlay = (index) => {
  //this destructuring extracts squares from the state object, modifying it and then setting setting setting state
  //you can't directly set the state
  //you have to destructure the variable squares.
  const { squares, treasureLocation } = this.state
  if(index === treasureLocation){
    squares[index] = "🌙"
    this.setState({ squares: squares })
  } else {
  this.state.squares[index] = "🌵"
  this.setState({ squares: squares })
  }
}

  render(){
    console.log("treasureLocation:", this.state.treasureLocation)
    return(
      <React.Fragment>
      <center>
        <h1>Treasure Hunt App</h1>
        <div id="gameboard">
        { this.state.squares.map((value, index) => {
          return (
            <Square
              value = { value }
              key= { index }
              index= { index}
              handleGamePlay= { this.handleGamePlay
              }
            />
          )
        }) }
        </div>
        </center>
      </React.Fragment>
      //you have to add the key value pair inside the square component call in the render in order to refer to this.props.value and pull it into the square component
      //need to wrap ALL the square (and all the map logic) inside a div so that we can then style that div.
      // for user story 2- you pass index into the map and add index into the square component call.
    )
  }
}
export default App
