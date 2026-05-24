import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Create Account ✨</h1>

        <p>Start your wellness journey today.</p>

        <input type="text" placeholder="Enter your name" />

        <input type="email" placeholder="Enter your email" />

        <input type="password" placeholder="Create password" />

        <button>Sign Up</button>

        <span>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </span>

      </div>

    </div>
  );
}

export default Signup;