import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './login-form/form.jsx';
import ToolboxMainScreen from './toolbox-main-screen/toolbox-main-screen.jsx'; 
import './App.css'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login-form" />} />

        <Route path="/login-form" element={<LoginForm />} /> {/* Главная страница с формой */}
        <Route path="/toolbox-main-screen" element={<ToolboxMainScreen />} /> {/* Страница после авторизации */}
      </Routes>
    </Router>
  );
};

export default App;
