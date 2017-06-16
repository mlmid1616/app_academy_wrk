import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render(){

    if (this.props.currentUser){
      return (
        <section>
          <h1>Welcome to the page, {this.props.currentUser}</h1>
          <button onClick={this.props.logout} />
        </section>
      );
    } else {
      return (
        <section>
          <Link to="/signup">SignUp!</Link>
          <Link to="/login">Login</Link>
        </section>
      );
    }

  }
}

export default Greeting;
