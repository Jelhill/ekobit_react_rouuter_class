import logo from './logo.svg';
import React, { Component } from 'react'
import { Switch, Route} from "react-router-dom"
import Posts from './Posts';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Management from './Components/Management';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Albums from './Components/Albums';
import Calculate from './Components/Calculate';

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      user: [],
      name: "Jelili"
    }
    console.log("Constructor")
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(jsonResponse => {
      console.log(jsonResponse)
      if(jsonResponse.length > 0) {
        this.setState({
          user: jsonResponse
        })
      }
    })
    .catch((err) => console.log(err))
  }

  render() {
    console.log("User In Render", this.state.user)
    return (
      <div>
      {/* {this.state.user.map((eachUser) => {
        return <div key={eachUser.id}>
          <h2>{eachUser.name}</h2>
          <p>{eachUser.email}</p>
          <p>{eachUser.phone}</p>
          <p>{eachUser.username}</p>
        </div>
      })}
        <Posts /> */}
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/management" component={Management}/>
          <Route exact path="/customersPosts" component={Posts}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/profile/:color" component={Profile}/>
          <Route exact path="/album" component={Albums}/>
          <Route exact path="/calculate" component={Calculate}/>

        </Switch>
      </div>
    )
  }
}
