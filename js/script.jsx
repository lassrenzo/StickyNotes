class FormLogin extends React.Component {
  render() {
    return ( 
    <div>
     <input type="email" class="form-control form-control-lg" placeholder=" Phone Number / Username / Email" autofocus/>
     </div>
    )}
}
class FormPassword extends React.Component {
  render() {
    return (<input type="password" class="form-control form-control-lg mt-2" placeholder=" Password " />
    );
  }
}

class LoginButton extends React.Component {
  render() {
    return ( <div>
    <button type="submit" class="btn btn-lg btn-danger login-btn">Log In</button>
    <a href="" class="login-link text-primary">Forgot Password</a>
    <a href="" class="login-link text-primary">Log in with SMS</a>   
    <hr/>
    </div>
    )}
}

class LoginWith extends React.Component {
  render() {
    return (
    <div class="login-with d-flex justify-content-around">
      <a href="" type="button" class="btn-lg btn-primary" target="_blank">
          <i class="fab fa-facebook sm-icon"> Facebook</i>
      </a>

      <a href="" type="button" class="btn-lg btn-primary" target="_blank">
          <i class="fab fa-google sm-icon"> Google</i>
      </a>

      <a href="" type="button" class="btn-lg btn-dark" target="_blank">
          <i class="fab fa-apple sm-icon"> Apple</i>
      </a>
</div>);
  }
}

class NewAccount extends React.Component {
  render() {
    return (
    <div class="new-account text-muted">
<p>New to Shopee?
<a href="" class="new-link text-danger"> Sign Up</a>   
</p>
</div>);
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
      <div class="container-footer">
     <p> © 2021 Shopee. All Rights Reserved</p>
<p>Country & Region: Singapore Indonesia Taiwan Thailand Malaysia Vietnam Philippines Brazil México</p>
</div>
  </footer>);
  }
}
  
// VARIABLE FOR JSX REACT
var destination = document.getElementById('app');

ReactDOM.render(
// WHAt
<div class="card container" id="login-form">
<FormLogin/><br />
<FormPassword/><br />
<LoginButton/>
<LoginWith/>
<NewAccount/>
</div>,
// WHERE
// THIS IS CODE FOR DESTINATION VARIABLE

  destination
);