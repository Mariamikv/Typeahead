import React, { Component } from 'react'
import { getUsers } from '../api/Data';
import SearchInput from '../components/SearchInput'
import UserList from '../components/List';
import "../assets/styles/style.css"

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: null,
    }
  }

  onSearch = (e) => {
    const {value} = e.target;

    if (value.trim() === '') {
      this.setState({
        users: null
      });

      return false;
    }

    getUsers(value).then(response => {
      //console.log(response);
      this.setState({
        users: response.items
      })
    })
  }

  render() {

    const {users} = this.state;

    return (
      <div className="card-con">
        <div className="card-body">
          <SearchInput handleSearch={this.onSearch} />
            {
              users && <UserList users={users} />
            }  
        </div>
      </div>
    )
  }
}