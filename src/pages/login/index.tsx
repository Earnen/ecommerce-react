import "./login.css";
import { useEffect, useState } from "react";
import { useUsersContext } from "../../components/common/context/usercontext";
import { User } from "../../interfaces/user";
import { useAuthDispatch } from "../../components/common/context/authcontext";
import { useNavigate } from "react-router-dom";

async function getUserData() {
  try {
    const data = await fetch("src/data/users.json");
    const JSONdata = await data.json();
    return JSONdata;
  } catch (error) {
    console.log(error);
  }
}

export function Login() {
  const usercontext = useUsersContext();
  const [users, setUsers] = useState([] as User[]);
  const [userData, setUserData] = useState({ mail: "", password: "" });
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function dataUsers() {
      const allUsersData = await getUserData();
      setUsers(allUsersData);
    }
    dataUsers();
  }, []);

  function handleLogin() {
    dispatch({ type: "LOGIN" });
    navigate("/main");
  }

  function validateForm(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const { mail, password } = userData;

    const userFound = users.find(
      (element) => mail === element.mail && password === element.password
    );

    if (userFound) {
      handleLogin();
      usercontext.setUser(userFound);
    } else {
      alert("Incorrect email or password. Please try again");
    }
  }

  return (
    <section className="loginPage">
      <div className="container">
        <form className="form" onSubmit={validateForm}>
          <div className="inputdiv">
            <input
              id="email"
              type="email"
              name="inputEmail"
              className="inputLogin"
              autoComplete="off"
              value={userData.mail}
              onChange={(e) =>
                setUserData({ ...userData, mail: e.target.value })
              }
              placeholder="email"
              required
            />
          </div>
          <div className="inputdiv">
            <input
              id="pass"
              type="password"
              name="inputPassword"
              className="inputLogin"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              placeholder="password"
              required
            />
          </div>
          <button className="loginBtn" type="submit">
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}
