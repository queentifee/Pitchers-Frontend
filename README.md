# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import { useState } from 'react';
import { images } from '../../../constants';
import { Form, Formik } from 'formik';
import { PhoneInput, defaultCountries, parseCountry } from 'react-international-phone';
import 'react-international-phone/style.css';
import CustomButton from '../../../components/button/button';

export const StepTwo = ({ next, initialValues }) => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (values) => {
    try {
      const payload = {
        phoneNumber: phone,
        password: initialValues.password,
        confirmPassword: initialValues.confirmPassword,
        userType: 'corporate',
        email: initialValues.email,
      };
  
      console.log('Payload:', payload); // Log the payload to see what is being sent
  
      const response = await fetch('https://payina-be-6f08cdfb4414.herokuapp.com/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
       console.log('Response:', response);

    // Check if the response is OK and contains JSON
    if (response.ok && response.headers.get('Content-Type')?.includes('application/json')) {
      const data = await response.json();
      console.log('Data:', data); // Log the response data

      setMessage('Registration successful');
      next({ ...initialValues, phone });
    } else {
      // Handle non-OK responses or non-JSON responses
      const errorMessage = await response.text(); // Attempt to read the response as text
      console.error('Error message:', errorMessage); // Log the error message
      setMessage('Registration failed: ' + (response.statusText || 'Unknown error'));
    }
  } catch (error) {
    setMessage('An error occurred');
    console.error('An error occurred:', error); // Log the error
  }
};
  
  const phoneRegExp =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  const countries = defaultCountries.filter((country) => {
    const { iso2 } = parseCountry(country);
    return ['af', 'bj', 'bw', 'cm', 'cg', 'sz', 'gh', 'gn', 'gw', 'ir', 'ci', 'jo', 'ng'].includes(
      iso2
    );
  });

  const countryButton = `
    .react-international-phone-country-selector button {
      padding: 1.5rem;
    }
    .react-international-phone-input {
      padding: 1.5rem !important;
    }  
  `;
  return (
    <div className="p-2 xl:p-10 bg-primary">
      <div className="hidden md:block fixed md:top-[-24.5rem] xl:top-[-21.5rem] md:right-[-0.1rem] xl:right-[-39.5rem]">
        <img src={images.Group} alt="" />
      </div>
      <div className="hidden md:block fixed md:-z-10 md:top-[-4.5rem] xl:top-[-14.5rem] right-[6.5rem]">
        <img src={images.Vector3} alt="" />
      </div>
      <div className="hidden md:block fixed md:top-[8rem] xl:top-[12.5rem] right-[20rem] -z-10">
        <img src={images.Vector2} alt="" />
      </div>
      <div className="hidden md:block fixed md:top-[10.5rem] xl:top-[14.6rem] right-[24rem] -z-10">
        <img src={images.Vector1} alt="" />
      </div>
      <div className="hidden md:block fixed md:top-[15rem] xl:top-[23rem] right-[6.5rem] -z-10">
        <img src={images.Vector2} alt="" />
      </div>
      <div className="hidden md:block fixed md:top-[22rem] xl:top-[30rem] right-[7.4rem] -z-10">
        <img src={images.Vector5} alt="" />
      </div>
      <div className="hidden md:block fixed md:top-[20rem] xl:top-[27.5rem] right-[9.4rem] -z-10">
        <img src={images.Vector4} alt="" />
      </div>
      <div className="hidden md:block fixed md:top-[11.5rem] xl:top-[19rem] right-[10.6rem] -z-10">
        <img src={images.Vector6} alt="" />
      </div>
      <Formik
        initialValues={{phoneNumber: '' }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
        enable enableReinitialize
      >
        {() => (
          <Form>
            <PhoneInput
              defaultCountry="ng"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              countries={countries}
              className="xl:w-[500px] !w-full xl:px-[1.95rem] px-[1.2rem] py-6 h-20 countryButton"
              inputClassName="!w-[125%] xl:w-full !text-base xl:!text-xl"
              style={{
                'ReactInternationalPhoneHeight': '500px',
                '--react-international-phone-flag-width': '54px',
                '--react-international-phone-border-radius': '5px'
              }}
              buttonClassName="!p-2"
              countrySelectorStyleProps="p-2"
              charAfterDialCode="-"
              onFocus={() => {}}

              
            />
            {phone.length > 5 && !phone.match(phoneRegExp) && (
              <span className="text-center text-[#db3a3a] flex justify-center mt-4">
                Invalid Number
              </span>
            )}
            {message && (
              <div className="text-center text-[#db3a3a] flex justify-center mt-4">
                {message}
              </div>
            )}
            <CustomButton
              padding="15px"
              type="submit"
              children="Next"
              className="hover:cursor-pointer flex justify-center items-center !text-lightBlue xl:text-[19px] !border-none !bg-yellow font-extrabold duration-300 xl:w-[87%] w-[90%] mx-auto my-10 !mb-12 xl:my-12 xl:mb-20"
            />
          </Form>
        )}
      </Formik>
      <style>{countryButton}</style>
    </div>
  );
};

