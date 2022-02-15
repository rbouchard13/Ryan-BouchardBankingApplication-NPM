import React from 'react';


function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <a id="brand" className="navbar-brand" href="/#" title="Go to BadBank Home">BadBank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <li id="CreateAccount" className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" title="Create a new user account">Create Account</a>
          </li>
          <li id="login" className="nav-item">
            <a className="nav-link" href="#/login/" title="Login to access your account">Login</a>
          </li>
          <li id="deposit" className="nav-item">
          <a className="nav-link" href="#/deposit/" title="Process Deposit Transaction">Deposit</a>
          </li>
          <li id="withdraw" className="nav-item">
          <a className="nav-link" href="#/withdraw/" title="Process Withdraw Transaction">Withdraw</a>
          </li>
          <li id="alldata" className="nav-item">
          <a className="nav-link" href="#/alldata/" title="View Session Log">All Data</a>
          </li>         
        </div>
      </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar;