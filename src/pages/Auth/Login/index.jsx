import React, { useState } from "react";
import assets from "../../../assets";
import { MdMailOutline, MdOutlineLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../configs/redux/actions/Login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    dispatch(loginUser(data, navigate));
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-lime-400 py-5 overflow-y-auto">
        <div className="w-96 flex flex-col mx-2">
          {/* <img className="w-96" src={assets.logoCrud3} alt="Kato Hair Design" /> */}
          <div className="bg-white rounded-lg flex flex-col mt-5 items-center py-10">
            <h1 className="text-lime-400 font-semibold text-2xl mb-10 font-noto-sans">
              LOGIN
            </h1>
            <form onSubmit={handleLogin} className="flex flex-col">
              <div className="relative w-full mb-6">
                <input
                  className="border border-lime-300 outline-none focus:ring-1 focus:ring-lime-300 text-primary-100 text-sm font-nunito-sans rounded-lg pl-10 pr-4 py-3"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="absolute top-3.5 left-3.5">
                  <MdMailOutline className="text-xl text-primary-100" />
                </label>
              </div>
              <div className="relative w-full mb-6">
                <input
                  className="border border-lime-300 outline-none focus:ring-1 focus:ring-lime-300 text-primary-100 text-sm font-nunito-sans rounded-lg pl-10 pr-4 py-3"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password" className="absolute top-3.5 left-3.5">
                  <MdOutlineLock className="text-xl text-primary-100" />
                </label>
              </div>
              <div className="relative w-full mb-6">
                <p
                  type="button"
                  className="text-end text-sm text-lime-400"
                  onClick={() => navigate("/register")}
                >
                  Don't have an account?
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-lime-300 outline-none hover:bg-primary-50 focus:bg-primary-50 focus:ring-2 focus:ring-primary-75 active:bg-primary-75 py-3 text-sm font-nunito-sans font-bold rounded-lg text-black"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
