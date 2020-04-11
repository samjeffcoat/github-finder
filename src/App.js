import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  //4. Making our request to the api
  //5. setting the new state {res.data.items} to the users that are returned from out api
  //search Github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  //{`3. when search users is fired we are going to call our function`}

  //Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });
  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <NavBar /*>title='Github Finder' icon='fab fa-github'*/ />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
