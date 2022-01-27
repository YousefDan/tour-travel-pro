import "./login-form.scss";

const LoginForm = ({ toggleLoginForm }) => {
  return (
    <form
      style={{ transform: toggleLoginForm && "scale(1)" }}
      className="login-form"
    >
      <div className="inputGroup">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="enter your username" />
      </div>
      <div className="inputGroup">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="enter your password"
        />
      </div>
      <div className="checkboxWrapper">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember Me</label>
      </div>
      <button className="btn">Login</button>
    </form>
  );
};

export default LoginForm;
