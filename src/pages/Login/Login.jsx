import React from "react";
import "./Login.css";
import "./Mains.js";

function LoginForm() {
  return (
    <div className="container">
      <div className="buttonsForm">
        <div className="btnColor"></div>
        <button id="btnSignin">Sign in</button>
        <button id="btnSignup">Sign up</button>
      </div>

      <form id="signin">
        <input type="text" placeholder="Email" required />
        <i className="fas fa-envelope iEmail"></i>
        <input type="password" placeholder="Password" required />
        <i className="fas fa-lock iPassword"></i>
        <div className="divCheck">
          <input type="checkbox" />
          <span>Remember Password</span>
        </div>
        <button type="submit">Sign in</button>
      </form>

      <form id="signup">
        <input type="text" placeholder="Email" required />
        <i className="fas fa-envelope iEmail"></i>
        <input type="password" placeholder="Password" required />
        <i className="fas fa-lock iPassword"></i>
        <input type="password" placeholder="Password" required />
        <i className="fas fa-lock iPassword2"></i>
        <div className="divCheck">
          <input type="checkbox" required />
          <span>Terms</span>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default LoginForm;
