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
          <div class="row" style={bannerStyles}>
            <img src="images/github.png" style={{width: "40%"}} />
            <h1>Search any username you'd like to find on Github.</h1>
          <input 
            type='text' 
            placeholder="Enter a name..." 
            value={this.state.input}
            onChange={this.onChange}
            style={{width:'70%'}}
            />
          <input 
            type='submit' 
            value="Search" className="btn btn-dark btn-block"
            style={{width:'70%'}}/>
          </div>
        </form>
      </div>
    )
  }
}

const bannerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

export default Search