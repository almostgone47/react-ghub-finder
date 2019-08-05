import React, {Component} from 'react'

class Search extends Component {
  state = {
    input: ""
  }
  onChange = (event) => {
    this.setState({ input: event.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.input)
    this.setState({input: ''})
  }
  render () {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <h5>Search any username you'd like to search on Github</h5>
          <input 
            type='text' 
            placeholder="Enter a name..." 
            value={this.state.input}
            onChange={this.onChange}
            />
          <input type='submit' value="Search" className="btn btn-dark btn-block"/>
        </form>
      </div>
    )
  }
}

export default Search