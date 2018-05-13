import React, { Component } from 'react';
import './App.css';
import PageOne from './pageOne';
import LandingPage from './landingPage'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {enter: false, position: 0}
		this.toWebsite = this.toWebsite.bind(this)
	}

	componentDidMount() {
       window.addEventListener('scroll', (e)=> this.setState({position: window.scrollY }));
    }

	toWebsite(){
		this.setState({enter: true})
	}
  render() {
    return (
      <div className="App">
        {this.state.enter?<LandingPage position={this.state.position}/>: <PageOne toWebsite={this.toWebsite}/>}
      </div>
    );
  }
}

export default App;
