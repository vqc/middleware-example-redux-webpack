import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions/index';

class UserList extends Component {
  render(){
    if(!this.props.users){
      return (
        <div className="user-list">
          Loading . . . .
        </div>
      )
    }
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
  renderUser = (user) =>{
    return (
      <div className="card card-block" key={user.name}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a className="btn btn-primary">Website</a>
      </div>
    )
  }
  componentWillMount(){
    this.props.fetchUsers();
  }

}

function mapStateToProps(state){
  return {
    users: state.users,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchUsers: fetchUsers
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
