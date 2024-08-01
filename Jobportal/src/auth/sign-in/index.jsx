import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebookF  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Button from "../components/Button";

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  
    return (
      <div className="flex min-h-screen">
        <div className="w-full lg:w-1/2 px-4 md:px-12 lg:px-24 mt-10">
          <div>
            <Logo />
          </div>
          <div className="mt-20">
            <div className="flex flex-col justify-center">
              <p className="text-xl mt-3">Sign in</p>
              <p className="font-medium text-gray-500 text-[12px] mb-5">
              Don&apos;t have account? {""}
                <Link to="/auth/create-account" className="text-primary-700">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
          <form>
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
              
            </div>
            
            <div className="flex justify-between text-sm mb-12">
                <div className="flex items-center gap-2">
                    <input type="checkbox" required className="bg-primary-600"/>
                    <p className="text-gray-500 text-xs sm:text-sm">
                    Remember me
                    </p>
                </div>
                <div>
                    <Link href="" className="text-primary-700">Forget Password</Link>
                </div>
            </div>
            <div className="relative bg-primary-700 font-medium rounded-md w-full text-center py-3 px-4 text-white cursor-pointer shadow-sm"> 
              <Button
                type='button'
                title='Sign in'
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
    <div className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto">
      <FaFacebookF color="blue" className="text-lg sm:text-xl"/>
      <Button
        type='submit'
        title='Sign in with Facebook'
        className='text-gray-700 text-xs whitespace-nowrap'
      /> 
    </div>
    <div className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto">
      <FcGoogle className="text-lg sm:text-xl"/>
      <Button
        type='submit'
        title='Sign in with Google'
        className='text-gray-700 text-xs whitespace-nowrap'
      /> 
    </div>
  </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 bg-hero-pattern bg-cover bg-center relative">
        <div className="absolute bottom-44 left-20">
          <p className="font-medium text-3xl text-white">Over 1,75,324 candidates <br /> waiting for good employees.</p>
        </div>
        </div>
      </div>
    )
}

export default SignInPage
