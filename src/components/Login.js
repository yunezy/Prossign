import React, { Component } from "react";
import { firebase } from '../firebase';
import { HeaderHome } from './layout/HeaderHome';

//Log-in / Sign-up function of the app
class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
      });
  }

  signup(e){
    e.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
      
      })
    .then(
      firebase.firestore().collection('users').add({
        email: this.state.email,
      })
    )
      
  }


  render(){
    return(

      <div className="login">
        <HeaderHome/>
        <form>
          <div class="login__email" className="login__email">
            <label for="exampleInputEmail1">
              <p>Email address</p>
            </label>
            <p></p>
            <input value={this.state.email} 
            onChange={this.handleChange}
             type="email" 
             name="email" 
             className="login__email__input"
             class="form-control" 
             id="exampleInputEmail1" 
             aria-describedby="emailHelp" 
             placeholder="e.g: test@123.com" />
          </div>
          <div class="login__password">
            <label for="exampleInputPassword1">
              <p>Password</p>
              </label>
              <input value={this.state.password} 
              onChange={this.handleChange} 
              type="password" 
              className="login__password__input"
              name="password" 
              class="form-control" 
              id="exampleInputPassword1" 
              placeholder="e.g: 123456" />
          </div>
          <button type="submit" onClick={this.login} className="login__login">Login</button>
          <button onClick={this.signup } style={{marginLeft:'25px'}} className="login__signup">Signup</button>
        </form>
      </div>
    );
  }
}
export default Login;

