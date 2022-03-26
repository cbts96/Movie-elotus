import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleAuthProvider } from "../../../firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {Divider} from "antd";
import "../../../assets/style/heading.scss"
const LoginWithGG = () => {


  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        
      });
  };

  const [email, setEmail] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div>
      <Divider>
          <div className="heading-secondary">CLICK THE BUTTON</div>
        </Divider>
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
             

              <div></div>
              <div className="mt-7"></div>
              <div className="mt-7 flex">
                <label
                  htmlFor="remember_me"
                  className="inline-flex items-center w-full cursor-pointer"
                >
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="remember"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember User</span>
                </label>
                <div className="w-full text-right">
                  <a
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    Not you?
                  </a>
                </div>
              </div>
              <div className="mt-7">
                
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button
                autoFocus
                  onClick={googleLogin}
                  className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  LogIn With Google
                </button>
              </div>
              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">Forgot password?</label>
                  <a
                    href="#"
                    className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default LoginWithGG;
