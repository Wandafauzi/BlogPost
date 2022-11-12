import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const BaseUrl = "https://jcc.brandingyou.id/api/";

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");

  const handleRegis = async (e) => {
    e.preventDefault();
    console.log(user);

    axios
      .post(`${BaseUrl}register`, {
        name: nama,
        email: email,
        username: user,
        password: pwd,
      })
      .then(function (response) {
        console.log(response);
        window.location.href = "/login";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Masukan Data Diri</p>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="namaLengkap" className="form-control form-control-lg" placeholder="Masukan Nama Lengkap" onChange={(e) => setNama(e.target.value)} />
                  <label className="form-label">
                    <br />
                    Nama Lengkap
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="userName" onChange={(e) => setUser(e.target.value)} value={user} className="form-control form-control-lg" placeholder="Masukan Username" />
                  <label className="form-label">
                    <br />
                    Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="email" className="form-control form-control-lg" placeholder="Masukan Email" onChange={(e) => setEmail(e.target.value)} />
                  <label className="form-label">
                    <br />
                    Masukan Email
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input type="password" id="password" className="form-control form-control-lg" placeholder="Masukan Password" onChange={(e) => setPwd(e.target.value)} />
                  <label className="form-label">
                    <br />
                    Masukan Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label">Saya Setuju Dong</label>
                  </div>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <Link to="/login">
                    <button type="button" onClick={handleRegis} className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
                      Daftar
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
