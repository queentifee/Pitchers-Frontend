// CreateAccountPage.js
import { Form, Formik, Field, ErrorMessage } from 'formik';
import  { React, useState} from "react";



function CreateAccountPage() {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [message, setMessage] = useState ('');


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
  
    
  
  return (
   
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center">Create Account</h2>
        <Formik
         initialValues={{ email: '', password: ''} }
         onSubmit={handleSubmit}>
          {({ handleSubmit }) => (
            <form className="space-y-4" onSubmit= {handleSubmit}> 
              <div>
              <label className="block text-sm font-medium">Email</label>
              <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm"
/>
</div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full p-2 border rounded"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {apiError && (
                <div className="text-red-500 text-sm">{apiError}</div>
              )}
              {message && (
                <div className="text-green-500 text-sm">{message}</div>
              )}
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-green-600 text-white rounded hover:bg-green-700"
              >
                {loading ? 'Saving...' : 'Sign Up'}
              </button>
            </form>
          )}
        </Formik>
        <p className="text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500">
            Log In
          </a>
        </p>
      </div>
    </div>
        );
}

export default CreateAccountPage;