import React from 'react'
import './App.css';
import Loading from './components/Loading';

import Home from './pages/Home';

import {Route, Switch} from 'react-router-dom';
import SingleService from './pages/SingleService';
import Contact from './pages/Contact';
export default class App extends React.Component {
  state = {
    loading: true
  }

  handleClick = () => {
    this.setState({
      loading: !this.state.loading
    })
  }
  render() {
    return (
      <>
      {this.state.loading? <Loading handleClick={this.handleClick} />:
      <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/services/:slug" component={SingleService} />
           <Route exact path="/contact" component={Contact} />
      </Switch> }
      </>
    )
  }   
}