import React from 'react'


class UserItem extends React.Component {
  render () {
    return (
      <div className="card text-center">
        <img 
          src={this.props.user.avatar_url}
          alt=""
          className="round-img"
          style={{width: '60px'}}/>
        <p>{this.props.user.login}</p>
        <a href={this.props.user.html_url} className="btn btn-dark btn-sm my-1">Link</a>
      </div>
    )
  }
}
export default UserItem;