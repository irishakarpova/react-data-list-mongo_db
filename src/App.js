import React, {Component} from 'react';
import Header from './components/header'
import InfinityList from './components/infinity-list'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


class App extends Component {
  render(){
    return (
      <div>
        <Header/>
        <InfinityList/>
      </div>
    )}
}

export default App;
