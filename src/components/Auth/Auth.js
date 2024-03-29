import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../store/AuthContext.js";
import Card from '../UI/Card.js';
import './Auth.css';
import logo from '../../images/20210430_budgetz.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);
  const { dispatch } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const body = { username, password };
    axios
      .post(register ? "/api/register" : "/api/login", body)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.data });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response.data.error || "An error occurred");
      });
    console.log("submitHandler called");
  };

  return (
    <main className="main">
      <div className="header">
        <img src={logo} alt="Logo" />
        <div className="content">
          <h1>Welcome to SpendWise!</h1>
          <h2>It's wise to be organized.</h2>
        </div>
      </div>
      <Card className="card auth">
        <form className="form auth-form" onSubmit={submitHandler}>
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>{register ? "Sign Up" : "Login"}</button>
        </form>
        <button className="switch-btn" onClick={() => setRegister(!register)}>
          Need to {register ? "Login" : "Sign Up"}?
        </button>
        <h6>It's free to sign up. Enjoy some coffee while you're at it.</h6>
      </Card>

      
    </main>
  );
};

export default Auth;