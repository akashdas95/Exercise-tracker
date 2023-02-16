import React, { Component } from 'react';
import axios from 'axios';

export default class CreateExercise extends Component{
    constructor(props){
        super(props);

        this.onchangeUsername = this.onchangeUsername.bind(this);
        this.onchangeDescription = this.onchangeDescription.bind(this);
        this.onchangeDuration = this.onchangeDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            users: []
        }
    }

    componentDidMount(){
       axios.get('http://localhost:5000/users')
          .then(res =>{
              if(res.data.length > 0){
                  this.setState({
                      users: res.data.map(user=> user.username),
                      username: res.data[0].username
                  })
              }
          })
    }

    onchangeUsername(event){
        this.setState({
            username: event.target.value
        });
    }
    onchangeDescription(event){
        this.setState({
            description: event.target.value
        });
    }
    onchangeDuration(event){
        this.setState({
            duration: event.target.value
        });
    }

    onSubmit(event){
        event.preventDefault();

        const exercise = {
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration
        }


        axios.post('http://localhost:5000/exercises/add',exercise)
           .then(res => alert('data added'));
        window.location = '/';
    }


    render() {
        return(
            <div className='container mt-4'>
              <h3>Create new Exercise log</h3>
              <form onSubmit={this.onSubmit}>
                  <div className='form-group'>
                      <label>Username: </label>
                      <select ref='userInput'
                          required
                           className='form-control'
                           value={this.state.username}
                           onChange={this.onchangeUsername}>
                           {
                              this.state.users.map((user)=>{
                                return <option
                                   key= {user} value={user}
                                   >{user}
                                   </option>
                              })
                            };    
                      </select>
                  </div>
                  <div className='form-group'>
                     <label>Description</label>
                     <input type="text"
                        required
                        className='form-control'
                        value={this.state.description}
                        onChange={this.onchangeDescription} />
                  </div>
                  <div className='form-group'>
                     <label>Duration (in min):</label>
                     <input type="text"
                        required
                        className='form-control'
                        value={this.state.duration}
                        onChange={this.onchangeDuration} />
                  </div>
                  <hr />
                  <div className='form-group'>
                     <input type='submit' value='create Exercise log' className='btn btn-primary '/>
                  </div>
              </form> 
            </div>
        );
    }
} 