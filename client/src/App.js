import React from 'react';
import './App.css';
import axios from 'axios'
import Spotlight from './components/Spotlight'
import Nav from './components/Nav'
import FollowerSpotlight from './components/FollowerSpotlight'


class App extends React.Component {
 
  state = {
    username: 'e94canales',
    userData: [],
    followers: [],
    searchValue: ''
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then( response => this.setState({userData: response.data}))
      .catch(error => console.log(error))

    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then( response => this.setState({followers: response.data}))
      .catch(error => console.log(error))
  }

  inputHandler = e => {
    this.setState(
        {
            searchValue: e.target.value
        }
    )
  }
  submitHandler = e => {
    e.preventDefault()

    this.setState(
      {
        username: this.state.searchValue
      }
    )
    
      axios
        .get(`https://api.github.com/users/${this.state.username}`)
        .then( response => this.setState({userData: response.data}))
        .catch(error => console.log(error))
  
      axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${this.state.username}/followers`)
        .then( response => this.setState({followers: response.data}))
        .catch(error => console.log(error))

  }

  render() {
    return (
      <div className='App'>
        <Nav searchValue={this.state.searchValue} inputHandler={this.inputHandler} submitHandler={this.submitHandler}/>
        <Spotlight userData={this.state.userData}/>
        <FollowerSpotlight followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;
