import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import ScrollToTop from './components/ScrollToTop.jsx'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ScrollToTop/>
      <Toaster
        toastOptions={{
          position: "top-center", // Set default position here
          style: {
            zIndex: 9999,
          },
        }}
      />
      <App />
    </Router>
  </StrictMode>
);
