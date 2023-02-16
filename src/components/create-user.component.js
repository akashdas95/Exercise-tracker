import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component{
    constructor(props){
        super(props);

        // this.onchangeUsername = this.onchangeUsername.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }
    }

    onchangeUsername = (event)=>{
        this.setState({
            username: event.target.value
        });
    }

    onSubmit = (event) =>{
        event.preventDefault();

        const user = {
            username:this.state.username
        }


        axios.post('http://localhost:5000/users/add',user)
           .then(res => alert('user added'));

        this.setState({
            username: ''
        }) 
    }


    render() {
        return(
            <div className='container mt-4'>
              <h3>Create new User</h3>
              <form onSubmit={this.onSubmit}>
                  <div className='form-group'>
                      <label>Username: </label>
                      <input type="text"
                        required
                        className='form-control'
                        value={this.state.username}
                        onChange={this.onchangeUsername} />
                  </div>
                  <hr />
                  <div className='form-group'>
                     <input type='submit' value='create User' className='btn btn-primary '/>
                  </div>
                </form>  
            </div>
        );
    }
} 