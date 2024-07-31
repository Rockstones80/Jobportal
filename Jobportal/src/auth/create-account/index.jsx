import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebookF  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Button from "../components/Button";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Password, setPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePassword = () => {
    setPassword(!Password);
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full lg:w-1/2 px-4 md:px-12 lg:px-24 mt-10">
        <div>
          <Logo />
        </div>
        <div className="my-">
          <div className="flex flex-col justify-center">
            <p className="text-xl mt-3">Create account.</p>
            <p className="font-medium text-gray-500 text-[12px] mb-5">
              Already Have an account?{" "}
              <Link to="/auth/sign-in" className="text-primary-700">
                Log In
              </Link>
            </p>
          </div>
        </div>
        <form>
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <div className="w-full sm:w-1/2">
              <input
                id="Full name"
                type="text"
                placeholder="Full Name"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-600 placeholder-gray-400 outline-none focus:outline-none placeholder:text-sm"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-600 placeholder-gray-400 outline-none focus:outline-none placeholder:text-sm"
                required
              />
            </div>
          </div>
          <div className="mb-5">
            <input
              id="email"
              type="email"
              placeholder="Email address"
              className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-600 placeholder-gray-400 outline-none focus:outline-none placeholder:text-sm"
              required
            />
          </div>
          <div className="mb-5 relative">
            <label htmlFor="password">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-600 placeholder-gray-400 outline-none focus:outline-none placeholder:text-sm"
                required
                name="password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </label>
          </div>
          <div className="mb-3 relative">
            <label htmlFor="confirmPassword">
              <input
                id="confirmPassword"
                type={Password ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-600 placeholder-gray-400 outline-none focus:outline-none placeholder:text-sm"
                required
                name="confirmPassword"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {Password ? <FaEyeSlash /> : <FaEye />}
              </button>
            </label>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <input type="checkbox" required className="bg-primary-600"/>
            <p className="text-gray-500 text-xs sm:text-sm">
              I&apos;ve read and agree with your <Link className="text-primary-700">Terms of Services</Link>
            </p>
          </div>
          <div className="relative bg-primary-700 font-medium rounded-md w-full text-center py-3 px-4 text-white cursor-pointer shadow-sm"> 
            <Button
              type='button'
              title='Create Account'
              className='cursor-pointer'
            />
            {/* <div className="absolute right-20 top-1/2 transform -translate-y-1/2 text-white">
              <FaArrowRight />
            </div> */}
          </div>
        </form>
        <div className="flex justify-center text-gray-500 my-4">
          <p>or</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full gap-4 mt-4">
  <div className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-3 py-2 w-full sm:w-auto">
    <FaFacebookF color="blue" className="text-lg sm:text-xl"/>
    <Button
      type='submit'
      title='Sign up with Facebook'
      className='text-gray-700 text-xs sm:text-sm whitespace-nowrap'
    /> 
  </div>
  <div className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-3 py-2 w-full sm:w-auto">
    <FcGoogle className="text-lg sm:text-xl"/>
    <Button
      type='submit'
      title='Sign up with Google'
      className='text-gray-700 text-xs sm:text-sm whitespace-nowrap'
    /> 
  </div>
</div>
      </div>
      <div className="hidden lg:block lg:w-1/2 bg-hero-pattern bg-cover bg-center"></div>
    </div>
  );
};

export default SignUpPage;