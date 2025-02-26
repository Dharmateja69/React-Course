import { useState } from "react";
import "../p-9/index.css";
const Formvalidation = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfrim] = useState("");
  const [nameerror, setnameerr] = useState("");
  const [Emailerror, setEmailerror] = useState("");
  const [passerror, setpasserr] = useState("");
  const [confirmerror, setConferr] = useState("");
  const [ncolor, setncolor] = useState("");
  const [ecolor, setecolor] = useState("");
  const [Pcolor, setPcolor] = useState("");
  const [cfpcolor, setcfpcolor] = useState("");

  const handsbumit = (e) => {
    e.preventDefault();
    if (name.length > 8) {
      setnameerr("");
      setncolor("green");
    } else {
      setnameerr("User name should be of length 8");
      setncolor("red");
      setname("");
    }
    if (email.includes("@gmail")) {
      setEmailerror("");
      setecolor("green");
    } else {
      setEmailerror("invalid email");
      setecolor("red");
      setemail("");
    }
    if (password.length >= 8) {
      setpasserr("");
      setPcolor("green");
    } else {
      setpasserr("User password should be of length 8");
      setPcolor("red");
      setpassword("");
    }
    if (confirm === password) {
      setConferr("");
      setcfpcolor("green");
    } else {
      setConferr("Password doesnt match");
      setcfpcolor("red");
      setconfrim("");
    }
  };

  return (
    <div className="card">
      <div className="card-image"></div>
      <form>
        <input
          type="text"
          value={name}
          style={{ borderColor: ncolor }}
          placeholder="username"
          onChange={(e) => setname(e.target.value)}
        />
        <p className="error">{nameerror}</p>{" "}
        <input
          type="text"
          value={email}
          style={{ borderColor: ecolor }}
          placeholder="jhon@gmail.com"
          onChange={(e) => setemail(e.target.value)}
        />
        <p className="error">{Emailerror}</p>{" "}
        <input
          type="text"
          value={password}
          style={{ borderColor: Pcolor }}
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <p className="error">{passerror}</p>{" "}
        <input
          type="text"
          value={confirm}
          style={{ borderColor: cfpcolor }}
          placeholder="Confirm Password"
          onChange={(e) => setconfrim(e.target.value)}
        />
        <p className="error">{confirmerror}</p>
        <button className="submit-btn" onClick={handsbumit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formvalidation;
