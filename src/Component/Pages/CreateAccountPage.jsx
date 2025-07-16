// CreateAccountPage.js
import { Form, Formik, Field, ErrorMessage } from 'formik';
import  { React, useState} from "react";
import { useNavigate , Link} from 'react-router-dom';

import { GoogleLogin } from '@react-oauth/google';




function CreateAccountPage() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [message, setMessage] = useState ('');
  const navigate = useNavigate()


  const handleSubmit = async (values) => {
    setLoading(true);
    setApiError('');


    try {
      const response = await fetch (import.meta.env.VITE_REGISTER_USER_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
          email : values.email,
          password : values.password
          }),
});

const data = await response.json();

if (response.ok){
        setMessage('Registration successful');
    } else {
      setApiError(data.message || 'Failed to register. Please try again.');
    } 
  } catch (error) {
    setApiError('An error occurred. Please try again.');
  } finally {
    setLoading(false);
  }
    };

    //sign up with google
    
    const handleGoogleSuccess = (credentialResponse) => {
      console.log("Google login successful:", credentialResponse);
  const token = credentialResponse.credential
      // Send ID token to backend
      fetch('http://localhost:4000/api/v1/auth/google-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then(res => res.json())
        .then(data => {
          console.log("Server response:", data);
  
          // Save token or redirect user, etc.
        })
        .catch(err => console.error(err));
    };
  return (
   
    
   <div className="md:w-[40%] mx-10 md:mx-auto md:py-10 ">
       <div className="text-center mt-20 xl:mt-0 text-primary font-extrabold xl:text-5xl text-2xl py-10">
             
             <span className="bg-gradient-to-r from-orange-500 to-green-800 text-transparent bg-clip-text">
               Create an Account
             </span>
           </div>
       
       {/* <div className="hidden md:block absolute md:top-[-13.6rem] md:right-[1rem] xl:top-[-12.5rem] xl:right-[-38.5rem]">
         <img src={logo} alt="" />
       </div> */}
       <div className="bg-white flex flex-col justify-center items-start mx-auto py-6">      
       
        <Formik
         initialValues={{ email: '', password: ''} }
         onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
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
                    type='text'
                    placeholder="Enter Password"
                    className="w-full h-[3.4rem] bg-green-800 border border-[#9ca3af] outline-none font-light text-base text-gray rounded-[5px] py-2 px-[10px]"
                  />
                  <ErrorMessage name="password" component="span" className="text-[#db3a3a]" />
              {apiError && (
                <div className="text-red-500 text-sm">{apiError}</div>
              )}
              {message && (
                <div className="text-green-500 text-sm">{message}</div>
              )}
                <button              className="mt-10 inline-block rounded-full item-center justify-center bg-green-600 px-6 py-3 text-black font-semibold hover:bg-orange-600 transition"
                type="submit"
              >
                {loading ? 'Saving...' : 'Sign Up'}
              </button>
              </div>
              </div>
            </Form>
          )}
        </Formik>
        <p className="text-center text-green-700">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500">
            Log In
          </a>
        </p>
      </div>
      <p>Or sign up with Google:</p>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => {
          console.log('Google login failed');
        }}
      />
    </div>

    
        );
}

export default CreateAccountPage;