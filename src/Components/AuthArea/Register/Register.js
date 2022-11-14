import axios from "axios";
import { useState } from "react";

function Register() {
  const form = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(form);
  //   const [err, setErr] = useState();

  const update = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    setData({ ...data, [name]: val });
  };

  const send = (e) => {
    e.preventDefault();
    axios
      .post("URL", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
      .finally();
  };

  return (
    <div className="Register">
      Register
      <hr />
      <form onSubmit={send}>
        <label>
          <span>Email</span>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={(e) => setData(e.target.value)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="text"
            name="password"
            value={data.password}
            onChange={(e) => setData(e.target.value)}
          />
        </label>
        <br />
        <button>
          Register <span className="loader"></span>
        </button>
        <span></span>
      </form>
    </div>
  );
}

export default Register;
