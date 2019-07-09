import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from '../Components/CardList';
//import {robots} from '../robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';



class App extends Component {
  // 1 First
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  // 3 Third
  componentDidMount(){

    // testing the passed {store} from Redux implementation ...
    // console.log(this.props.store.getState()); // will return the intial state...

    setTimeout(() => { // just for trying [Loading... page]
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
        .then(users => this.setState({robots:users}));
    },2000);
   
  }

  onSearchChange = (event) => {
    this.setState({searchField:event.target.value});
  }
  // 2 Second
  render() {

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });

    if(this.state.robots.length === 0) {
      return (
        <div className='tc ma6'>
          <i className="fa fa-spinner fa-spin" ></i>
          <h3>Loading ...</h3>
        </div>
      );
    } else {
      return (
        <div className='tc bg-light-green'>
          <h1 className='f1 tc' style={{textTransform: 'uppercase'}}>RoboFriends</h1>
  
  
          <div>
            <SearchBox searchChange={this.onSearchChange}/>
          </div>
          <br/>
  
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
      </div>
      );
    }
    
  };
}

export default App;
