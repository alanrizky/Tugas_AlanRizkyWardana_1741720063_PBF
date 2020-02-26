import React from "react";
import "./Login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="judul">
          <h2>Form Login</h2>
          <br></br>
          <div className="kotak_login">
            <h1>Tugas Pertemuan</h1>
            <h1>ketiga</h1>

            <form>
                <label className = "label_login">Username </label>
                <input type = "text" name = "uername" class = "form_login" placeholder = "masukkan username"></input>
                
                <br></br>

                <label className = "label_login">Password </label>
                <input type = "password" name = "password" class = "form_login" placeholder = "Masukkan password anda"></input>
                <br></br>

                <input type = "submit" className = "button_login" value="Login"/>
                <br></br>
                
                <input type = "checkbox" className = "checkbox" value="Remember Me"/>Remember Me

                <br></br>
                <br></br>
                <br></br>

                <input type = "submit" className = "button_cancel" value="Cancel"/>


            </form>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
