import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="741366542459-dujrn6ghra9umk6sqtuuspagtcc22f3r.apps.googleusercontent.com">

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </GoogleOAuthProvider>
)
