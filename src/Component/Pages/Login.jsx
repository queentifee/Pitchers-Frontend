// LoginPage.js
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { React, useState}  from "react";
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useNavigate , Link} from 'react-router-dom';
import logo from '../../assets/logo.png'




const LoginPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleShowPassword = () => {
    setShowPassword(true);
  };
  const handleSubmit = async (values) => {
    setIsLoading (true);
    setErrorMessage('');

  
const requestData = {
  email: values.email,
  password: values.password
};

try {
  const response = await fetch(import.meta.env.VITE_LOGIN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  const result = await response.json();

  if (response.ok) {
    const token = result?.token;

    if (token) {
      // setAuthToken(token);
      // dispatch(setToken(token));
      // const decodedString = decodeJWT(token);
      // setuserDetails(decodedString);
      localStorage.setItem('authToken', token);
      navigate('/portfolio');

    } else {
      setErrorMessage('Login failed: Invalid token structure');
    }
  } else {
    const message = result.message;

    setErrorMessage(`Failed to log in: ${message}`);
  }
} catch (error) {
  setErrorMessage(`Error logging in: ${error.message}`);
} finally {
  setIsLoading(false);
  // dispatch(hideLoading()); // Hide Loader
}
}

  return (
    
    <div className="md:w-[40%] mx-10 md:mx-auto md:py-10 ">
    <div className="text-center mt-20 xl:mt-0 text-primary font-extrabold xl:text-5xl text-2xl py-10">
          
          <span className="bg-gradient-to-r from-orange-500 to-green-800 text-transparent bg-clip-text">
            Login to Pitchers
          </span>
        </div>
    
    <div className="hidden md:block absolute md:top-[-13.6rem] md:right-[1rem] xl:top-[-12.5rem] xl:right-[-38.5rem]">
      <img src={logo} alt="" />
    </div>
    <div className="bg-white flex flex-col justify-center items-start mx-auto py-6">      
    <Formik
    initialValues={{email: '', password: ''}}
    onSubmit={handleSubmit}>
    {() => (
       <Form className="w-full space-y-4">
       <div className="xl:py-16 p-4 pt-[2.2rem] xl:p-10 xl:pl-[5rem] xl:pr-40 xl:w-auto w-full m-auto xl:space-y-8 space-y-4 pb-2 xl:pb-6">
         <div className="text-green-600 text-start font-bold xl:text-[32px] text-xl">
           Login
           </div>
                <div className="xl:w-[120%] flex flex-col space-y-2">
                  <label htmlFor="email" className="text-sm font-normal text-green-700">
                    Email Address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full h-[3.4rem] bg-green-800 border border-[#9ca3af] outline-none font-light text-base text-gray rounded-[5px] py-2 px-[10px]"
                  />
                  <ErrorMessage name="email" component="span" className="text-[#db3a3a]" />
                </div>
                <div className="xl:w-[120%] flex flex-col space-y-2 relative">
                  <label htmlFor="password" className="text-sm font-normal text-green-700">
                    Password
                  </label>
                  <Field
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter Password"
                    className="w-full h-[3.4rem] bg-green-800 border border-[#9ca3af] outline-none font-light text-base text-gray rounded-[5px] py-2 px-[10px]"
                  />
                  <ErrorMessage name="password" component="span" className="text-[#db3a3a]" />
                  {showPassword ? (
                    <BsEye onClick={handleShowPassword} className="absolute top-10 right-1" />
                  ) : (
                    <BsEyeSlash onClick={handleShowPassword} className="absolute top-10 right-1" />
                  )}
                </div>
                <div>
                  <Link to="/">
                    <a className="text-green-700 underline font-semibold pt-11">Forgot password?</a>
                  </Link>
                </div>

                {errorMessage && <div className="text-[#db3a3a]">{errorMessage}</div>}

                <button   className="mt-5 inline-block rounded-full item-center justify-center bg-green-600 px-6 py-3 text-black font-semibold hover:bg-orange-600 transition"


                  type="submit"
                  disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Log in'}
                </button>
              </div>
              <p className="text-center text-green-700">
                Don't have an account?
                <Link to="/" className="px-2">
                  <a className="text-green-600 underline">Sign Up</a>
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
      </div>
    
  );
};
export default LoginPage;
