import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { addUser } from "@/slice/userSlice";
import { useDispatch } from "react-redux";
import { User } from "@/types";
import app from "@/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  
  const auth = getAuth(app);

  const login = async () => {
   
    signInWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {

    alert("Successfully created an email")
    
    // ...Signed In
    const user = userCredential.user
    console.log("User ====>",user)
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    // ...
    alert(errorCode);
  });
   
  
    
  };  
  return (
    <div className=" mx-auto my-[30px] my-[40px] container bg-white border ">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-6/12 px-2">
            <div>
              <div>
                <h2 className="font-bold text-[25px]">
                  SIGN IN TO YOUR ACCOUNT
                </h2>
                <p className="text-gray-500">
                  Field in the following information fieds to access your
                  account
                </p>
              </div>
              <div className="my-5">
                <p className="font-bold">Signin with</p>
                <div className="flex justify-center">
                  <button
                    className="border w-1/3 font-bold py-2 px-4 rounded-md mr-2"
                  >
                    <FcGoogle className="mx-auto" />
                  </button>
                  <button className=" text-white w-1/3 border font-bold py-2 px-4 rounded-md mr-2">
                    <FaFacebook color="blue" className="mx-auto" />{" "}
                  </button>
                  <button className="border w-1/3 text-white font-bold py-2 px-4 rounded-md">
                    <FaFacebook color="blue" className="mx-auto" />
                  </button>
                </div>
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-gray-500 text-center text-sm dark:text-neutral-200">
                  Or continue with
                </p>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <label className="">Email Address</label>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full border rounded px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none gray-[ #CCCCCC] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput3"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <label className="">Enter Password</label>
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full border rounded px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none gray-100 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput3"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-6 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative  float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem]" 
                    type="checkbox"
                    value=""
                    id="exampleCheck3"
                  />
                </div>

                <a
                  href="#!"
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Forgot password?
                </a>
              </div>

              <button
                className="inline-block w-full rounded-lg font-bold bg-blue-600 px-7 pb-2.5 pt-3 text-sm leading-normal text-white "
                onClick={login}
              >
                Sign in
              </button>

              <p className="text-sm text-gray-500 my-3 text-center">
                Do not have an account?{" "}
                <Link href="/signup" className="text-blue-500">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
