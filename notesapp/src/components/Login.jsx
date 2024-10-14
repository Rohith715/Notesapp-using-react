import React from "react";
import { useNavigate } from "react-router-dom";
<link href="./rr.css"></link>;
const Login = () => {
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "Rohit" && password === "123") {
      console.log("OK");
      navigate("/notesapp");
    } else {
      alert("Wrong password");
    }
  };
  return (
    <>
      <div id="box">
        <div id="input">
          <form action="/login">
            <div class="typing-demo">Your very own Notes app</div>
            <p class="dd">Login</p>
            <input type="text" id="username" placeholder="username" />
            <input type="password" id="password" placeholder="password" />
            <button onClick={login} id="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
