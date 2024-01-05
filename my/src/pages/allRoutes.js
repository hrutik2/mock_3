import { Routes, Route } from 'react-router-dom';
import { Dashboards } from './Dashbord';
import { Login } from './login';
import { Signin } from './signup';


export const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Dashboards />} />
      <Route path="/dashboard" element={<Dashboards />} />
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signin/>}></Route>
      {/* Add more routes here as needed */}
    </Routes>
  );
};
