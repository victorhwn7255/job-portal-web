import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { HiOfficeBuilding } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import toast from "react-hot-toast";
import Metatags from "../components/Metatages";

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    //I WILL SKIP THE USER AUTH CHECK FOR THIS ASSESSMENT
    //In real productions, I would use a 3rd party Auth Provider to handle login & signup

    router.push("/browse");
    toast.success("Welcome back Jonathan!");
  };

  return (
    <div className="flex justify-center pt-[4rem] md:pt-[5rem] lg:pt-[5.5rem]">
    <Metatags title="Login | Quick Jobs" />
      <div className="">
        {/* logo */}
        <Link href="/" className="flex flex-col items-center space-y-2 group">
          <HiOfficeBuilding
            size={45}
            className="text-lightBlue dark:text-grayClassic50 ring-2 rounded-full ring-lightBlue p-[9px] group-hover:scale-95 group-hover:text-white group-hover:ring-blue-800 group-hover:bg-blue-800 duration-200"
          />
          <h3 className="text-lightBlue dark:text-grayClassic50 font-medium text-base md:text-lg group-hover:text-blue-800 dark:group-hover:text-grayClassic50 duration-200">
            Quick Jobs
          </h3>
        </Link>

        {/* input form */}
        <form
          className="flex flex-col items-center justify-center h-[300px] w-[360px] sm:w-[450px] bg-white dark:bg-bgDark3 shadow-md rounded-xl mt-10 px-8 py-6"
          onSubmit={handleSubmit}
        >
          {/* Email */}
          <div className="form__group field w-full flex flex-col items-start mt-3">
            <input
              required
              placeholder="Name"
              className="form__field inputField"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form__label" htmlFor="email">
              Email Address
            </label>
          </div>
          {/* Password */}
          <div className="form__group field w-full flex flex-col items-start mt-3">
            <input
              required
              placeholder="Name"
              className="form__field inputField"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="form__label" htmlFor="password">
              Password
            </label>
          </div>
          <button className="smBlueBtn w-full mt-9 py-2" type="submit">
            <p>Login</p>
          </button>
        </form>

        {/* others */}
        <div className="flex flex-col justify-center items-center mt-14 w-full space-y-3">
          <p className="text-grayClassic500 font-light">Or</p>
          <button
            onClick={() => router.push("/browse")}
            className="flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-900 w-[75%] py-3 rounded-full hover:bg-slate-200 duration-200 hover:shadow-md dark:hover:brightness-125"
          >
            <FcGoogle size={18} />
            <p className="text-xs md:text-sm text-grayClassic700 dark:text-grayClassic100">
              Continue with Google
            </p>
          </button>
          <button
            onClick={() => router.push("/browse")}
            className="flex items-center justify-center space-x-2 bg-slate-100 dark:bg-slate-900 w-[75%] py-3 rounded-full hover:bg-slate-200 duration-200 hover:shadow-md dark:hover:brightness-125"
          >
            <BsLinkedin
              size={18}
              className="text-lightBlue dark:text-sky-500"
            />
            <p className="text-xs md:text-sm text-grayClassic700 dark:text-grayClassic100">
              Continue with LinkedIn
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
