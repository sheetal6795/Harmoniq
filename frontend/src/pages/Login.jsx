import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">

      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p>Login to continue your wellness journey.</p>

        <input type="email" placeholder="Enter your email" />

        <input type="password" placeholder="Enter your password" />

        <button>Login</button>

        <span>
          Don't have an account?{" "}
          <Link to="/signup">Sign up</Link>
        </span>

      </div>

    </div>
  );
}

export default Login;