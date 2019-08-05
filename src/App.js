import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  searchUsers = async text => {
    this.setState({ loading: true})
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      console.log(text)
    this.setState({ users: response.data.items, loading: false })
  }

  render () {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers}/>
          <Users users={this.state.users}/>
        </div>
      </div>
    );
  }
}
export default App;
