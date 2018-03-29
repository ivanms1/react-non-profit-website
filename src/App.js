import React, { Component } from 'react';
import './App.css';
import PageOne from './pageOne';
import LandingPage from './landingPage'



class App extends Component {
	constructor(props){
		super(props)
		this.state = {enter: false}
		this.toWebsite = this.toWebsite.bind(this)
	}

	toWebsite(){
		this.setState({enter: true})
	}
  render() {
    return (
      <div className="App">
        {this.state.enter?<LandingPage/>: <PageOne toWebsite={this.toWebsite}/>}
      </div>
    );
  }
}

export default App;
