import React, { Component } from 'react'

class LoginPage extends Component {

  render() {
    return (
      <div>
        <p>You don't need to log in to use the app, </p>
        <p>but you won't be able to save your work</p>

        <form>
          <p>login / signup</p>
          <div>
            <span>email:</span>
            <input type="text" />
          </div>
          <div>
            <span>password:</span>
            <input type="password" />
          </div>
        </form>

      </div>
    );
  }
}

export default LoginPage