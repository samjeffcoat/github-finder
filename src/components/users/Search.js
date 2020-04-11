import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };
  static propTypes = e => {
      searchUsers: PropTypes.func.isRequired,
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  //2. onsubmit is fired and calls our searchUsers function
  onSubmit(e) {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users.....'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
