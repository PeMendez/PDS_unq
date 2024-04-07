import "./App.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import NotFoundPage from "./NotFoundPage";
import Profile from "./pages/profile";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<PublicRoute > <HomePage /> </PublicRoute>}/>
      <Route path="/login" element={<PublicRoute > <LoginPage /> </PublicRoute>}/>
      <Route path="/profile" element={<PrivateRoute > <Profile /> </PrivateRoute>}/>
      <Route path="*" element={<NotFoundPage />} />
  </Routes>
  );
}



export default App;