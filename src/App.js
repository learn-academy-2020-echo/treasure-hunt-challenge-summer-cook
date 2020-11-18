import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

handleGamePlay = (index) => {
  alert(index)
}

  render(){
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
