import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../component/login.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const BaseUrl = "https://jcc.brandingyou.id/api/";

  let [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${BaseUrl}login`, data)
      .then(function (response) {
        console.log(response);
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("user", response.data.data.user);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(data);

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Masukan Email & Password</p>
              </div>

              <div className="form-outline mb-4">
                <input type="text" id="username" className="form-control form-control-lg" placeholder="Masukan Username" onChange={(e) => setData((data) = { ...data, username: e.target.value })} />
                <label className="form-label">
                  <br />
                  Masukan Username
                </label>
              </div>

              <div className="form-outline mb-3">
                <input type="password" id="password" className="form-control form-control-lg" placeholder="Masukan Password" onChange={(e) => setData((data) = { ...data, password: e.target.value })} />
                <label className="form-label">
                  <br /> Masukan Password
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label">Ingat Saya</label>
                </div>
                <Link to="#!" className="text-body">
                  Lupa password?
                </Link>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={handleSubmit}>
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Ga punya Akun Boss?{" "}
                  <Link to="/register" className="link-danger">
                    Register Dulu Bang
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
